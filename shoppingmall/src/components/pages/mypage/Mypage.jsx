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
      {localStorage.getItem("accessToken") ? (
        <>
          <Header />
          <s.Mypage>
            <s.MypageMenu>
              <s.MyName>{MyInfo.name}</s.MyName>
              <Link to="/addProduct">
                <s.AddProduct type="button" value="상품 등록" />
              </Link>
            </s.MypageMenu>
            <s.BuyName>구매 내역</s.BuyName>
            <s.Goodform></s.Goodform>
          </s.Mypage>
        </>
      ) : (
        <>
          <Header />
          <s.AuthHead>
            <s.H2>로그인 및 회원가입을 해주세요</s.H2>
          </s.AuthHead>
          <s.MypageAuth>
            <Link to="/login">
              <s.LoginBtn type="button" value="로그인" />
            </Link>
            <Link to="/signUp">
              <s.SignBtn type="button" value="회원가입" />
            </Link>
          </s.MypageAuth>
        </>
      )}
    </>
  );
}
export default Mypage;
