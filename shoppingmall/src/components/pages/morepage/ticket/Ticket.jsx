import React from "react";
import Header from "../../header/Header";
import * as s from "./style";

function Ticket() {
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

  const TicketList = menus.map((menu, index) => {
    return (
      <>
        <s.TicketProduct>{menu}</s.TicketProduct>
      </>
    );
  });
  return (
    <>
      <Header />
      <s.Interver>
        <h2>BOOK</h2>
      </s.Interver>
      <s.Ticket>
        <s.TicketList>{TicketList}</s.TicketList>
      </s.Ticket>
    </>
  );
}
export default Ticket;
