import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import * as s from "./style";
import logo from "../../../assets/logo.jpg";
import axios from "axios";

function List() {
  const menus = [
    "새우깡",
    "과자모음",
    "LED전구",
    "삼성 노트북",
    "맥북",
    "삼성 버즈 프로",
    "아이폰 10",
    "칠성사이다",
    "팹시",
    "코카콜라",
    "수건",
    "양말",
    "LA갈비",
    "비비고 만두",
    "감자",
    "옥수수",
  ];

  console.log(logo);

  const params = useParams();
  const List = menus.map((menu, index) => {
    return (
      <>
        <Link to="/product" style={{ textDecoration: "none" }}>
          <s.ListProduct>
            <div>
              <s.ListImg src={logo} alt="logo" />
            </div>
            <s.ListText>{menu}</s.ListText>
          </s.ListProduct>
        </Link>
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
