import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
