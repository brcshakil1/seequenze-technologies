import Dashboard from "../layout/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import MyProjects from "../pages/Dashboard/MyProjects/MyProjects";
import SampleProjects from "../pages/Dashboard/SampleProjects/SampleProjects";
import ProjectDetails from "../pages/Dashboard/ProjectDetails/ProjectDetails";

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
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default Router;
