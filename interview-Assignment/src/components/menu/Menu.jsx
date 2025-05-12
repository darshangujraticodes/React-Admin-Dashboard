import React from "react";
import "./menu.css";
import { Link, NavLink } from "react-router";
import { menu } from "../../data/data";

const Menu = () => {
  const menuItemData = menu;
  return (
    <div className="menu">
      {/* <div className="logoWrap">
        <img src="icons/logo.png" className="logoImg" alt="" />
      </div> */}

      {menuItemData.map((menuItem) => (
        <div className="item" key={menuItem.id}>
          <p className="title">{menuItem.title}</p>

          {menuItem.listItems.map((listItem) => (
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "menuActive" : ""}  linkListItem `
              }
              key={listItem.id}
              to={listItem.url}
            >
              <img src={listItem.icon} alt={` ${listItem.title} Icon `} />
              <span className="listItemTitle">{listItem.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
