import Dashboard from "../layout/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import MyProjects from "../pages/Dashboard/MyProjects/MyProjects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <MyProjects />,
      },
    ],
  },
]);

export default Router;
