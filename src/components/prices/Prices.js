import React, { memo } from "react";
import { PRICES } from "../../static";
import "../../sass/prices.scss";

function Prices() {
  return (
    <section className="prices">
      <div className="container">
        <div className="prices__info">
          {PRICES?.map((el) => (
            <div key={el.id} className="prices__box">
              <img src={el.img} alt="prices__img" className="prices__img" />
              <div className="prices__card">
                <h2 className="prices__title">{el.title}</h2>
                <p className="prices__text">{el.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Prices);
