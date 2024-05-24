import React, { memo } from "react";
import { LINKS } from "../../static";
import { NavLink } from "react-router-dom";
import "../../sass/links.scss";

function Links() {
  return (
    <section className="links">
      <div className="container">
        <div className="links__info">
          <h2 className="links__title">Popular Products</h2>
          <ul className="links__list">
            {LINKS?.map((el, i) => (
              <li key={i} className="links__item">
                <NavLink className="links__link" to={"#"}>
                  {el}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default memo(Links);
