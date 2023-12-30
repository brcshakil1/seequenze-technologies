import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        <NavLink to="/">
          <li>My Projects</li>
        </NavLink>
        <NavLink to="sample-projects">
          <li>Sample Projects</li>
        </NavLink>
      </div>
      <div>
        <NavLink to="my-projects">
          <li>Apps</li>
        </NavLink>
        <NavLink to="my-projects">
          <li>Intro to Necleo</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
