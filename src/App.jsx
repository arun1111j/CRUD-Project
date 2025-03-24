import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Login from "./components/Login";
import NavScrollExample from "./components/NavScrollExample";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JavaScript
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <NavScrollExample /> {/* Navbar inside Router */}

      <div className="app">
        <h1 className="title">Saveetha Placement Cell</h1>
        <h3>Students Portal</h3>
      </div>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
