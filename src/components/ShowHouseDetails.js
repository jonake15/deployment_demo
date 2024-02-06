import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

function ShowHouseDetails(props) {
  const [house, setHouse] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/house/${id}`)
      .then((res) => {
        setHouse(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowHouseDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/house/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowHouseDetails_deleteClick");
      });
  };

  const HouseItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{house.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{house.room}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show House List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">House's Record</h1>
            <p className="lead text-center">View House's Info</p>
            <hr /> <br />
          </div>
          <div className="col-md-10 m-auto">{HouseItem}</div>
          <div className="col-md-6 m-auto">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={() => {
                onDeleteClick(house._id);
              }}
            >
              Delete House
            </button>
          </div>
          <div className="col-md-6 m-auto">
            <Link
              to={`/edit-house/${house._id}`}
              className="btn btn-outline-info btn-lg btn-block"
            >
              Edit House
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowHouseDetails;
