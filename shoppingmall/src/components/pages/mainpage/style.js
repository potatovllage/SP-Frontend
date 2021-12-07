import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 0;
`;

export const BannerDiv = styled.div`
  width: 100%;
  height: 350px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const slide = keyframes`
 0% {
  margin-left: 0;
}
10% {
  margin-left: 0;
}
25% {
  margin-left: -100%;
}
35% {
  margin-left: -100%;
}
50% {
  margin-left: -200%;
}
60% {
  margin-left: -200%;
}
75% {
  margin-left: -300%;
}
85% {
  margin-left: -300%;
}
100% {
  margin-left: 0;
}`;
export const BannerUl = styled.ul`
  width: calc(100% * 4);
  display: flex;
  animation: ${slide} 16s infinite;
  padding: 0;
`;

export const BannerLi = styled.li`
  display: block;
  width: 25%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FieldMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const MenuUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuLi = styled.li`
  margin-right: 100px;
  padding: 0 0 0 0;
  border: 0;
  float: left;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  color: black;
  &:hover {
    text-decoration: none;
  }
  &:link {
    color: black;
  }
`;

export const MenuLi5 = styled.li`
  padding: 0 0 0 0;
  border: 0;
  float: left;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  color: black;
  &:hover {
    text-decoration: underline;
  }
  &:link {
    color: black;
  }
`;

export const MenuImg = styled.img`
  width: 70px;
  height: 70px;
  display: block;
`;

export const StarMenu = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 80px;
  background-color: #707070;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StarMenuList = styled.div`
  width: 300px;
  height: 180px;
  margin-right: 20px;
  margin-left: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
