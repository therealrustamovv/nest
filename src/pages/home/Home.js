import React, { memo } from "react";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Fruits from "../../components/fruits/Fruits";
import Fresh from "../../components/fresh/Fresh";
import Links from "../../components/links/Links";
import Products from "../../components/products/Products";
import Shop from "../../components/shop/Shop";
import Prices from "../../components/prices/Prices";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Fruits />
      <Fresh />
      <Links />
      <Products />
      <Shop />
      <Prices />
    </>
  );
}

export default memo(Home);
