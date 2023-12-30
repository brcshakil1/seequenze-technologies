import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 bg-[#F8F8F8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
