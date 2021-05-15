import propTypes from "prop-types";

const Item = ({ title, value }) => (
  <div className="flex flex-col items-center bg-gray-800 w-full lg:w-5/12 xl:w-64 py-3 px-2 my-2 mx-2">
    <p className="text-sm text-gray-300 font-semibold mb-2">{title}</p>
    {typeof value === "object" ? (
      value
    ) : (
      <p className="text-5xl text-gray-200 font-bold">{value}</p>
    )}
  </div>
);

Item.propTypes = {
  title: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.element])
};

Item.defaultProps = {
  title: "",
  value: ""
};

export default Item;
