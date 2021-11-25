import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import truck from "../../../assets/van.png";
import user from "../../../assets/user.png";
import cart from "../../../assets/shopping-cart.png";
import * as s from "./style";

function Header() {
  const navigate = useNavigate();

  const mainHistory = () => {
    navigate("/");
  };

  const truckHistory = () => {
    navigate("/truck");
  };

  return (
    <s.Head>
      <s.HeadDiv>
        <s.LogoImg src={logo} alt="logo" onClick={mainHistory} />
        <s.Select type="text" placeholder="검색어를 입력해주세요" />
        <s.Cartimg src={cart} alt="logo" />
        <s.Userimg src={user} alt="logo" />
        <s.Truckimg src={truck} alt="logo" onClick={truckHistory} />
      </s.HeadDiv>
      <s.HeadLine />
      <s.MenuDiv>
        <s.FStart>
          <s.MenuBtn1 type="button" value="베스트딜" />
          <s.MenuBtn type="button" value="할인상품" />
          <s.MenuBtn type="button" value="쿠폰/혜택" />
          <s.MenuBtn type="button" value="당일배송" />
          <Link to="/login">
            <s.LoginBtn type="button" value="로그인/회원가입" />{" "}
          </Link>
        </s.FStart>
      </s.MenuDiv>
    </s.Head>
  );
}
export default Header;
