import React, { useState, useRef } from "react";
import * as s from "./style";
import Header from "../header/Header";

function AddProduct() {
  const [Quantity, setQuantity] = useState(0);
  const detailRef = useRef();

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

  const Category = [
    "카테고리를 설정해주세요",
    "1. 베스트딜",
    "2. 할인상품",
    "3. 쿠폰/혜택",
    "4. 당일배송",
    "5. 이벤트! 5000원 할인",
    "6. 책",
    "7. 자동차용품",
    "8. 호텔",
    "9. 해외직구",
    "10. 티켓",
  ];

  return (
    <>
      <Header />
      <s.AddProduct>
        <s.AddForm>
          <s.ImgForm>
            <s.H2>이미지 추가</s.H2>
            <s.AddImg>+</s.AddImg>
          </s.ImgForm>
          <s.InfoAdd>
            <s.H2>상품명</s.H2>
            <s.AddName type="text" />
            <s.H2>상품 가격</s.H2>
            <s.AddFrice type="text" />
            <s.H2>수량</s.H2>
            <s.ProductQuantity>
              <s.QDown type="button" value="-" onClick={onDecrease} />
              <s.H2>{Quantity}</s.H2>
              <s.QUp type="button" value="+" onClick={onIncrease} />
            </s.ProductQuantity>
            <s.H2>카테고리</s.H2>
            <s.Select id="selectList" ref={detailRef}>
              {Category.map((detail) => (
                <option key={detail}>{detail}</option>
              ))}
            </s.Select>
          </s.InfoAdd>
        </s.AddForm>
      </s.AddProduct>
    </>
  );
}
export default AddProduct;
