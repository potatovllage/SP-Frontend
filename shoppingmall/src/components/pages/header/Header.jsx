import React from "react";
import logo from "../../../assets/logo.jpg";
import truck from "../../../assets/van.png";
import user from "../../../assets/user.png";
import cart from "../../../assets/shopping-cart.png";
import * as s from "./style";

function Header() {
  return (
    <s.Head>
      <s.HeadDiv>
        <s.LogoImg src={logo} alt="logo" />
        <s.Select type="text" placeholder="검색어를 입력해주세요" />
        <s.Truckimg src={truck} alt="logo" />
        <s.Userimg src={user} alt="logo" />
        <s.Cartimg src={cart} alt="logo" />
      </s.HeadDiv>
    </s.Head>
  );
}
export default Header;
