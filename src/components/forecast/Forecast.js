import React, { useContext, useEffect } from "react";
import WeatherContext from "../context/WeatherContext";
import ForecastList from "./ForecastList";

const Forecast = () => {
  const { weather, forecast, getForecast } = useContext(WeatherContext);
  const { lat, lon } = weather?.coord || {};

  useEffect(() => {
    if (lat && lon) {
      getForecast(lat, lon);
    }
  }, [lat, lon]);

  return (
    <div className="bg-gray-900 py-5">
      <ForecastList list={forecast?.daily || []} />
    </div>
  );
};

export default Forecast;
