import axios from "../util/axios";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import SelectUSState from "react-select-us-states";
import Grid from "@mui/material/Grid";

const FormField = (props) => {
  const [add1, setAdd1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  const onChangeAdd1 = (value) => {
    setAdd1(value);
  };
  const onChangeCity = (value) => {
    setCity(value);
  };
  const onChangeState = (value) => {
    setState(value);
  };
  const onChangeZipcode = (value) => {
    setZipcode(value);
  };

  const navigate = useNavigate();

  const onSubmit = (add1, city, state, zipcode) => {
    var value = add1 + "+" + city + "+" + state + "+" + zipcode;
    value = value.replaceAll(" ", "+");
    axios
      .get("https://addresscify.herokuapp.com/address?address=" + value)
      .then((res) => {
        var value = res.data;
        if (value.valid == "Y") {
          navigate("/Valid", { state: { value } });
        }
        else {
          setError("Invalid address");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 700, justifyContent: "center" }}>
            <CardContent>
              <form align="center" className="cardForm">
                <h2>AddressCify</h2>
                <br />
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(event) => onChangeAdd1(event.target.value)}
                  placeholder="Enter Address Line"
                  value={add1}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(event) => onChangeCity(event.target.value)}
                  placeholder="Enter City"
                  value={city}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(event) => onChangeState(event.target.value)}
                  placeholder="Enter State Shortcode"
                  value={state}
                />
                <br />
                {/* <SelectUSState id="myId" className="btn" value={state}
                      onChange={(event) => onChangeState(event.target.value)}
                      /> */}

                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(event) => onChangeZipcode(event.target.value)}
                  placeholder="Enter zipcode"
                  value={zipcode}
                />
                <br />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onSubmit(add1, city, state, zipcode)}
                >
                  Search
                </button>
                <br />
                <p style={{ color: "#FF0000" }}>{error}</p>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormField;
