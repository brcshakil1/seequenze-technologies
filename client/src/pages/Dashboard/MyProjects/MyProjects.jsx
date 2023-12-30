import SectionTitle from "./../../../components/ui/SectionTitle";
import createProjectImg from "../../../assets/createProject-img.png";

const MyProjects = () => {
  return (
    <div className=" mx-4 pl-0 md:pl-10 lg:pl-[52px]">
      <div>
        <SectionTitle title="My Projects" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full cursor-pointer rounded-[10px]  p-5 bg-white mt-6">
          <div className="bg-[#fa782f66] h-[180px] rounded-[10px] grid place-items-center">
            <img src={createProjectImg} alt="" />
          </div>
          <h3 className="font-semibold text-center pt-2.5">
            Create a new project
          </h3>
          <p className="text-center text-[12px] ">
            or try a <span className="text-[#FA782F]">sample project</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
