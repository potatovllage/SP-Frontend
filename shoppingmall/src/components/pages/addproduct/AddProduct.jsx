import React, { useState, useRef } from "react";
import * as s from "./style";
import Header from "../header/Header";
import axios from "axios";
import { BASE_URL } from "../../../api/axios";

function AddProduct() {
  const [fileState, setFileState] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    count: 0,
    category: "",
  });
  const fileInput = useRef();
  const Category = [
    "카테고리를 설정해주세요",
    "베스트딜",
    "할인상품",
    "당일배송",
    "책",
    "6.자동차용품",
    "호텔",
    "해외직구",
    "티켓",
  ];

  const onChangeFileInput = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
      setFileState(file);
      setFileURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    const frm = new FormData();
    frm.append("title", formData.title);
    frm.append("titleImage", fileState);
    frm.append("price", formData.price);
    frm.append("category", formData.category);
    frm.append("count", formData.count);

    console.log(frm);

    const token = localStorage.getItem("accessToken");

    axios
      .post(`${BASE_URL}/board/product/`, frm, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Header />
      <s.AddProduct>
        <s.AddForm>
          <s.ImgForm>
            <s.H2>이미지 추가</s.H2>
            {fileState ? (
              <s.ImagePreviewBox
                src={fileURL}
                onClick={(e) => {
                  e.preventDefault();
                  fileInput.current.click();
                }}
              ></s.ImagePreviewBox>
            ) : (
              <s.AddImg
                onClick={(e) => {
                  e.preventDefault();
                  fileInput.current.click();
                }}
              >
                +
              </s.AddImg>
            )}
          </s.ImgForm>
          <input
            hidden={true}
            ref={fileInput}
            type="file"
            accept="image/*"
            onChange={onChangeFileInput}
          ></input>
          <s.InfoAdd>
            <s.H2>상품명</s.H2>
            <s.AddName type="text" name="title" onChange={onChangeForm} />
            <s.H2>상품 가격</s.H2>
            <s.AddFrice
              type="number"
              min={0}
              name="price"
              onChange={onChangeForm}
            />
            <s.H2>수량</s.H2>
            <s.ProductQuantity>
              <s.QDown
                type="button"
                value="-"
                onClick={() => {
                  if (!(formData.count <= 0)) {
                    setFormData({
                      ...formData,
                      count: formData.count - 1,
                    });
                  }
                }}
              />
              <s.H2>{formData.count}</s.H2>
              <s.QUp
                type="button"
                value="+"
                onClick={() =>
                  setFormData({
                    ...formData,
                    count: formData.count + 1,
                  })
                }
              />
            </s.ProductQuantity>
            <s.H2>카테고리</s.H2>
            <s.Select name="category" onChange={onChangeForm}>
              {Category.map((detail) => (
                <option key={detail}>{detail}</option>
              ))}
            </s.Select>
            <s.UpDiv>
              <s.Upload type="button" value="등록" onClick={onClickSubmit} />
            </s.UpDiv>
          </s.InfoAdd>
        </s.AddForm>
      </s.AddProduct>
    </>
  );
}
export default AddProduct;
