import React from "react";
import "./topDeals.css";
import { topDealUsers } from "../../data/data";

const TopDealBox = () => {
  return (
    <div className="topDealsBox">
      <h2>Top Deals</h2>
      <div className="dealsListWrap">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <div>
                <img src={user.img} className="userImg" alt="" />
              </div>
              <div className="userInfoText">
                <span className="userName">{user.username}</span>
                <span className="userEmail">{user.email}</span>
              </div>
            </div>
            <span className="amount">$ {user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDealBox;
