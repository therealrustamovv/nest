import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../../sass/categories.scss";

function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="categories__info">
          <h2 className="categories__title">Featured Categories</h2>
          <ul className="categories__list">
            <li className="categories__item">
              <Link className="categories__link" to={"#"}>
                Cake & Milk
              </Link>
              <Link className="categories__link" to={"#"}>
                Coffes & Teas
              </Link>
              <Link className="categories__link" to={"#"}>
                Pet Foods
              </Link>
              <Link className="categories__link" to={"#"}>
                Vegetables
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default memo(Categories);
