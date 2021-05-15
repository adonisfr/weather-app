import propTypes from "prop-types";

const ItemValue = ({ primaryText, secundaryText }) => (
  <div className="flex flex-row space-x-1">
    <p className="text-5xl text-gray-200 font-bold">{primaryText}</p>
    <p className="text-xl text-gray-400 font-semibold mt-2">{secundaryText}</p>
  </div>
);

ItemValue.propTypes = {
  primaryText: propTypes.string,
  secundaryText: propTypes.string
};

ItemValue.defaultProps = {
  primaryText: "",
  secundaryText: ""
};

export default ItemValue;
