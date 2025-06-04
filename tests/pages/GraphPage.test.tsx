import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import GraphPage from "@/pages/GraphPage";
import { MemoryRouter } from "react-router";
import { server } from "../mocks/server";
import { delay, http, HttpResponse } from "msw";
import { data } from "../mocks/data";



describe("GraphPage", () => {
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <GraphPage />
      </MemoryRouter>
    )
  }


  it("should render the correct number of nodes on the graph page", async () => {
    renderComponent()
    
    const nodes = await screen.findAllByTestId(/node-/i)
    
    expect(nodes).toHaveLength(data.nodes.length)
  });
  

  it("should render loading indicator while data is being fetched", async () => {
    server.use(
      http.get('/api/v1/id/actions/blueprints/id/graph', async () => {
        await delay()
        return HttpResponse.json([])
      })
    )

    renderComponent()

    const loadingIndicator = await screen.findByRole('progressbar')
    expect(loadingIndicator).toBeInTheDocument()
  })
  

  it("should remove loading indicator when data is fetched", async () => {
    renderComponent()

    await waitForElementToBeRemoved(() =>  screen.queryByRole("progressbar"))
  })
});