import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import banner4 from "../../../assets/img/banner4.png";
import coupon1 from "../../../assets/img/coupon1.png";
import coupon2 from "../../../assets/img/coupon2.png";
import coupon3 from "../../../assets/img/coupon3.png";
import coupon4 from "../../../assets/img/coupon4.png";
import coupon5 from "../../../assets/img/coupon5.png";
import * as s from "./style";

function Coupon() {
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
      <s.Coupon>
        <s.Couponform>
          <s.CouponBanner src={banner4} alt="logo" />
          <s.Coupon1 src={coupon1} alt="logo" />
          <s.Coupon2 src={coupon2} alt="logo" />
          <s.Coupon3 src={coupon3} alt="logo" />
          <s.Coupon4 src={coupon4} alt="logo" />
          <s.Coupon5 src={coupon5} alt="logo" />
        </s.Couponform>
      </s.Coupon>
    </>
  );
}
export default Coupon;
