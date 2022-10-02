import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "../util/axios";
import React, { Fragment, useState } from "react";
// import { useNavigate } from 'react-router-dom';

const FormField = props => {
    const [add1, setAdd1] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

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
    
    //   const navigate = useNavigate();

    const onSubmit = (add1, city, state, zipcode) => {
        var value = add1+'+'+city+'+'+state+'+'+zipcode;
        value = value.replaceAll(' ', '+');
            axios
              .get(
                "https://addresscify.herokuapp.com/address?address="+value
              )
              .then((res) => {
                console.log(res.data);
                // navigate('/Valid');
              })
              .catch((err) => {
                console.log(err);
              });
          
    }
  return (
    <Fragment>
        <form>
        <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => onChangeAdd1(event.target.value)}
            placeholder = 'Enter Address Line'
            value={add1}
          />
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => onChangeCity(event.target.value)}
            placeholder = 'Enter City'
            value={city}
          />
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => onChangeState(event.target.value)}
            placeholder = 'Enter State'
            value={state}
          />
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => onChangeZipcode(event.target.value)}
            placeholder = 'Enter zipcode'
            value={zipcode}
          />
                <button
        type="button"
        className="btn btn-primary"
        onClick={() => onSubmit(add1, city, state, zipcode)}
      >
        Search
      </button>
        </form>
    </Fragment>
    
  );
}

export default FormField;