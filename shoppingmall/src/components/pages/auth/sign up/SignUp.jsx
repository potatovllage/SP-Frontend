import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import * as s from "./style";

function SignUp() {
  const navigate = useNavigate();

  const mainHistory = () => {
    navigate("/");
  };
  return (
    <s.SignDiv>
      <s.Signform>
        <s.Signlogo src={logo} alt="logo" onClick={mainHistory} />
        <s.SignE type="text" placeholder="E-mail" />
        <s.SignId type="text" placeholder="ID" />
        <s.SignPw type="text" placeholder="Password" />
        <s.SignPw type="text" placeholder="NickName" />
        <s.SignSub type="button" value="SIGN UP" />
        <Link to="/login">
          <s.Linklogin type="button" value="로그인" />
        </Link>
      </s.Signform>
    </s.SignDiv>
  );
}
export default SignUp;
