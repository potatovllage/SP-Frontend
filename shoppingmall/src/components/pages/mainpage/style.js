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
  height: 350px;
  overflow: hidden;
`;

export const BannerUl = styled.ul`
  width: calc(1100px * 4);
  display: flex;
  animation: slide 18s infinite;
  padding: 0;
`;

export const BannerLi = styled.li`
  display: block;
  width: 1100px;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  ${(props) =>
    props.active &&
    `
   animation: ${slide} 2s 1s infinite linear alternate;
  `}
`;

const slide = keyframes` 0% {
  margin-left: 0;
}
10% {
  margin-left: 0;
}
25% {
  margin-left: -1100px;
}
35% {
  margin-left: -1100px;
}
50% {
  margin-left: -2200px;
}
60% {
  margin-left: -2200px;
}
75% {
  margin-left: -3300px;
}
85% {
  margin-left: -3300px;
}
100% {
  margin-left: 0;
}`;

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
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuLi5 = styled.li`
  padding: 0 0 0 0;
  border: 0;
  float: left;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  &:hover {
    text-decoration: underline;
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
