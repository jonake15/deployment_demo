import React from "react";
import { utils } from "../data";
import House from "./House";
import Navbar from "./Navbar";
import HouseList from "./HouseList";

const Houses = () => {
  const { image, name, price, rooms } = utils;
  return (
    <>
      <Navbar />
      <HouseList />
    </>
  );
};

export default Houses;
