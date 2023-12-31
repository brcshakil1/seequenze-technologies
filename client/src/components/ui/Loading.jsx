import { PropTypes } from "prop-types";
const Loading = ({ flex }) => {
  return (
    <div
      className={`${
        flex ? "flex justify-center " : "min-h-[80vh] grid place-items-center"
      }`}
    >
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

Loading.propTypes = {
  flex: PropTypes.bool,
};

export default Loading;
