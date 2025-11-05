import React from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: "#007bff", padding: "10px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
