import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logo from "../../../../assets/img/logo.jpg";
import * as s from "./style";
import axios from "axios";

axios.defaults.baseURL = "http://13.125.241.207:8088";
function Login() {
  const navigate = useNavigate();

  const mainHistory = () => {
    navigate("/");
  };

  const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

  const [input, setInput] = useState({
    email: "",
    userid: "",
    password: "",
  });

  const { email, userid, password } = input;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const data = { email: email, userid: userid, password: password };

  const onLogin = (e) => {
    axios
      .post("/auth/login", data)
      .then((res) => {
        console.log(res);
        console.log(res.data.accessToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        swal("로그인 성공", "You clicked the button!", "success");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        swal("로그인 실패", "You clicked the button!", "error");
      });

    const onReissue = () => {
      axios
        .post("http://13.125.241.207:8088/auth/reissue")
        .then(onLoginSuccess)
        .catch((e) => {
          console.log(e);
        });
    };

    const onLoginSuccess = (Response) => {
      const { accessToken } = Response.data;

      // accessToken 설정
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      // accessToken 만료하기 1분 전에 로그인 연장
      setTimeout(onReissue, JWT_EXPIRY_TIME - 6000);
    };
  };

  return (
    <s.LoginDiv>
      <s.Loginform>
        <s.Loginlogo src={logo} alt="logo" onClick={mainHistory} />
        <s.LoginE
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={onChange}
        />
        <s.LoginId
          name="userid"
          type="text"
          placeholder="ID"
          onChange={onChange}
        />
        <s.LoginPw
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
        />
        <s.LoginSub type="button" value="LOGIN" onClick={onLogin} />
        <Link to="/signUp">
          <s.LinkSign type="button" value="회원가입" />
        </Link>
      </s.Loginform>
    </s.LoginDiv>
  );
}
export default Login;
