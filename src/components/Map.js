import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import WeatherContext from "./context/WeatherContext";

const ICON = icon({
  iconUrl: "marker-icon.png",
  iconSize: [16, 24]
});

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const Map = () => {
  const { weather } = useContext(WeatherContext);
  const { lat, lon } = weather?.coord || "";

  if (!lat || !lon) {
    return null;
  }

  return (
    <div className="flex w-92 mx-5 my-5 sm:ml-10 2xl:w-1/2 2xl:mt-10">
      <MapContainer className="h-64 w-full" center={[lat, lon]} zoom={10} scrollWheelZoom={false}>
        <ChangeView center={[lat, lon]} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={ICON} position={[lat, lon]}>
          <Popup>
            <p>{weather?.name || ""}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
