import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "../../sass/adv.scss";

function Adv() {
  return (
    <div className="adv">
      <div className="container">
        <div className="adv__info">
          <ul className="adv__list">
            <li className="adv__item">
              <Link className="adv__link" to={"#"}>
                About Us
              </Link>
            </li>
            <li className="adv__item">
              <Link className="adv__link" to={"/admin"}>
                My Account
              </Link>
            </li>
            <li className="adv__item">
              <Link className="adv__link" to={"#"}>
                Wishlist
              </Link>
            </li>
            <li className="adv__item">
              <Link className="adv__link" to={"#"}>
                Order Tracking
              </Link>
            </li>
          </ul>
          <div className="adv__right">
            <p className="adv__text">
              Need help? Call Us:
              <strong className="adv__strong">+ 1800 900</strong>
            </p>
            <div className="adv__texts">
              <p className="adv__text">
                English{" "}
                <FaChevronDown
                  style={{ color: "#7e7e7e", fontSize: "10px" }}
                  className="adv__down"
                />
              </p>
              <p className="adv__text">
                USD{" "}
                <FaChevronDown
                  className="adv__down"
                  style={{ color: "#7e7e7e", fontSize: "10px" }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Adv);
