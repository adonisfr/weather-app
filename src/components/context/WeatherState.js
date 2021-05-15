import React, { useReducer } from "react";
import propTypes from "prop-types";
import axios from "axios";
import WeatherReducer from "./WeatherReducer";
import WeatherContext from "./WeatherContext";

const WeatherState = ({ children }) => {
  const initialState = {
    weather: null,
    units: "metric",
    forecast: null,
    locationMessage: null
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const setLocationMessage = (message) => {
    dispatch({
      type: "LOCATION_MESSAGE",
      payload: message
    });
  };

  const getCurrentWeatherByCity = (place, units = state.units) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${units}&appid=ca6c12c824777f7080f1c00f1d19b42a`
      )
      .then((response) => {
        dispatch({
          type: "GET_WEATHER",
          payload: { weather: response.data, units }
        });
      })
      .catch((err) => setLocationMessage(err.response?.data?.message));
  };

  const getCurrentWeatherByLatLon = (lat, lon, units = state.units) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=ca6c12c824777f7080f1c00f1d19b42a`
      )
      .then((response) => {
        dispatch({
          type: "GET_WEATHER",
          payload: { weather: response.data, units }
        });
      })
      .catch((err) => console.error(err));
  };

  const getForecast = (lat, lon, units = state.units) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${units}&appid=ca6c12c824777f7080f1c00f1d19b42a`
      )
      .then((response) => {
        dispatch({
          type: "GET_FORECAST",
          payload: { forecast: response.data, units }
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        units: state.units,
        forecast: state.forecast,
        locationMessage: state.locationMessage,
        getCurrentWeatherByCity,
        getCurrentWeatherByLatLon,
        getForecast,
        setLocationMessage
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

WeatherState.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.element])
};

WeatherState.defaultProps = {
  children: ""
};

export default WeatherState;
