import React, { memo } from "react";
import { BsSend } from "react-icons/bs";
import "../../sass/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__info">
          <h2 className="header__title">Fresh Vegetables Big discount</h2>
          <p className="header__text">Save up to 50% off on your first order</p>
          <div className="header__bottom">
            <BsSend
              style={{ fontSize: "20px", color: "#838383" }}
              className="header__icon"
            />
            <input
              type="text"
              placeholder="Your emaill address"
              className="header__input"
            />
            <button className="header__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
