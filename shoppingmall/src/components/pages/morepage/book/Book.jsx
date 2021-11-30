import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Book() {
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
        <s.BookProduct>{menu}</s.BookProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>BOOK</h2>
      </s.Interver>
      <s.Book>
        <s.BookList>{BookList}</s.BookList>
      </s.Book>
    </>
  );
}
export default Book;
