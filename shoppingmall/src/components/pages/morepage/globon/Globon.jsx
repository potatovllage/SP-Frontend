import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Globon() {
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

  const GlobonList = menus.map((menu, index) => {
    return (
      <>
        <s.GlobonProduct>{menu}</s.GlobonProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>해외직구</h2>
      </s.Interver>
      <s.Globon>
        <s.GlobonList>{GlobonList}</s.GlobonList>
      </s.Globon>
    </>
  );
}
export default Globon;
