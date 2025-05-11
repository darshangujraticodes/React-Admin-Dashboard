import React from "react";
import "./menu.css";
import { Link } from "react-router";
import { menu } from "../../data/data";

const Menu = () => {
  const menuItemData = menu;
  return (
    <div className="menu">
      {menuItemData.map((menuItem) => (
        <div className="item" key={menuItem.id}>
          <p className="title">{menuItem.title}</p>

          {menuItem.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="linkListItem">
              <img src={listItem.icon} alt={` ${listItem.title} Icon `} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
