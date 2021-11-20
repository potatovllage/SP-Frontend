import React from "react";
import book from "../../../assets/book.png";
import car from "../../../assets/sports-car.png";
import hotel from "../../../assets/hotel.png";
import globe from "../../../assets/globe.png";
import ticket from "../../../assets/plane-tickets.png";
import * as s from "./style";

function Mainpage() {
  return (
    <s.Main>
      <s.BannerDiv>
        <s.Banner />
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
    </s.Main>
  );
}
export default Mainpage;
