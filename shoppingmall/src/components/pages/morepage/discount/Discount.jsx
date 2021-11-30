import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Discount() {
  const menus = [
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
    "메인이미지 상품명",
  ];

  const DiscountList = menus.map((menu, index) => {
    return (
      <>
        <s.DiscountProduct>{menu}</s.DiscountProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>할인상품</h2>
      </s.Interver>
      <s.Discount>
        <s.DiscountList>{DiscountList}</s.DiscountList>
      </s.Discount>
    </>
  );
}
export default Discount;
