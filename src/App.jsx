import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import NavScrollExample from "./components/NavScrollExample";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";  // Bootstrap JavaScript
import "./App.css";  // Import the CSS file


function App() {
  return (
    <>
      {<NavScrollExample/>}
    
      <div className="app">
        <h1 className="title">Saveetha Placement Cell</h1>
        <h3>Students portal</h3>
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/" element={<NavScrollExample/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;