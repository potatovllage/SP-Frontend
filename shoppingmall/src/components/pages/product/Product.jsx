import React, { useState, useRef } from "react";
import Header from "../header/Header";
import * as s from "./style";

function Product() {
  const [Quantity, setQuantity] = useState(0);
  const detailRef = useRef();

  const productInfo = {
    name: "제품명",
    price: "15000원",
  };

  const onIncrease = () => {
    const pCount = Quantity + 1;
    setQuantity(pCount);
  };

  const onDecrease = () => {
    const mCount = Quantity - 1;
    if (mCount < 0) {
      alert("0 이하로 내려갈 수 없습니다.");
    } else {
      setQuantity(mCount);
    }
  };

  const PDetail = [
    "쿠폰을 선택해주세요",
    "1. 기획 이벤트! 15% 할인",
    "2. 쇼핑몰 출시 이벤트! 3000원 할인",
    "3. 2000원 할인",
    "4. 반값? 50% 할인",
    "5. 이벤트! 5000원 할인",
  ];
  return (
    <>
      <Header />
      <s.Product>
        <s.ProductBoard>
          <s.ProductIMG />
          <s.ProductInfo>
            <s.ProductName>
              <h2>{`${productInfo.name}`}</h2>
            </s.ProductName>
            <s.Line />
            <s.ProductPrice>
              <h2>{`${productInfo.price}`}</h2>
            </s.ProductPrice>
            <s.UseCoupon>
              <s.Select id="selectList" ref={detailRef}>
                {PDetail.map((detail) => (
                  <option key={detail}>{detail}</option>
                ))}
              </s.Select>
            </s.UseCoupon>
            <s.ProductQuantity>
              <s.QDown type="button" value="-" onClick={onDecrease} />
              <s.H2>{Quantity}</s.H2>
              <s.QUp type="button" value="+" onClick={onIncrease} />
            </s.ProductQuantity>
            <s.ProductBuy>
              <s.BasketBtn type="button" value="장바구니" />
              <s.BuyBtn type="button" value="구매" />
            </s.ProductBuy>
          </s.ProductInfo>
        </s.ProductBoard>
      </s.Product>
    </>
  );
}
export default Product;
