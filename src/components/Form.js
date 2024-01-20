import React from "react";
import { useState } from "react";

//Login Form
const Form = () => {
  const [username, setUsername] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (username == "") {
      setUsername("Wrong Input");
    }
  };

  const handleInput = () => {
    console.log("Input Changed");
  };
  return (
    <div className="form">
      <h1>Login Now</h1>
      <form>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          placeholder="Enter Username"
        />

        <input
          type="password"
          name="password"
          onChange={handleInput}
          placeholder="Enter Password"
        />
        <span>
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
            href="/"
          >
            Show Password
          </a>
        </span>
        <button onClick={handleFormSubmission}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
