import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span className="">Admin</span>
        <span></span>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon" alt="" />
        <img src="/app.svg" className="icon" alt="" />
        <img src="/expand.svg" className="icon" alt="" />
        <div className="notification">
          <img src="/notifications.svg" className="" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg"
            className=""
            alt=""
          />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" className="icon" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
