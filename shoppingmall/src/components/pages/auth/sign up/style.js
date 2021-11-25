import styled from "styled-components";

export const SignDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Signform = styled.div`
  width: 350px;
  height: 530px;
  border: 5px solid black;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Signlogo = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

export const SignE = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 40px;
  padding-left: 20px;
  border: solid 1px gray;
  border-radius: 15px;
`;

export const SignId = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 40px;
  padding-left: 20px;
  border: solid 1px gray;
  border-radius: 15px;
`;

export const SignPw = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 40px;
  padding-left: 20px;
  border: solid 1px gray;
  border-radius: 15px;
`;

export const SignSub = styled.input`
  width: 250px;
  height: 40px;
  margin-top: 50px;
  padding-left: 20px;
  border: none;
  border-radius: 15px;
  background-color: black;
  color: white;
  text-align: center;
`;

export const Linklogin = styled.input`
  margin-top: 30px;
  margin-bottom: 20px;
  border: none;
  background-color: white;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;
