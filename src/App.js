import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Form from "./components/Form";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import HouseList from "./components/HouseList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/houses" element={<HouseList />} />
      </Routes>
    </>
  );
};

export default App;
