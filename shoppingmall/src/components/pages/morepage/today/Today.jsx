import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Today() {
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

  const TodayList = menus.map((menu, index) => {
    return (
      <>
        <s.TodayProduct>{menu}</s.TodayProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>당일배송</h2>
      </s.Interver>
      <s.Today>
        <s.TodayList>{TodayList}</s.TodayList>
      </s.Today>
    </>
  );
}
export default Today;
