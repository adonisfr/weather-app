import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import Item from "./Item";
import ItemValue from "./ItemValue";

const HightLights = () => {
  const { forecast, units } = useContext(WeatherContext);

  const uvi = forecast?.current?.uvi || 0;

  const windSpeed = forecast?.current?.wind_speed || "";
  const windSpeedUnit = units === "metric" ? "meter/sec" : "miles/hour";
  const { humidity, visibility, pressure } = forecast?.current || {};

  if (forecast) {
    return (
      <div className="flex flex-col px-3">
        <p className="text-gray-50 text-lg font-semibold mb-3 ml-8"> Today&apos;s HightLights</p>
        <div className="flex flex-wrap sm:justify-center md:justify-start md:ml-5">
          <Item title="UV Index" value={uvi.toString()} />
          <Item
            title="Wind Status"
            value={<ItemValue primaryText={windSpeed.toString()} secundaryText={windSpeedUnit} />}
          />
          <Item
            title="Humidity"
            value={
              <ItemValue primaryText={humidity ? humidity.toString() : ""} secundaryText="%" />
            }
          />
          <Item
            title="Visibility"
            value={
              <ItemValue
                primaryText={visibility ? visibility.toString() : ""}
                secundaryText="metres"
              />
            }
          />
          <Item
            title="Air Pressure"
            value={
              <ItemValue primaryText={pressure ? pressure.toString() : ""} secundaryText="hPa" />
            }
          />
        </div>
      </div>
    );
  }

  return null;
};

export default HightLights;
