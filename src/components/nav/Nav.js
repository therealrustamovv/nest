import React, { memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import logo from "../../assets/images/logo.png";
import navImg1 from "../../assets/images/nav-icon-1.png";
import navImg2 from "../../assets/images/nav-icon-2.png";
import navImg3 from "../../assets/images/nav-icon-3.png";
import navImg4 from "../../assets/images/nav-icon-4.png";
import { Link } from "react-router-dom";
import "../../sass/nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link to={"/"}>
            <img src={logo} alt="nav__logo" className="nav__logo" />
          </Link>
          <form action="" className="nav__form">
            <select className="nav__select">
              <option value="All Categories">All Categories</option>
            </select>
            <div className="nav__line"></div>
            <div className="nav__find">
              <input
                className="nav__input"
                type="text"
                placeholder="Search for items..."
              />
              <CiSearch
                className="nav__search"
                style={{ fontSize: "22px", color: "838383" }}
              />
            </div>
          </form>
          <div className="nav__center">
            <CiLocationOn className="nav__location" />
            <p className="nav__center__text">Your Location</p>
            <FaChevronDown
              style={{ color: "#B6B6B6", fontSize: "10px" }}
              className="nav__down"
            />
          </div>
          <div className="nav__box">
            <div className="nav__card">
              <div className="nav__count">3</div>
              <img src={navImg1} alt="nav__icon" className="nav__card__img" />
              <p className="nav__card__text">Compare</p>
            </div>
            <div className="nav__card">
              <div className="nav__count">6</div>
              <img src={navImg2} alt="nav__icon" className="nav__card__img" />
              <p className="nav__card__text">Wishlist</p>
            </div>
            <div className="nav__card">
              <div className="nav__count">2</div>
              <img src={navImg3} alt="nav__icon" className="nav__card__img" />
              <p className="nav__card__text">Cart</p>
            </div>
            <Link to={"/admin"} className="nav__card">
              <img src={navImg4} alt="nav__icon" className="nav__card__img" />
              <p className="nav__card__text">Account</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);
