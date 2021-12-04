import styled from "styled-components";

export const Best = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BestList = styled.div`
  width: 1200px;
  height: 1400px;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Interver = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BestProduct = styled.div`
  width: 250px;
  height: 300px;
  margin: 20px 0px 0px 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
  &:link {
    color: black;
  }
`;
