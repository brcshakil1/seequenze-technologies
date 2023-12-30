import Dashboard from "../layout/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default Router;
