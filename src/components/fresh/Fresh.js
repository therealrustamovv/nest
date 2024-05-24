import React, { memo } from "react";
import { FRESH } from "../../static";
import "../../sass/fresh.scss";

function Fresh() {
  return (
    <section className="fresh" id="fresh">
      <div className="container">
        <div className="fresh__info">
          {FRESH?.map((el) => (
            <div
              key={el.id}
              className="fresh__card"
              style={{ background: `url(${el.img}) no-repeat center/cover` }}
            >
              <h2 className="fresh__title">{el.title}</h2>
              <button className="fresh__btn">Shop Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Fresh);
