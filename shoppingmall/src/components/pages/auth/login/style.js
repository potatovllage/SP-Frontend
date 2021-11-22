import styled from "styled-components";

export const LoginDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loginform = styled.div`
  width: 350px;
  height: 530px;
  border: 5px solid black;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loginlogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const LoginE = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 40px;
  padding-left: 20px;
  border: solid 1px gray;
  border-radius: 15px;
`;

export const LoginId = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 40px;
  padding-left: 20px;
  border: solid 1px gray;
  border-radius: 15px;
`;

export const LoginPw = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 40px;
  padding-left: 20px;
  border: solid 1px gray;
  border-radius: 15px;
`;

export const LoginSub = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 50px;
  padding-left: 20px;
  border: none;
  border-radius: 15px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkSign = styled.input`
  margin-top: 30px;
  border: none;
  background-color: white;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;
