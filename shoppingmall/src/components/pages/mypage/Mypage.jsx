import React from "react";
import Header from "../header/Header";
import * as s from "./style";

function Mypage() {
  const MyInfo = {
    name: "OOO",
  };
  return (
    <>
      <Header />
      <s.Mypage>
        <s.MypageMenu>
          <s.MyName>{MyInfo.name}</s.MyName>
          <s.AddProduct type="button" value="상품 등록" />
        </s.MypageMenu>
        <s.GoodName>좋아요한 상품</s.GoodName>
        <s.Goodform></s.Goodform>
        <s.BuyName>구매 내역</s.BuyName>
        <s.Goodform></s.Goodform>
      </s.Mypage>
    </>
  );
}
export default Mypage;
