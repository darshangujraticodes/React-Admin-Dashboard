import React from "react";
import "./menu.css";
import { Link } from "react-router";
import { MENU_ITEMS } from "../../data/menuData";

const Menu = () => {
  const menuItemData = MENU_ITEMS;
  return (
    <div className="menu">
      {menuItemData.map((menuItem) => (
        <div className="item" key={menuItem.id}>
          <p className="title">{menuItem.title}</p>

          {menuItem.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="linkListItem">
              <img src={listItem.icon} alt={` ${listItem.menuTitle} Icon `} />
              <span className="listItemTitle">{listItem.menuTitle}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
