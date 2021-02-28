import React from "react";
import banner from "../../images/banner.jpg";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const Header = () => {
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
          <div className="main-button">
          <button className="btn btn-danger first-btn">
        Welcome to Legends Football Club
      </button>
          </div>
          
          <nav className="menu-bar">
              <a href="/list">Player List</a>
              <a href="/team">My Team</a>
              <a href="/contact">Contact Us</a>
</nav>


    </div>
  );
};

export default Header;
