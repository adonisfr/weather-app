import propTypes from "prop-types";
import { useContext } from "react";
import dayjs from "dayjs";
import WeatherContext from "../context/WeatherContext";

const ForecastItem = ({ item }) => {
  const { units } = useContext(WeatherContext);

  const day = item?.dt ? dayjs.unix(item.dt).format("ddd, D MMM") : "";
  const icon = item?.weather[0]?.icon;

  return (
    <div className="flex flex-col bg-gray-800 w-32 items-center text-sm text-gray-300 py-2 rounded-lg">
      <div>{day}</div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
      <div className="text-md space-x-4 text-xs">
        <span>
          {item?.temp?.max || ""}
          {units === "metric" ? "℃" : "℉"}
        </span>
        <span>
          {item?.temp?.min || ""}
          {units === "metric" ? "℃" : "℉"}
        </span>
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  item: propTypes.instanceOf(Object)
};

ForecastItem.defaultProps = {
  item: null
};

export default ForecastItem;
