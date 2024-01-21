import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";

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
      <div className="content">
        <h1 ref={heading}>This is the Hero {change} </h1>
        <button onClick={changeColor}> Change Colors</button>
      </div>
    </>
  );
};
export default Home;
