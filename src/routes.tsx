import type { RouteObject } from "react-router"
import GraphPage from "./pages/GraphPage"
import HomePage from "./pages/HomePage"
import { RootLayout } from "./layouts/RootLayout"
import PrefillAssignment from "./pages/PrefillAssignment"


export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "nodes",
        element: <GraphPage />,
      },
      {
        path: "nodes/:nodeId/prefill",
        element: <PrefillAssignment />,
      },
    ]
  },
]