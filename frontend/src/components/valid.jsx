import React, { Fragment, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { iconPerson } from "./icon";

const Valid = props => {

    const position = [51.505, -0.09];
    const fillBlueOptions = { fillColor: "#0484D6" };
    const [map, setMap] = useState(null);
 
    useEffect(() => {
       if (map) {
          setInterval(function () {
             map.invalidateSize();
          }, 100);
       }
    }, [map]);
 
    return (
       <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }} whenCreated={setMap}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]} icon={iconPerson}>
     <Popup>
       A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
   </Marker>
          {/* <Circle center={position} pathOptions={fillBlueOptions} radius={50} /> */}
       </MapContainer>);
//   return (
//     <Fragment>
//         <h6>hello</h6>
//         <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[51.505, -0.09]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer>
//     </Fragment>

//   );
}

export default Valid;