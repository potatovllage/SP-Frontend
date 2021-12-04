import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/addProduct">
            <s.AddProduct type="button" value="상품 등록" />
          </Link>
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
