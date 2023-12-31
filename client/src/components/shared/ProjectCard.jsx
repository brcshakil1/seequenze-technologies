import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

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
      {project?.photo && (
        <div className="grid place-items-center pt-1">
          <Link to={`/project/${project?._id}`}>
            <button
              className="text-center text-[12px] text-white font-semibold 
        rounded-full active:bg-[#fa792fe5] bg-[#FA782F] py-1 px-4"
            >
              Show Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
