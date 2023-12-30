import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/shared/Navbar";
import { useState } from "react";

const Dashboard = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isMenuTrue, setIsMenuTrue] = useState(false);

  console.log(isCollapse);
  return (
    <div>
      <Navbar
        isShow={isShow}
        setIsShow={setIsShow}
        setIsMenuTrue={setIsMenuTrue}
        isMenuTrue={isMenuTrue}
      />
      <div
        onClick={() => {
          setIsShow(false);
          setIsMenuTrue(false);
        }}
        className="flex flex-col md:flex-row "
      >
        <div className={`hidden md:block ${isCollapse ? "w-auto" : "w-1/4"}`}>
          <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        </div>
        <div className="w-full md:w-3/4 bg-[#F8F8F8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
