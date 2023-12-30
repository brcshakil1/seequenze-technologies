import SectionTitle from "./../../../components/ui/SectionTitle";
import createProjectImg from "../../../assets/createProject-img.png";
import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ProjectCard from "../../../components/shared/ProjectCard";

const MyProjects = () => {
  const [isModal, setIsModal] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {
    data: projects,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["all-projects"],
    queryFn: async () => {
      const res = await axiosSecure.get("/projects");
      return res.data;
    },
  });

  console.log(projects);

  return (
    <div className=" mx-4 pl-0 md:pl-10 lg:pl-[52px]">
      <div>
        <SectionTitle title="My Projects" />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          onClick={() => setIsModal(!isModal)}
          className="w-full cursor-pointer rounded-[10px]  p-5 bg-white mt-6"
        >
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
      {/* showing project from database */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <ProjectCard key={project?._id} project={project} />
        ))}
      </div>

      {/* Form Modal For Create new project */}
      <div
        className={`${isModal ? "block" : "hidden"} absolute top-0
         left-0  w-full min-h-full grid place-items-center`}
      >
        <Modal refetch={refetch} />
        <div
          onClick={() => setIsModal(false)}
          className="z-30  absolute h-screen w-full bg-[#000000b3]"
        ></div>
      </div>
    </div>
  );
};

export default MyProjects;
