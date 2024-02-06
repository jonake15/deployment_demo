import React from "react";

import { FaHome, FaTimes, FaRegUser, FaBars } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const humMenu = useRef();
  const humClose = useRef();
  const ulContent = useRef();
  const ul = useRef();

  const handleClick = () => {
    humMenu.current.classList.toggle("hide");
    humClose.current.classList.toggle("show");
    ulContent.current.classList.add("blocks");
    ul.current.classList.toggle("ul-block");
  };

  return (
    <>
      <div ref={ul} className="navbar-test">
        <ul onClick={handleClick}>
          <li ref={humMenu}>
            <FaBars />
          </li>
          <li ref={humClose}>
            <FaTimes />
          </li>
        </ul>
        <ul>
          <li>ESTATE-HEROS</li>
        </ul>
        <ul ref={ulContent}>
          <li>
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/show-house-list">
              HOUSES
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/services">
              SERVICES
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/show-house-list">
              CONTACT US
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <FaRegUser />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
