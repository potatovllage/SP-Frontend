import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Best() {
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

  const BestList = menus.map((menu, index) => {
    return (
      <>
        <s.BestProduct>{menu}</s.BestProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>베스트딜</h2>
      </s.Interver>
      <s.Best>
        <s.BestList>{BestList}</s.BestList>
      </s.Best>
    </>
  );
}
export default Best;
