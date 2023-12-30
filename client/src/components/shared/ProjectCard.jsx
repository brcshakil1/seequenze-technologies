import { PropTypes } from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full  cursor-pointer rounded-[10px]  p-5 bg-white ">
      <div className="h-[180px] rounded-[10px] overflow-hidden">
        <img
          src={project?.download_url ? project?.download_url : project?.photo}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <h3 className="font-semibold text-center pt-2.5">
        {project?.author ? project?.author : project?.projectName}
      </h3>
      <p className="text-center text-[12px] ">
        or try a <span className="text-[#FA782F]">sample project</span>
      </p>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
