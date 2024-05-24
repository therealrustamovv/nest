import React, { memo, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import loadingButton from "../../assets/images/loading.gif";
import "../../sass/login.scss";

const url = "https://fakestoreapi.com/auth/login/";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username.trim() || !password.trim()) {
      setLoading(false);
      return toast.warn("Enter the information completely");
    }
    axios
      .post(url, { username, password })
      .then((res) => {
        const data = res.data;
        if (data.message === "Error") {
          toast.success("Welcome");
        } else {
          localStorage.setItem("token", data.token);
          navigate("/admin");
          toast.success("Welcome");
        }
      })
      .catch((err) => {
        toast.error("Username or password incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading && (
        <div id="loading">
          <div class="ring">
            Loading
            <span></span>
          </div>
        </div>
      )}
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
              Login
            </Link>
          </div>
        </div>
      </div>
      <section className="login" id="login">
        <form onSubmit={handleSubmit} action="" className="login__info">
          <Link className="login__page" to={"/"}>
            <img src={logo} alt="logo" className="login__img" />
          </Link>
          <div className="login__forms">
            <label className="login__label" htmlFor="username">
              Email Address*
            </label>
            <input
              className="login__input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Your Email"
              id="username"
              required
            />
          </div>
          <div className="login__forms">
            <label className="login__label" htmlFor="password">
              Password*
            </label>
            <div className="login__password">
              <input
                className="login__pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "password" : "text"}
                placeholder="Enter Your password"
                id="password"
                required
              />
              {password && (
                <button
                  onClick={() => setShowPassword((p) => !p)}
                  type="button"
                >
                  {showPassword ? (
                    <FaEye style={{ fontSize: "15px", color: "#3bb77e" }} />
                  ) : (
                    <FaEyeSlash
                      style={{ fontSize: "15px", color: "#3bb77e" }}
                    />
                  )}
                </button>
              )}
            </div>
          </div>
          <div className="login__box">
            <div className="login__card">
              <input type="checkbox" className="login__checkbox" />
              <p className="login__text">Remember Me</p>
            </div>
            <p className="login__text">Forgot Password?</p>
          </div>
          <div className="login__bottom">
            <button className="login__btn">
              {loading ? (
                <>
                  <img
                    style={{ width: "30px" }}
                    src={loadingButton}
                    alt="btn"
                    className="loading__button"
                  />
                </>
              ) : (
                "Login"
              )}
            </button>
            <p className="login__text">Signup?</p>
          </div>
        </form>
      </section>
    </>
  );
}

export default memo(Login);
