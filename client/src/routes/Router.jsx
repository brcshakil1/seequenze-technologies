import Dashboard from "../layout/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import MyProjects from "../pages/Dashboard/MyProjects/MyProjects";
import SampleProjects from "../pages/Dashboard/SampleProjects/SampleProjects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <MyProjects />,
      },
      {
        path: "/sample-projects",
        element: <SampleProjects />,
      },
    ],
  },
]);

export default Router;
