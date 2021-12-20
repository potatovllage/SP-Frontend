import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import * as s from "./style";
import axios from "axios";
import { BASE_URL } from "../../../api/axios";

function Mypage() {
  const [userGet, SetuserGet] = useState({
    nickname: "",
  });

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/page`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        SetuserGet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <>
      {localStorage.getItem("accessToken") ? (
        <>
          <Header />
          <s.Mypage>
            <div>
              <s.MypageMenu>
                <s.MyName>{userGet.nickname}</s.MyName>
                <Link to="/addProduct">
                  <s.AddProduct type="button" value="상품 등록" />
                </Link>
              </s.MypageMenu>
              <s.BuyName>구매 내역</s.BuyName>
              <s.Goodform></s.Goodform>
            </div>
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
