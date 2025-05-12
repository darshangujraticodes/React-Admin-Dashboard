import React from "react";
import "./menu.css";
import { menuData } from "../../data/data";
import { Link } from "react-router";

const Menu = () => {
  const menu = menuData;
  return (
    <div className="menu">
      <div className="logoWrap">
        <img src="icons/logo.png" className="logo" alt="" />
      </div>

      <div className="menuWrap">
        {menu.map((menuItem) => (
          <div className="item" key={menuItem.id}>
            <p className="title">{menuItem.title}</p>

            {menuItem.listItems.map((listItem) => (
              <Link
                key={listItem.id}
                to={listItem.url}
                className="linkListItem"
              >
                <img src={listItem.icon} alt={` ${listItem.title} Icon `} />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
