import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Car() {
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

  const CarList = menus.map((menu, index) => {
    return (
      <>
        <s.CarProduct>{menu}</s.CarProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>자동차용품</h2>
      </s.Interver>
      <s.Car>
        <s.CarList>{CarList}</s.CarList>
      </s.Car>
    </>
  );
}
export default Car;
