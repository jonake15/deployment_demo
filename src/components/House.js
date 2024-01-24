import React from "react";

//Child component(props.objName)
const House = (props) => {
  return (
    <>
      <div className="houseContainer">
        <div className="imgContainer">
          {" "}
          <img src={props.image} alt="House in bugolobi" />
        </div>
        <div className="houseContent">
          <h2>{props.name}</h2>
          <div className="flexbox">
            <p>Price: {props.price}</p>
            <p>
              <i class="fa fa-bed"></i> Rooms: {props.rooms}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default House;
