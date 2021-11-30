import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Hotel() {
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

  const HotelList = menus.map((menu, index) => {
    return (
      <>
        <s.HotelProduct>{menu}</s.HotelProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>BOOK</h2>
      </s.Interver>
      <s.Hotel>
        <s.HotelList>{HotelList}</s.HotelList>
      </s.Hotel>
    </>
  );
}
export default Hotel;
