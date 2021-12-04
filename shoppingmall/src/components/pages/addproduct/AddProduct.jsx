import React from "react";
import * as s from "./style";
import Header from "../header/Header";

function AddProduct() {
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
            <s.AddFrice type="number" />
          </s.InfoAdd>
        </s.AddForm>
      </s.AddProduct>
    </>
  );
}
export default AddProduct;
