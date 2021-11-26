import React from "react";
import Header from "../header/Header";
import banner4 from "../../../assets/banner4.png";
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
        </s.Couponform>
      </s.Coupon>
    </>
  );
}
export default Coupon;
