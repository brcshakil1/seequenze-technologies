import { useState } from "react";
import logo from "../../assets/necelo.svg";
import userImg from "../../assets/user.jpeg";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-5 py-4">
      <div className="flex  justify-between relative">
        <img src={logo} alt="Necelo" />
        <div className="flex flex-row-reverse justify-between items-center  gap-3.5">
          <div
            onClick={() => setIsShow(!isShow)}
            className="flex  items-center gap-3 cursor-pointer"
          >
            <img
              src={userImg}
              className="w-9 h-9 rounded-full object-cover"
              alt="user"
            />
            <div>{isShow ? <FaCaretUp /> : <FaCaretDown />}</div>
          </div>
          <div
            className={`border absolute md:static md:block top-12 w-2/3 md:w-auto px-4 py-5 md:py-0 ${
              isShow ? "block" : "hidden"
            }`}
          >
            <h3 className="text-sm font-medium text-black">
              Free Trial <span className="px-[6px]">|</span>{" "}
              <span className="duration text-[10px]">2 days left</span>
            </h3>
            <p className="text-[10px] text-[#FA782F]">Extend free trial</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
