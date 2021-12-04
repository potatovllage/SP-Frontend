import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductBoard = styled.div`
  width: 1000px;
  height: 800px;
  padding: 20px;
  margin-top: 80px;
  border: 5px solid black;
  background-color: #f8f8ff;
  display: flex;
  justify-content: center;
`;

export const ProductInfo = styled.div`
  margin-top: 50px;
`;

export const ProductIMG = styled.div`
  width: 400px;
  height: 430px;
  border: 5px solid black;
  margin-top: 50px;
  margin-bottom: 650px;
`;

export const ProductName = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
  width: 450px;
  height: 1px;
  margin-left: 50px;
  background-color: black;
`;

export const UseCoupon = styled.div`
  margin-top: 30px;
  margin-left: 135px;
`;

export const Select = styled.select`
  cursor: pointer;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const ProductQuantity = styled.div`
  width: 180px;
  height: 50px;
  margin-top: 60px;
  margin-left: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  margin-bottom: 10px;
`;

export const QUp = styled.input`
  width: 30px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const QDown = styled.input`
  width: 30px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ProductBuy = styled.div`
  margin-top: 80px;
  margin-left: 100px;
  margin-bottom: 300px;
`;

export const BasketBtn = styled.input`
  width: 150px;
  height: 30px;
  background-color: white;
  color: black;
  margin-right: 10px;
  border: 1px solid black;
  cursor: pointer;
`;

export const BuyBtn = styled.input`
  width: 150px;
  height: 30px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
`;
