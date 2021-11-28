import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import * as s from "./style";
import axios from "axios";

function SignUp() {
  const [input, setInput] = useState({
    email: "",
    userid: "",
    password: "",
    nickname: "",
  });

  const { email, userid, password, nickname } = input;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitOn = () => {
    axios
      .post("http://13.125.241.207:8088/auth/join", {
        email: email,
        userid: userid,
        password: password,
        nickname: nickname,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const navigate = useNavigate();

  const mainHistory = () => {
    navigate("/");
  };
  return (
    <s.SignDiv>
      <s.Signform>
        <s.Signlogo src={logo} alt="logo" onClick={mainHistory} />
        <s.SignE
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={onChange}
        />
        <s.SignId
          name="userid"
          type="text"
          placeholder="ID"
          onChange={onChange}
        />
        <s.SignPw
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
        />
        <s.SignPw
          name="nickname"
          type="text"
          placeholder="NickName"
          onChange={onChange}
        />
        <s.SignSub type="button" value="SIGN UP" onClick={submitOn} />
        <Link to="/login">
          <s.Linklogin type="button" value="로그인" />
        </Link>
      </s.Signform>
    </s.SignDiv>
  );
}
export default SignUp;
