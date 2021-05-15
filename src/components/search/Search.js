import React, { useContext, useState } from "react";
import location from "../common/img/my_location_white_24dp.svg";
import imgSearch from "../common/img/search_white_36dp.svg";
import WeatherContext from "../context/WeatherContext";
import showGeolocationError from "../utils";

const Search = () => {
  const [disabled, setDisable] = useState(false);
  const {
    locationMessage,
    getCurrentWeatherByCity,
    getCurrentWeatherByLatLon,
    setLocationMessage
  } = useContext(WeatherContext);

  const onPressEnter = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      getCurrentWeatherByCity(e.target.value);
    }
  };

  const searchCurrentLocation = () => {
    if (navigator.geolocation) {
      setDisable(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position?.coords || {};
          getCurrentWeatherByLatLon(latitude, longitude);
          setDisable(false);
        },
        (error) => {
          setLocationMessage(showGeolocationError(error));
          setDisable(false);
        }
      );
    }
  };

  return (
    <div className="py-5">
      <div className="flex justify-between px-3  space-x-3">
        <div className="flex border border-gray-500 border-opacity-30 px-1 py-1 rounded-2xl w-64">
          <img src={imgSearch} alt="search" className="h-5 mr-1 mt-1 opacity-50" />
          <input
            className="bg-transparent focus:outline-none w-full text-gray-300"
            placeholder="Search for place..."
            onKeyUp={onPressEnter}
          />
        </div>
        <button
          className={`bg-gray-400 h-6 w-6 px-1 mt-1 rounded-full focus:outline-none ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={searchCurrentLocation}
          type="button"
          disabled={disabled}
        >
          <img src={location} className="" alt="location" />
        </button>
      </div>
      <div className="flex justify-center text-base text-red-500 text-opacity-90 font-semibold">
        {locationMessage}
      </div>
    </div>
  );
};

export default Search;
