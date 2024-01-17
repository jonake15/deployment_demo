import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { utils } from "./data";
import House from "./components/House";

//House Parent component
const HouseList = () => {
  const { image, name, price, rooms } = utils;
  return (
    <div className="houselist">
      {utils.map((data) => {
        const { image, name, price, rooms } = data; //destructuring
        return <House image={image} name={name} price={price} rooms={rooms} />;
      })}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HouseList />);
