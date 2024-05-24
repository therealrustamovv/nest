import React, { memo } from "react";
import { FRUITS } from "../../static";
import "../../sass/fruits.scss";

function Fruits() {
  return (
    <section className="fruits" id="fruits">
      <div className="container">
        <div className="fruits__box">
          {FRUITS?.map((el) => (
            <div key={el.id} className="fruits__card">
              <img src={el.img} alt="fruits__img" className="fruits__img" />
              <h2 className="fruits__title">{el.title}</h2>
              <p className="fruits__text">{el.text} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Fruits);
