import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Nav.js";
// import Api from './component/Api';
import Homes from './component/Homes';
import Morenews from './component/Morenews';



function App() {
  return (
    // <Api>
      <Router>
        <div className="App">
          <Nav />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:cat" element={<Homes />} />
            <Route path="/article/:cat/:Id" element={<Morenews />} />
          </Routes>
       
        </div>
      </Router>
    // </Api>
  );
}

export default App;