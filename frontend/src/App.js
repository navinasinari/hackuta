import logo from './logo.svg';
import './App.css';
import Homepage from './components/hompage';
import Sidebar from './components/sidebar';
import Valid from './components/valid'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
<Fragment>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/Valid" element={<Valid />} /> 
      </Routes>
    </BrowserRouter>
  </Fragment>
    );
      
}

export default App;
