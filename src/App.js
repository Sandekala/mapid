import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const redIcon = L.divIcon({ className: 'my-red-icon' });
const yellowIcon = L.divIcon({ className: 'my-yellow-icon' });
const greenIcon = L.divIcon({ className: 'my-green-icon' });

function App() {
  const [viewport, setViewport] = useState([]);
  const [colour, setColour] = useState('');

  const position = {
    lat: -6.932472313594987,
    lng: 107.67077030944243,
  };

  const popup = (nama, status, angka) => {
    // switch (status) {
    //   case 'Merah':
    //     setColour('red');
    //     break;
    //   case 'Kuning':
    //     setColour('yellow');
    //     break;
    //   case 'Hijau':
    //     setColour('green');
    //     break;
    //   default:
    //     break;
    // }
    return (
      <div className="popup">
        <p>Nama</p>
        <p className="popup-data">{nama}</p>
        <p>Status</p>
        <p className="popup-data" style={{ color: status === 'Merah' ? '#8b0000ff' : status === 'Kuning' ? '#ffff00ff' : '#006400ff' }}>
          {status}
        </p>
        <p>Angka</p>
        <p className="popup-data">{angka}</p>
      </div>
    );
  };

  useEffect(() => {
    Axios({
      method: 'GET',
      url: process.env.REACT_APP_BASEURL,
    })
      .then((result) => setViewport(result.data.geojson.features))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <section>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100vh ' }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {viewport.map((data, i) => {
            return (
              <Marker position={{ lat: data.geometry.coordinates[1], lng: data.geometry.coordinates[0] }} key={i} icon={data.properties.Status === 'Merah' ? redIcon : data.properties.Status === 'Kuning' ? yellowIcon : greenIcon}>
                <Popup>{popup(data.properties.Nama, data.properties.Status, data.properties.Angka)}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </section>
    </React.Fragment>
  );
}

export default App;
