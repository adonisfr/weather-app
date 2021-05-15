import propTypes from "prop-types";
import ForecastItem from "./ForecastItem";

const ForecastList = ({ list }) => (
  <div className="flex flex-wrap justify-center 2xl:justify-start 2xl:ml-8">
    {list.map((i, index) => (
      <div key={`${index + 1}`} className="mx-2 my-2">
        <ForecastItem item={i} />
      </div>
    ))}
  </div>
);

ForecastList.propTypes = {
  list: propTypes.arrayOf(propTypes.any)
};

ForecastList.defaultProps = {
  list: []
};

export default ForecastList;
