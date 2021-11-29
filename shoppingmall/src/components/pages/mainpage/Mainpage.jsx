import React from "react";
import { Link } from "react-router-dom";
import book from "../../../assets/book.png";
import car from "../../../assets/sports-car.png";
import hotel from "../../../assets/hotel.png";
import globe from "../../../assets/globe.png";
import ticket from "../../../assets/plane-tickets.png";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import * as s from "./style";
import Header from "../header/Header";

function Mainpage() {
  const menus = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const menuList = menus.map((menu, index) => {
    return (
      <>
        <s.StarMenuList>{menu}</s.StarMenuList>
      </>
    );
  });
  return (
    <>
      <Header></Header>
      <s.Main>
        <s.BannerDiv>
          <s.Banner>
            <s.BannerUl>
              <s.BannerLi style={{ backgroundImage: `url(${banner1})` }} />{" "}
              <s.BannerLi style={{ backgroundImage: `url(${banner2})` }} />
              <s.BannerLi style={{ backgroundImage: `url(${banner3})` }} />
            </s.BannerUl>
          </s.Banner>
        </s.BannerDiv>
        <s.FieldMenu>
          <s.MenuUl>
            <Link to="/book">
              <s.MenuLi>
                <s.MenuImg src={book} alt="logo" />책
              </s.MenuLi>
            </Link>
            <Link to="/car">
              <s.MenuLi>
                <s.MenuImg src={car} alt="logo" />
                자동차용품
              </s.MenuLi>
            </Link>
            <Link to="/hotel">
              <s.MenuLi>
                <s.MenuImg src={hotel} alt="logo" />
                호텔
              </s.MenuLi>
            </Link>
            <Link to="/globon">
              <s.MenuLi>
                <s.MenuImg src={globe} alt="logo" />
                해외직구
              </s.MenuLi>
            </Link>
            <Link to="/ticket">
              <s.MenuLi5>
                <s.MenuImg src={ticket} alt="logo" />
                티켓
              </s.MenuLi5>
            </Link>
          </s.MenuUl>
        </s.FieldMenu>
        <s.StarMenu>{menuList}</s.StarMenu>
      </s.Main>
    </>
  );
}
export default Mainpage;
