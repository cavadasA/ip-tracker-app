import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { useState } from 'react'

function App() {
  const [map, setMap] = useState(null);
  let lat = 37.38605;
  let lng = -122.08385;
  let newLat = useSelector((state) => state.lat);
  let newLng = useSelector((state) => state.lng);

  if (newLat !== "" && newLng !== "") {
    lat = newLat;
    lng = newLng;
    map.flyTo([lat, lng])
  }

  return (
    <div>
      <div
        className="row no-gutters w-100"
        style={{ position: "relative", zIndex: 0 }}
      >
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true} whenCreated={setMap}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>{" "}
      </div>
    </div>
  );
}

export default App;
