import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100px;
  padding: 0;
`;

export const BannerDiv = styled.div`
  width: 100%;
  height: 350px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 350px;
  background-color: black;
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

export const starMenu = styled.div`
  width: 100%;
  height: 100%;
`;
