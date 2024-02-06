import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import HomeHouseList from "./HomeHouseList";
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
    <div className="universalCont">
      <Navbar />
      <div className="content-1">
        <div className="heroContainer">
          <button>Rent</button>
          <button>Sale</button>

          <form>
            <h2>Select house to your prefernce</h2>

            <select id="cars" name="cars">
              <option value="location">Location</option>
              <option value="bugolobi">Bugolobi</option>
              <option value="buziga">Buziga</option>
              <option value="bunga">Bunga</option>
              <option value="naguru">Naguru</option>
            </select>
          </form>
        </div>
      </div>
      {/* <HomeHouseList /> */}
      <FooterSection />
    </div>
  );
};
export default Home;
