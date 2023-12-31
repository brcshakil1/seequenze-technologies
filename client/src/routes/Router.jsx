import Dashboard from "../layout/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import MyProjects from "../pages/Dashboard/MyProjects/MyProjects";
import SampleProjects from "../pages/Dashboard/SampleProjects/SampleProjects";
import ProjectDetails from "../pages/Dashboard/ProjectDetails/ProjectDetails";
import Empty from "../pages/Dashboard/Empty/Empty";
import Error from "../pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
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
      // All page are empty
      {
        path: "/apps",
        element: <Empty />,
      },
      {
        path: "/intro",
        element: <Empty />,
      },
      {
        path: "/help",
        element: <Empty />,
      },
      {
        path: "/feedback",
        element: <Empty />,
      },
    ],
  },
]);

export default Router;
