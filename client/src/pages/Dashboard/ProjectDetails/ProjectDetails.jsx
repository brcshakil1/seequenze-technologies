import Loading from "../../../components/ui/Loading";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "./../../../components/ui/SectionTitle";
import { useState } from "react";
import UpdateModal from "../../../components/ui/UpdateModal";
import useProject from "../../../hooks/useProject";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ProjectDetails = () => {
  const [isModal, setIsModal] = useState(false);
  const { id } = useParams();
  const { project, isPending, refetch } = useProject(id);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  //   handle delete
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/delete-project/${project?._id}`);
        console.log(res.data);
        if (res?.data?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
          navigate(-1);
        }
      }
    });
  };

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <div className="px-12">
          <SectionTitle title="Projects Details" />
          <div className="border-2 p-4 rounded-xl bg-white border-gray-400 flex flex-col lg:flex-row gap-10 items-center  h-[500px] my-10">
            <img
              src={project?.photo}
              className="md:w-[300px] h-full object-cover rounded-lg"
              alt={project?.projectName}
            />
            <div>
              <h2 className="text-3xl font-semibold">
                Project Name: {project?.projectName}
              </h2>
              {/* button container */}
              <div className="p-5">
                <button
                  onClick={() => setIsModal(!isModal)}
                  className="btn btn-primary font-semibold mr-4"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="btn btn-primary font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          {/* Modal For Create new project */}
          <div
            className={`${isModal ? "block" : "hidden"} absolute top-0
           left-0  w-full min-h-full grid place-items-center`}
          >
            <UpdateModal project={project} refetch={refetch} />
            <div
              onClick={() => setIsModal(false)}
              className="z-30  fixed top-0 left-0 h-screen w-full bg-[#000000b3]"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
