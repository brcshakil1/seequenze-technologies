import { PropTypes } from "prop-types";
const SectionTitle = ({ title, align }) => {
  return (
    <h2
      className={`text-${
        align ? align : "left"
      } text-3xl md:text-[40px] font-semibold pt-6`}
    >
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
};

export default SectionTitle;
