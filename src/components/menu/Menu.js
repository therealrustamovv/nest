import React, { memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import img1 from "../../assets/images/menu-img.png";
import img2 from "../../assets/images/menu-fire.png";
import img3 from "../../assets/images/menu-music.png";
import "../../sass/menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__info">
          <div className="menu__select">
            <img src={img1} alt="menu__img" className="menu__img" />
            <p className="menu__text">Browse</p>
            <p className="menu__text">All Categories</p>
            <FaChevronDown
              className="menu__down"
              style={{ color: "#fff", fontSize: "10px" }}
            />
          </div>
          <div className="menu__center">
            <img src={img2} alt="menu__fire" className="menu__fire" />
            <h3 className="menu__h3">Deals</h3>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <Link className="menu__link">
                Home{" "}
                <FaChevronDown
                  style={{ fontSize: "10px" }}
                  className="menu__down"
                />
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">About</Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">
                Shop{" "}
                <FaChevronDown
                  style={{ fontSize: "10px" }}
                  className="menu__down"
                />
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">
                Vendors{" "}
                <FaChevronDown
                  style={{ fontSize: "10px" }}
                  className="menu__down"
                />
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">
                Mega menu{" "}
                <FaChevronDown
                  style={{ fontSize: "10px" }}
                  className="menu__down"
                />
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">
                Blog{" "}
                <FaChevronDown
                  style={{ fontSize: "10px" }}
                  className="menu__down"
                />
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">
                Pages{" "}
                <FaChevronDown
                  style={{ fontSize: "10px" }}
                  className="menu__down"
                />
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">Contact</Link>
            </li>
          </ul>
          <div className="menu__end">
            <img src={img3} alt="manu__music" className="menu__end__img" />
            <div className="menu__card">
              <h2 className="menu__title">1900 - 888</h2>
              <p className="menu__textover">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Menu);
