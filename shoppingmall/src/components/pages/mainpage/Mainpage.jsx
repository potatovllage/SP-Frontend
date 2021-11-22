import React from "react";
import book from "../../../assets/book.png";
import car from "../../../assets/sports-car.png";
import hotel from "../../../assets/hotel.png";
import globe from "../../../assets/globe.png";
import ticket from "../../../assets/plane-tickets.png";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import * as s from "./style";

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
          <s.MenuLi>
            <s.MenuImg src={book} alt="logo" />책
          </s.MenuLi>
          <s.MenuLi>
            <s.MenuImg src={car} alt="logo" />
            자동차용품
          </s.MenuLi>
          <s.MenuLi>
            <s.MenuImg src={hotel} alt="logo" />
            호텔
          </s.MenuLi>
          <s.MenuLi>
            <s.MenuImg src={globe} alt="logo" />
            해외직구
          </s.MenuLi>
          <s.MenuLi5>
            <s.MenuImg src={ticket} alt="logo" />
            티켓
          </s.MenuLi5>
        </s.MenuUl>
      </s.FieldMenu>
      <s.StarMenu>{menuList}</s.StarMenu>
    </s.Main>
  );
}
export default Mainpage;
