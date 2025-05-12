import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoWrap">
        <img src="icons/logo.png" className="logoImg" alt="" />
      </div>

      <div className="navbarMenu">
        <div className="searchWrap">
          <input type="text" placeholder="Search...." className="navSearch" />
          <img src="search.png" className="searchIcon" alt="" />
        </div>
        <div className="navSettingWrap">
          <div className="leftMenuSetting">
            <div className="navIconWrap">
              <img src="bell.png" className="navIcon" alt="" />
            </div>
            <div className="navIconWrap">
              <img src="settings.png" className="navIcon" alt="" />
            </div>
            <div className="navIconWrap">
              <img src="logout.png" className="navIcon" alt="" />
            </div>
          </div>

          <div className="rightMenuSetting">
            <div className="profileDataWrap">
              <img
                src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="profileImg"
              />
              <div className="profileInfo">
                <span className="profileName">Dhanush</span>
                <p className="profileStatus">
                  Online <span className="onlineStatus"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
