// eslint-disable-next-line func-names
export default function (state, action) {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        weather: action.payload.weather,
        units: action.payload.units,
        locationMessage: ""
      };
    case "GET_FORECAST":
      return {
        ...state,
        forecast: action.payload.forecast,
        units: action.payload.units,
        locationMessage: ""
      };
    case "LOCATION_MESSAGE":
      return {
        ...state,
        locationMessage: action.payload
      };
    default:
      return state;
  }
}
