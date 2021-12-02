import React from "react";
import Header from "../header/Header";
import * as s from "./style";

function Basket() {
  return (
    <>
      <Header />
      <s.Basket>
        <s.BasketMenu>
          <s.basketname>장바구니</s.basketname>
          <s.DeleteBtn type="button" value="삭제" />
        </s.BasketMenu>
        <s.Basketform></s.Basketform>
      </s.Basket>
    </>
  );
}
export default Basket;
