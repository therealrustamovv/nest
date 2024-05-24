import React, { memo } from "react";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/footer-1.png";
import img2 from "../../assets/images/footer-2.png";
import img3 from "../../assets/images/footer-3.png";
import img4 from "../../assets/images/footer-4.png";
import img5 from "../../assets/images/footer-5.png";
import img6 from "../../assets/images/footer-6.png";
import img7 from "../../assets/images/footer-7.png";
import img8 from "../../assets/images/footer-8.png";
import icons1 from "../../assets/images/icons-1.png";
import icons2 from "../../assets/images/icons-2.png";
import icons3 from "../../assets/images/icons-3.png";
import icons4 from "../../assets/images/icons-4.png";
import icons5 from "../../assets/images/icons-5.png";
import { Link } from "react-router-dom";
import "../../sass/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__left">
            <div className="footer__left__card">
              <Link to={"/"}>
                <img src={logo} alt="footer__img" className="footer__img" />
              </Link>
              <p className="footer__left__text">
                Awesome grocery store website template
              </p>
              <div className="footer__left__exam">
                <img
                  src={img1}
                  alt="footer__left__img"
                  className="footer__left__img"
                />
                <p className="footer__left__textov">
                  Address: 5171 W Campbell Ave
                </p>
              </div>
              <p className="footer__left__textov footer__left__txt">
                undefined Kent, Utah 53127 United States
              </p>
              <div className="footer__left__exam">
                <img
                  src={img2}
                  alt="footer__left__img"
                  className="footer__left__img"
                />
                <p className="footer__left__textov">
                  Call Us:(+91) - 540-025-124553
                </p>
              </div>
              <div className="footer__left__exam">
                <img
                  src={img3}
                  alt="footer__left__img"
                  className="footer__left__img"
                />
                <p className="footer__left__textov">Email:sale@Nest.com</p>
              </div>
              <div className="footer__left__exam">
                <img
                  src={img4}
                  alt="footer__left__img"
                  className="footer__left__img"
                />
                <p className="footer__left__textov">
                  Hours:10:00 - 18:00, Mon - Sat
                </p>
              </div>
            </div>
            <div className="footer__left__card">
              <h3 className="footer__left__h3">Company</h3>
              <Link className="footer__left__link" to={"#"}>
                About Us
              </Link>
              <Link className="footer__left__link" to={"#"}>
                Delivery Information
              </Link>
              <Link className="footer__left__link" to={"#"}>
                Privacy Policy
              </Link>
              <Link className="footer__left__link" to={"#"}>
                Terms & Conditions
              </Link>
              <Link className="footer__left__link" to={"#"}>
                Contact Us
              </Link>
              <Link className="footer__left__link" to={"#"}>
                Support Center
              </Link>
              <Link className="footer__left__link" to={"#"}>
                Careers
              </Link>
            </div>
          </div>
          <div className="footer__center">
            <ul className="footer__list">
              <h2 className="footer__center__title">Account</h2>
              <Link className="footer__center__link" to={"#"}>
                Sign In
              </Link>
              <Link className="footer__center__link" to={"#"}>
                View Cart
              </Link>
              <Link className="footer__center__link" to={"#"}>
                My Wishlist
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Track My Order
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Help Ticket
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Shipping Details
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Compare products
              </Link>
            </ul>
            <ul className="footer__list">
              <h2 className="footer__center__title">Corporate</h2>
              <Link className="footer__center__link" to={"#"}>
                Become a Vendor
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Affiliate Program
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Farm Business
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Farm Careers
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Our Suppliers
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Accessibility
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Promotions
              </Link>
            </ul>
            <ul className="footer__list">
              <h2 className="footer__center__title">Popular</h2>
              <Link className="footer__center__link" to={"#"}>
                Milk & Flavoured Milk
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Butter and Margarine
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Eggs Substitutes
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Marmalades
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Sour Cream and Dips
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Tea & Kombucha
              </Link>
              <Link className="footer__center__link" to={"#"}>
                Cheese
              </Link>
            </ul>
          </div>
          <div className="footer__right">
            <h2 className="footer__center__title">Install App</h2>
            <p className="footer__left__text">From App Store or Google Play</p>
            <div className="footer__images">
              <img
                src={img5}
                alt="footer__img"
                className="footer__right__img"
              />
              <img
                src={img6}
                alt="footer__img"
                className="footer__right__img"
              />
            </div>
            <p className="footer__left__text">Secured Payment Gateways</p>
            <img src={img7} alt="footer__img" className="footer__right__end" />
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__bottom">
          <h2 className="footer__bottom__title">
            © 2022, <strong className="footer__strong">Nest</strong> - HTML
            Ecommerce Template All rights reserved
          </h2>
          <div className="footer__bottom__box">
            <div className="footer__bottom__card">
              <img
                src={img8}
                alt="footer__img"
                className="footer__bottom__img"
              />
              <div className="footer__bottom__exam">
                <h3 className="footer__bottom__exam__title"> 1900 - 6666</h3>
                <p className="footer__bottom__text">Working 8:00 - 22:00</p>
              </div>
            </div>
            <div className="footer__bottom__card">
              <img
                src={img8}
                alt="footer__img"
                className="footer__bottom__img"
              />
              <div className="footer__bottom__exam">
                <h3 className="footer__bottom__exam__title"> 1900 - 8888</h3>
                <p className="footer__bottom__text">24/7 Support Center</p>
              </div>
            </div>
          </div>
          <div className="footer__bottom__col">
            <div className="footer__bottom__start">
              <h2 className="footer__bottom__start__title">Follow Us</h2>
              <div className="footer__bottom__images">
                <img
                  src={icons1}
                  alt="icons"
                  className="footer__bottom__start__img"
                />
                <img
                  src={icons2}
                  alt="icons"
                  className="footer__bottom__start__img"
                />
                <img
                  src={icons3}
                  alt="icons"
                  className="footer__bottom__start__img"
                />
                <img
                  src={icons4}
                  alt="icons"
                  className="footer__bottom__start__img"
                />
                <img
                  src={icons5}
                  alt="icons"
                  className="footer__bottom__start__img"
                />
              </div>
            </div>
            <p className="footer__bottom__start__text">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
