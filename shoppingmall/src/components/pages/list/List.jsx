import React from "react";
import Header from "../header/Header";
import * as s from "./style";

function List(props) {
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

  const BookList = menus.map((menu, index) => {
    return (
      <>
        <s.ListProduct>{menu}</s.ListProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>{props.name}</h2>
      </s.Interver>
      <s.List>
        <s.MoreList>{BookList}</s.MoreList>
      </s.List>
    </>
  );
}
export default List;
