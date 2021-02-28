import React, { useState } from "react";
import "./Players.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => {
  const { name, salary, country, club, img, email } = props.player;
  const [isClicked, setClicked] = useState(false);
  const addClickHandler = props.addClickHandler;
  return (
    <div className="parent-div">
      <div className="info-main-div">
        <div className="profile-pic">
          <img src={img} alt="picture" />
        </div>
        <div className="info">
          <h5>Name: {name}</h5>
          <p>Country: {country}</p>
          <p>
            Club: <mark>{club}</mark>{" "}
          </p>
          <p>
            Salary: <strong>{salary}</strong>
          </p>
          <p>Email: {email}</p>
          <div className="icon"></div>
          <button
            disabled={isClicked}
            className="btn btn-primary"
            onClick={() => {
              setClicked(true);
              addClickHandler(props.player);
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faUserPlus} />{" "}
            {isClicked ? "selected" : "select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
