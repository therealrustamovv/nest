import React, { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import "../../sass/products.scss";

function Products() {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  let products = data?.data?.map((el) => (
    <div key={el.id} className="products__card">
      <h3 className="products__h3">{el.id}</h3>
      <Link to={`/products/${el.id}`}>
        <img src={el.image} alt="products__image" className="products__img" />
      </Link>
      <h2 className="products__title">{el.category}</h2>
      <p className="products__text">{el.description}</p>
      <h4 className="products__h4">({el?.rating?.rate})</h4>
      <h5 className="products__h5">
        By <strong className="products__strong">NestFood</strong>
      </h5>
      <div className="products__bottom">
        <p className="products__price">
          ${el.price}{" "}
          <strong className="products__under">${el.price * 2}</strong>
        </p>
        <button className="products__btn">
          <RiShoppingCart2Line
            style={{ fontSize: "18px" }}
            className="products__btn__icon"
          />
          <p className="products__btn__text">Add</p>
        </button>
      </div>
    </div>
  ));

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
      <section className="products" id="products">
        <div className="container">
          {loading && (
            <div className="container">
              <div class="main-item">
                <div class="static-background">
                  <div class="background-masker btn-divide-left"></div>
                </div>

                <div class="animated-background"></div>
              </div>
            </div>
          )}
          <div className="products__box">{products}</div>
        </div>
      </section>
    </>
  );
}

export default memo(Products);
