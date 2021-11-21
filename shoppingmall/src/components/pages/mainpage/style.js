import styled from "styled-components";

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
  background-color: #707070;
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

export const StarMenu = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 80px;
  background-color: black;
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
