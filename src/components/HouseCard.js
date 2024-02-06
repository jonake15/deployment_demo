import React from "react";
import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="houses"
        height={200}
      />
      <div className="desc">
        <h2>
          <Link to={`/show-house/${house._id}`}>{house.name}</Link>
        </h2>
        <h3>{house.isbn}</h3>
      </div>
    </div>
  );
};

export default HouseCard;
