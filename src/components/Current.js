import React, { useContext, useEffect } from "react";
import dayjs from "dayjs";
import WeatherContext from "./context/WeatherContext";
import place from "./common/img/place_white_24dp.svg";
import showGeolocationError from "./utils";

const Current = () => {
  const { weather, units, getCurrentWeatherByLatLon, setLocationMessage } = useContext(
    WeatherContext
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position?.coords || {};
          getCurrentWeatherByLatLon(latitude, longitude);
        },
        (error) => {
          setLocationMessage(showGeolocationError(error));
        }
      );
    }
  }, []);

  const { icon, main } = weather?.weather ? weather?.weather[0] : {};

  const today = weather ? dayjs.unix(weather.dt).format("ddd D MMM") : "";

  if (weather) {
    return (
      <div className="flex flex-col items-center mb-6">
        <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="icon" />
        <div className="flex flex-col space-y-12 items-center text-gray-100">
          <div className="">
            <span className="text-6xl">{weather?.main?.temp}</span>
            <sup className="text-3xl ">{units === "metric" ? "℃" : "℉"}</sup>
          </div>
          <span className="text-xl text-gray-200">{main}</span>
          <span className="text-sm text-gray-300">Today - {today}</span>
        </div>
        <div className="flex space-x-2 items-center space-y-3">
          <img src={place} alt="place" className="h-4 mt-3" />
          <span className="text-xs text-gray-400">{`${weather?.name} (${weather?.sys?.country})`}</span>
        </div>
      </div>
    );
  }

  return null;
};

export default Current;
