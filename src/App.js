import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Details} from './components/Details'; // Import the Details component

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name/:price" element={<Details />} /> {/* Route to the Details component */}
      </Routes>
    </Router>
  ); 
}

export default App;
