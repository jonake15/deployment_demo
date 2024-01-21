import { React, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = useRef();
  const ul = useRef();

  const handleClick = () => {
    navbar.current.classList.toggle("block");
    ul.current.classList.toggle("ul-block");
    // ul.current.style.visibility = "visible";
    // ul.current.style.display = "block";
  };
  return (
    <div ref={navbar} className="navbar">
      <button className="btn" onClick={handleClick}>
        Click
      </button>

      <ul ref={ul}>
        <li></li>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/houses">
            Houses
          </Link>
        </li>
        <li>
          <Link className="link" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="link" to="/aboutus">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/contactus">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
