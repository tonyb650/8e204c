import { render, screen } from "@testing-library/react";
import GraphPage from "@/pages/GraphPage";
import { MemoryRouter } from "react-router";

describe("GraphPage", () => {
  it("should render the graph page", async () => {
    render(
      <MemoryRouter>
        <GraphPage />
      </MemoryRouter>
    )

    const heading = await screen.findAllByRole('heading')

    expect(heading[0]).toHaveTextContent("Action Blueprint Graph");
  });
});