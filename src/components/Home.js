import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import HouseList from "./HouseList";
import FooterSection from "./FooterSection";

const Home = () => {
  const [change, setChange] = useState();
  const heading = useRef();
  console.log(heading);
  useEffect(() => {
    console.log("Hello World");
  });

  const changeColor = () => {
    heading.current.style.color = "blue";
  };

  return (
    <>
      <Navbar />
      <div className="content-1">
        <h1 ref={heading}>This is the Hero {change} </h1>
        {/* <button onClick={changeColor}> Change Colors</button> */}
      </div>
      <HouseList />
      <FooterSection />
    </>
  );
};
export default Home;
