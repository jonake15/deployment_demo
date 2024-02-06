import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import HouseCard from "./HouseCard";
import Navbar from "./Navbar";
import "../index.css";

function ShowHouseList() {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/house")
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowHouseList");
      });
  }, []);

  const houseList =
    house.length === 0
      ? "there is no house record!"
      : house.map((house, k) => <HouseCard house={house} key={k} />);

  return (
    <>
      <Navbar />
      <div className="houselist">{houseList}</div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Houses List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right"
            >
              + Add New House
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

       
      </div> */}
    </>
  );
}

export default ShowHouseList;
