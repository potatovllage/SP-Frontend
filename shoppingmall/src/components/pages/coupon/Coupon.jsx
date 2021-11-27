import React from "react";
import Header from "../header/Header";
import banner4 from "../../../assets/banner4.png";
import coupon1 from "../../../assets/coupon1.png";
import coupon2 from "../../../assets/coupon2.png";
import coupon3 from "../../../assets/coupon3.png";
import coupon4 from "../../../assets/coupon4.png";
import coupon5 from "../../../assets/coupon5.png";
import * as s from "./style";

function Coupon() {
  return (
    <>
      <Header />
      <s.Interver>
        <s.CouponBtn type="button" value="할인은 이곳 쿠폰존" />
        <s.BenefitsBtn type="button" value="모든 혜택은 이곳 혜택존" />
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