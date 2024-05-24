import React, { memo } from "react";
import { BsSend } from "react-icons/bs";
import img from "../../assets/images/menu-1.png";
import "../../sass/shop.scss";

function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="container">
        <div className="shop__info">
          <div className="shop__left">
            <h2 className="shop__title">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="shop__text">
              Start You'r Daily Shopping with{" "}
              <strong className="shop__strong">Nest Mart</strong>
            </p>
            <div className="shop__bottom">
              <BsSend
                style={{ color: "#838383", fontSize: "20px" }}
                className="shop__icon"
              />
              <input
                placeholder="Your emaill address"
                type="text"
                className="shop__input"
              />
              <button className="shop__btn">Subscribe</button>
            </div>
          </div>
          <img src={img} alt="img" className="shop__img" />
        </div>
      </div>
    </section>
  );
}

export default memo(Shop);
