import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import LogedIn from './Pages/LogedIn';
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import Protected from "./Components/Protected";

function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element = {<Protected Component={Home} />} />
        <Route path="/shop" element = {<Protected Component={Shop} />}/>
        <Route path="/contact" Component={Contact} />
        <Route path="/login" Component={LogedIn} />
        <Route path="/register" Component={Register} />

      </Routes>
    </Router>
  );
}

export default App;
