import React, { memo, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { COUNTS } from "../../static";
import Shop from "../../components/shop/Shop";
import lin from "../../assets/images/link.png";
import filter from "../../assets/images/filter.png";
import right1 from "../../assets/images/right-1.png";
import right2 from "../../assets/images/right-2.png";
import right3 from "../../assets/images/right-3.png";
import star from "../../assets/images/star.png";
import "../../sass/product.scss";

function Product() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              Product
            </Link>
            <IoChevronForward
              style={{ color: "#7E7E7E", fontSize: "14px" }}
              className="top__right"
            />
            <Link className="top__link" to={"#"}>
              {data?.data?.category}
            </Link>
          </div>
        </div>
      </div>
      <section
        style={{ paddingBottom: "200px" }}
        className="product"
        id="product"
      >
        <div className="container-fluid">
          <div className="product__info">
            <div className="product__left">
              <div className="product__left__box">
                <div className="product__card">
                  <CiSearch
                    style={{ fontSize: "28px", color: "#7E7E7E" }}
                    className="product__card__icon"
                  />
                  <img
                    src={data?.data?.image}
                    alt="product__img"
                    className="product__card__img"
                  />
                  <div className="product__card__imgs">
                    <img
                      src={data?.data?.image}
                      alt="product__img"
                      className="product__card__image"
                    />
                    <img
                      src={data?.data?.image}
                      alt="product__img"
                      className="product__card__image"
                    />
                    <img
                      src={data?.data?.image}
                      alt="product__img"
                      className="product__card__image"
                    />
                    <img
                      src={data?.data?.image}
                      alt="product__img"
                      className="product__card__image"
                    />
                  </div>
                </div>
                <div className="product__left__call">
                  <button className="product__left__call__button">
                    {data?.data?.category}
                  </button>
                  <h2 className="product__left__call__title">
                    {data?.data?.title}
                  </h2>
                  <h5 className="product__left__call__h5">
                    ({data?.data?.rating?.rate}) reviews
                  </h5>
                  <div className="product__left__call__prices">
                    <h2 className="product__left__call__price-1">
                      ${data?.data?.price}
                    </h2>
                    <div className="product__left__call__exm">
                      <h2 className="product__left__call__price-2">26% Off</h2>
                      <h2 className="product__left__call__price-3">$52</h2>
                    </div>
                  </div>
                  <p className="product__left__call__text">
                    {data?.data?.description}
                  </p>
                  <div className="product__left__exam">
                    <p className="product__left__exam__text">Size / Weight:</p>
                    <button className="product__left__exam__btn">50g</button>
                    <button className="product__left__exam__btn">60g</button>
                    <button className="product__left__exam__btn">80g</button>
                    <button className="product__left__exam__btn">100g</button>
                    <button className="product__left__exam__btn">150g</button>
                  </div>
                  <div className="product__left__cart">
                    <button className="product__left__cart__button">
                      1
                      <div className="product__left__cart__pm">
                        <FaChevronUp
                          style={{ color: "#3BB77E", fontSize: "12px" }}
                        />
                        <FaChevronDown
                          style={{ color: "#3BB77E", fontSize: "12px" }}
                        />
                      </div>
                    </button>
                    <buttoon className="product__left__cart__btn">
                      <AiOutlineShoppingCart
                        style={{ color: "#fff", fontSize: "16px" }}
                      />
                      Add to cart
                    </buttoon>
                    <IoIosHeartEmpty
                      style={{ fontSize: "18px", color: "#333333" }}
                      className="product__left__cart__heart"
                    />
                    <img
                      src={lin}
                      alt="link"
                      className="product__left__cart__heart"
                    />
                  </div>
                  <div className="product__left__as">
                    <p className="product__left__as__text">
                      Type:{" "}
                      <strong className="product__left__as__strong">
                        Organic
                      </strong>
                    </p>
                    <p className="product__left__as__text">
                      MFG:{" "}
                      <strong className="product__left__as__strong">
                        Jun 4.2022
                      </strong>
                    </p>
                    <p className="product__left__as__text">
                      LIFE:{" "}
                      <strong className="product__left__as__strong">
                        70 days
                      </strong>
                    </p>
                    <p className="product__left__as__text">
                      Tags:{" "}
                      <strong className="product__left__as__strong">
                        Snack, Organic
                      </strong>
                    </p>
                    <p className="product__left__as__text">
                      SKU:{" "}
                      <strong className="product__left__as__strong">
                        FWM15VKT
                      </strong>
                    </p>
                    <p className="product__left__as__text">
                      Stock:{" "}
                      <strong className="product__left__as__strong">
                        8 Items In Stock
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="product__left__end">
                <div className="product__left__should">
                  <button className="product__left__should__btn">
                    Description
                  </button>
                  <button className="product__left__should__btn">
                    Additional info
                  </button>
                  <button className="product__left__should__btn">Vendor</button>
                  <button className="product__left__should__btn">
                    Reviews (3)
                  </button>
                </div>
                <p className="product__left__end__text">
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart. <br /> Spluttered narrowly
                  yikes left moth in yikes bowed this that grizzly much hello on
                  spoon-fed that alas rethought much decently richly and wow
                  against the frequent fluidly at formidable acceptably flapped
                  besides and much circa far over the bucolically hey precarious
                  goldfinch mastodon goodness gnashed a jellyfish and one
                  however because.
                </p>
                <div className="product__left__end__box">
                  <div className="product__left__end__card">
                    <li className="product__left__end__item">
                      Type Of Packing
                    </li>
                    <li className="product__left__end__item">Color</li>
                    <li className="product__left__end__item">
                      Quantity Per Case
                    </li>
                    <li className="product__left__end__item">Ethyl Alcohol</li>
                    <li className="product__left__end__item">Piece In One</li>
                  </div>
                  <div className="product__left__end__card">
                    <h3 className="product__left__end__h3">Bottle</h3>
                    <h3 className="product__left__end__h3">
                      Green, Pink, Powder Blue, Purple
                    </h3>
                    <h3 className="product__left__end__h3">100ml</h3>
                    <h3 className="product__left__end__h3">70%</h3>
                    <h3 className="product__left__end__h3">Carton</h3>
                  </div>
                </div>
                <p className="product__left__end__text">
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>
                <h2 className="product__left__end__title">
                  Packaging & Delivery
                </h2>
                <p className="product__left__end__text">
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly. <br />
                  Scallop or far crud plain remarkably far by thus far iguana
                  lewd precociously and and less rattlesnake contrary caustic
                  wow this near alas and next and pled the yikes articulate
                  about as less cackled dalmatian in much less well jeering for
                  the thanks blindly sentimental whimpered less across
                  objectively fanciful grimaced wildly some wow and rose jeepers
                  outgrew lugubrious luridly irrationally attractively
                  dachshund.
                </p>
                <h2 className="product__left__end__title">Suggested Use</h2>
                <div className="pproduct__left__end__texts">
                  <p className="product__left__end__text">
                    Refrigeration not necessary.
                  </p>
                  <p className="product__left__end__text">
                    Stir before serving
                  </p>
                </div>
                <h2 className="product__left__end__title">Other Ingredients</h2>
                <div className="pproduct__left__end__texts">
                  <p className="product__left__end__text">
                    Organic raw pecans, organic raw cashews.
                  </p>
                  <p className="product__left__end__text">
                    This butter was produced using a LTG (Low Temperature
                    Grinding) process
                  </p>
                  <p className="product__left__end__text">
                    Made in machinery that processes tree nuts but does not
                    process peanuts, gluten, dairy or soy
                  </p>
                </div>
                <h2 className="product__left__end__title">Warnings</h2>
                <div className="pproduct__left__end__texts">
                  <p className="product__left__end__text">
                    Oil separation occurs naturally. May contain pieces of
                    shell.
                  </p>
                </div>
              </div>
            </div>
            <div className="product__right">
              <h2 className="product__right__title">Category</h2>
              <div className="product__right__line"></div>
              <div className="product__right__counts">
                {COUNTS?.map((el) => (
                  <div key={el.id} className="product__right__count">
                    <div className="product__right__count__exam">
                      <img
                        src={el.img}
                        alt="prodct__right__img"
                        className="product__right__count__img"
                      />
                      <h3 className="product__right__count__h3">{el.title}</h3>
                    </div>
                    <p className="product__right__count__text">{el.count}</p>
                  </div>
                ))}
              </div>
              <h2 className="product__right__title">Fill by price</h2>
              <div className="product__right__line"></div>
              <input type="range" className="product__right__input" />
              <div className="product__right__prices">
                <p className="product__right__price">
                  From: <strong className="product__right__strong">$500</strong>
                </p>
                <p className="product__right__price">
                  To: <strong className="product__right__strong">$1,000</strong>
                </p>
              </div>
              <div className="product__right__box">
                <div className="product__right__card">
                  <h4 className="product__right__h4">Color</h4>
                  <div className="product__right__chacked">
                    <input
                      type="checkbox"
                      className="product__right__checkbox"
                    />
                    <p className="product__right__text">Red (56)</p>
                  </div>
                  <div className="product__right__chacked">
                    <input
                      type="checkbox"
                      className="product__right__checkbox"
                    />
                    <p className="product__right__text">Green (78)</p>
                  </div>
                  <div className="product__right__chacked">
                    <input
                      type="checkbox"
                      className="product__right__checkbox"
                    />
                    <p className="product__right__text">Blue (54)</p>
                  </div>
                </div>
                <div className="product__right__card">
                  <h4 className="product__right__h4">Item Condition</h4>
                  <div className="product__right__chacked">
                    <input
                      type="checkbox"
                      className="product__right__checkbox"
                    />
                    <p className="product__right__text">New (1506)</p>
                  </div>
                  <div className="product__right__chacked">
                    <input
                      type="checkbox"
                      className="product__right__checkbox"
                    />
                    <p className="product__right__text">Refurbished (27)</p>
                  </div>
                  <div className="product__right__chacked">
                    <input
                      type="checkbox"
                      className="product__right__checkbox"
                    />
                    <p className="product__right__text">Used (45)</p>
                  </div>
                </div>
              </div>
              <div className="product__right__exam">
                <button className="product__right__btn">
                  <CiFilter className="product__right__filter" />
                  Fillter
                </button>
                <img
                  src={filter}
                  alt="filter__img"
                  className="product__right__img"
                />
              </div>
              <h2 className="product__right__title">New products</h2>
              <div className="product__right__line"></div>
              <div className="product__right__max">
                <img
                  src={right1}
                  alt="product__right__img"
                  className="product__right__max__img"
                />
                <div className="product__right__min">
                  <h2 className="product__right__min__title">Chen Cardigan</h2>
                  <p className="product__right__text">$99.50</p>
                  <img
                    src={star}
                    alt="star"
                    className="product__right__min__img"
                  />
                </div>
              </div>
              <div className="product__right__max">
                <img
                  src={right2}
                  alt="product__right__img"
                  className="product__right__max__img"
                />
                <div className="product__right__min">
                  <h2 className="product__right__min__title">Chen Sweater</h2>
                  <p className="product__right__text">$89.50</p>
                  <img
                    src={star}
                    alt="star"
                    className="product__right__min__img"
                  />
                </div>
              </div>
              <div className="product__right__max">
                <img
                  src={right3}
                  alt="product__right__img"
                  className="product__right__max__img"
                />
                <div className="product__right__min">
                  <h2 className="product__right__min__title">
                    Colorful Jacket
                  </h2>
                  <p className="product__right__text">$25</p>
                  <img
                    src={star}
                    alt="star"
                    className="product__right__min__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Shop />
      </section>
    </>
  );
}

export default memo(Product);
