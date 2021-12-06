import React from "react";
import { useParams } from "react-router";
import Header from "../header/Header";
import * as s from "./style";

function List() {
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

  const params = useParams();
  const List = menus.map((menu, index) => {
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
        <h2>{params.listname}</h2>
      </s.Interver>
      <s.List>
        <s.MoreList>{List}</s.MoreList>
      </s.List>
    </>
  );
}
export default List;
