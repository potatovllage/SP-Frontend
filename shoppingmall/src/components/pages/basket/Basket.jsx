import React from "react";
import Header from "../header/Header";
import * as s from "./style";

function Basket() {
  return (
    <>
      <Header />
      <s.Basket>
        <s.basketname>장바구니</s.basketname>
        <s.Basketform></s.Basketform>
      </s.Basket>
    </>
  );
}
export default Basket;
