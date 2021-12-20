import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import banner5 from "../../../assets/img/banner5.png";
import benefit1 from "../../../assets/img/benefit1.png";
import benefit2 from "../../../assets/img/benefit2.png";
import benefit3 from "../../../assets/img/benefit3.png";
import benefit4 from "../../../assets/img/benefit4.png";
import benefit5 from "../../../assets/img/benefit5.png";
import * as s from "./style";

function Benefit() {
  return (
    <>
      <Header />
      <s.Interver>
        <Link to="/coupon">
          <s.CouponBtn type="button" value="할인은 이곳 쿠폰존" />
        </Link>
        <Link to="/benefit">
          <s.BenefitsBtn type="button" value="모든 혜택은 이곳 혜택존" />
        </Link>
      </s.Interver>
      <s.Benefit>
        <s.Benefitform>
          <s.BenefitBanner src={banner5} alt="logo" />
          <s.Benefit1 src={benefit1} alt="logo" />
          <s.Benefit2 src={benefit2} alt="logo" />
          <s.Benefit3 src={benefit3} alt="logo" />
          <s.Benefit4 src={benefit4} alt="logo" />
          <s.Benefit5 src={benefit5} alt="logo" />
        </s.Benefitform>
      </s.Benefit>
    </>
  );
}
export default Benefit;
