import toast from "react-hot-toast";
import { imageUpload } from "../../utils/utils";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { PropTypes } from "prop-types";

const UpdateModal = ({ project, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.files[0];
    const projectName = form.name.value;

    try {
      // Upload Image
      const imageData = await imageUpload(photo);
      const UpdatedProject = {
        photo: imageData?.data?.display_url,
        projectName,
      };
      //   Send data to the Database
      const { data } = await axiosSecure.patch(
        `/update-project/${project?._id}`,
        UpdatedProject
      );
      console.log(data);
      if (data?.modifiedCount) {
        toast.success("Successfully Updated The Project!");
        form.reset();
        refetch();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="absolute bg-white w-[90%] md:w-[550px] py-5 px-4 rounded-lg z-50">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Photo</span>
          </label>
          <input
            type="file"
            placeholder="Select Image"
            name="photo"
            className="border border-gray-300 rounded-md hover:outline-1 outline-gray-400 p-3"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input
            type="text"
            placeholder="Project Name"
            name="name"
            defaultValue={project && project?.projectName}
            className="border border-gray-300 rounded-md p-3"
            required
          />
        </div>
        <button
          className="w-full py-2 px-4 my-3 font-semibold text-white rounded-md bg-[#FA782F]
         active:bg-[#fa792fb7]"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

UpdateModal.propTypes = {
  refetch: PropTypes.string,
  project: PropTypes.object,
};

export default UpdateModal;
