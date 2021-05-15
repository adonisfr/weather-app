import Current from "./components/Current";
import HightLights from "./components/hightLights/HightLights";
import Search from "./components/search/Search";
import WeatherState from "./components/context/WeatherState";
import Forecast from "./components/forecast/Forecast";
import Map from "./components/Map";

function App() {
  return (
    <WeatherState>
      <div className="flex flex-col sm:flex-row bg-gray-800 h-screen">
        {/* left  */}
        <div className="bg-black-600 w-full sm:w-auto">
          <Search />
          <Current />
        </div>
        <div className="bg-gray-900 py-4 w-full sm:overflow-auto">
          <Forecast />
          <HightLights />
          <Map />
        </div>
      </div>
    </WeatherState>
  );
}

export default App;
