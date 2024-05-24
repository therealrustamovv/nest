import React, { memo } from "react";
import { FiHome } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ADMIN_TEXTS } from "../../static";
import { CiLocationOn } from "react-icons/ci";
import Shop from "../../components/shop/Shop";
import map from "../../assets/images/map.png";
import colImg from "../../assets/images/col-img.png";
import imgShop from "../../assets/images/filter.png";
import "../../sass/admin.scss";

function Admin() {
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="top__info">
            <Link className="top__link" to={"/"}>
              <FiHome className="top__icon" />
              Home
            </Link>
            <IoChevronForward
              style={{ color: "#7E7E7E", fontSize: "14px" }}
              className="top__right"
            />
            <Link className="top__link" to={"#"}>
              Admin
            </Link>
          </div>
        </div>
      </div>
      <section className="admin">
        <div className="container-fluid">
          <h2 className="admin__h2">How can help you ?</h2>
          <div className="admin__info">
            <div className="admin__left">
              <h2 className="admin__title">Admin panel</h2>
              <p className="admin__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="admin__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="admin__right">
              {ADMIN_TEXTS?.map((el) => (
                <div key={el.id} className="admin__card">
                  <h2 className="admin__card__title">{el.title}</h2>
                  <p className="admin__card__text">{el.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <img
            style={{ width: "100%" }}
            src={map}
            alt="map"
            className="admin__img"
          />
        </div>
        <div className="container-fluid">
          <div className="admin__max">
            <div className="admin__min">
              <h2 className="admin__min__title">Office</h2>
              <p className="admin__min__text">
                205 North Michigan Avenue, Suite 810 <br /> Chicago, 60601, USA{" "}
                <br /> Phone: (123) 456-7890 <br /> Email: contact@Evara.com
              </p>
              <button className="admin__min__btn">
                <CiLocationOn className="admin__min__icon" />
                View map
              </button>
            </div>
            <div className="admin__min">
              <h2 className="admin__min__title">Studio</h2>
              <p className="admin__min__text">
                205 North Michigan Avenue, Suite 810 <br /> Chicago, 60601, USA{" "}
                <br /> Phone: (123) 456-7890 <br /> Email: contact@Evara.com
              </p>
              <button className="admin__min__btn">
                <CiLocationOn className="admin__min__icon" />
                View map
              </button>
            </div>
            <div className="admin__min">
              <h2 className="admin__min__title">Shop</h2>
              <p className="admin__min__text">
                205 North Michigan Avenue, Suite 810 <br /> Chicago, 60601, USA{" "}
                <br /> Phone: (123) 456-7890 <br /> Email: contact@Evara.com
              </p>
              <button className="admin__min__btn">
                <CiLocationOn className="admin__min__icon" />
                View map
              </button>
            </div>
          </div>
          <div className="admin__out">
            <div className="admin__left">
              <h3 className="admin__left__h3">Contact form</h3>
              <h2 className="admin__left__title">Drop Us a Line</h2>
              <p className="admin__left__text">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="admin__col">
                <form action="" className="admin__form">
                  <div className="admin__form__inputs">
                    <input
                      placeholder="First Name"
                      type="text"
                      className="admin__form__input"
                      required
                    />
                    <input
                      placeholder="Your Email"
                      type="text"
                      className="admin__form__input"
                      required
                    />
                    <input
                      placeholder="Your Phone"
                      type="text"
                      className="admin__form__input"
                      required
                    />
                    <input
                      placeholder="Subject"
                      type="text"
                      className="admin__form__input"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Comment..."
                    className="admin__form__textarea"
                  ></textarea>
                  <button className="admin__form__btn">Send message</button>
                </form>
                <img src={colImg} alt="" className="admin__col__img" />
              </div>
            </div>
          </div>
        </div>
        <Shop />
      </section>
    </>
  );
}

export default memo(Admin);
