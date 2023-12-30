import { PropTypes } from "prop-types";
const SectionTitle = ({ title, align }) => {
  return (
    <h2 className={`text-${align ? align : "left"} text-[40px] font-semibold`}>
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
};

export default SectionTitle;
