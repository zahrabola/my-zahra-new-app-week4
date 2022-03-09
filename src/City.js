import React, { useState } from "react";
import "./City.css";
export default function City(props) {
  let cityName = {
    cities1: " Paris ",
    cities2: " London ",
    cities3: " Sydney ",
    cities4: " New York ",
  };

  let [message, Setmessage] = useState("");

  function onClick(event) {
    event.preventDefault();
    Setmessage(` Loading ..... `);
  }

  return (
    <div className="City">
      <div className="row">
        <ul>
          <li>
            {" "}
            <a href="/" onClick={onClick}>
              {cityName.cities1}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/" onClick={onClick}>
              {cityName.cities2}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/" onClick={onClick}>
              {cityName.cities3}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/" onClick={onClick}>
              {cityName.cities4}
            </a>{" "}
          </li>
        </ul>
      </div>
      <br />
      <h3> {message} </h3>
    </div>
  );
}
