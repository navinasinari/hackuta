import React, { Fragment, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { iconPerson } from "./icon";
import { useLocation } from "react-router-dom";
import axios from "../util/axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { autocompleteClasses } from "@mui/material";
import Grid from "@mui/material/Grid";

const Valid = (props) => {
  const fillBlueOptions = { fillColor: "#0484D6" };
  const [map, setMap] = useState(null);
  const [value, setValue] = useState("");

  const location = useLocation();
  var lat = location.state.value.latitude;
  var long = location.state.value.longitude;
  var pos = [lat, long];

  useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  axios
    .get(
      "https://addresscify.herokuapp.com/weather?latitude=" +
        location.state.value.latitude+"&longitude="+location.state.value.longitude
    )
    .then((res) => {
      console.log(res);
      setValue(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div style={{ justifyContent: "center" }}>
      <MapContainer
        center={pos}
        zoom={20}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} icon={iconPerson}></Marker>
        {/* <Circle center={position} pathOptions={fillBlueOptions} radius={50} /> */}
      </MapContainer>

      {/* <Grid container spacing={1} direction='row'> */}
        {/* <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={3}> */}
            <Card sx={{ justifyContent: "center" }}>
              <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                  Address
                </Typography>
                <Typography variant="body2">
                  County: {location.state.value.county} <br />
                  Address Type: {location.state.value.rdi} <br />
                </Typography>
              </CardContent>
            </Card>
          {/* </Grid>
        </Grid> */}

        {/* <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={3}> */}
            <Card sx={{ maxWidth: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Weather
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Temperature: {value.temperature_2m_max} {<br />}
                  Feels Like: {value.apparent_temperature_max} {<br />}
                  Time: {value.sunrise} {<br />}
                  Wind Speed: {value.windspeed_10m_max} {<br />}
                  Wind Direction: {value.winddirection_10m_dominant} {<br />}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          {/* </Grid> */}
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default Valid;
