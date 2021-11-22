import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import * as s from "./style";

function Login() {
  const navigate = useNavigate();

  const mainHistory = () => {
    navigate("/");
  };

  return (
    <s.LoginDiv>
      <s.Loginform>
        <s.Loginlogo src={logo} alt="logo" onClick={mainHistory} />
        <s.LoginE type="text" placeholder="E-mail" />
        <s.LoginId type="text" placeholder="ID" />
        <s.LoginPw type="text" placeholder="Password" />
        <s.LoginSub type="button" value="LOGIN" />
        <Link to="/signUp">
          <s.LinkSign type="button" value="회원가입" />
        </Link>
      </s.Loginform>
    </s.LoginDiv>
  );
}
export default Login;
