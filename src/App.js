import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Booking from "./components/booking";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
