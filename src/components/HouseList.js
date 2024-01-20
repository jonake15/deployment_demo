import React from "react";
import { utils } from "../data";
import House from "./House";
import Navbar from "./Navbar";
import abc from "../images/4115337.jpg";

const HouseList = () => {
  const { image, name, price, rooms } = utils;
  return (
    <>
      <Navbar />
      <div className="houselist">
        {utils.map((data) => {
          const { image, name, price, rooms } = data; //destructuring
          return (
            <House image={image} name={name} price={price} rooms={rooms} />
          );
        })}
      </div>
    </>
  );
};

export default HouseList;
