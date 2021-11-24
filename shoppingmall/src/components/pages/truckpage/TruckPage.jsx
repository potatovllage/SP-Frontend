import React from "react";
import Header from "../header/Header";
import * as s from "./style";

function TruckPage() {
  return (
    <>
      <Header />
      <s.Truck>
        <s.TableName>택배 운송 조회 페이지</s.TableName>
        <s.TruckTable>
          <s.Table>
            <tr>
              <td>택배 회사</td>
              <td>링크</td>
            </tr>
            <tr>
              <td>CJ 대한통운</td>
              <td>https://www.cjlogistics.com//ko/tool/parcel/tracking</td>
            </tr>
            <tr>
              <td>로젠택배</td>
              <td>https://www.ilogen.com/web/personal/tkSearch</td>
            </tr>
            <tr>
              <td>한진</td>
              <td>
                https://www.hanjin.co.kr/kor/CMS/DeliveryMgr/WaybillSch.do?mCode=MN038
              </td>
            </tr>
            <tr>
              <td>롯데택배</td>
              <td>
                https://www.lotteglogis.com/mobile/reservation/tracking/index
              </td>
            </tr>
            <tr>
              <td>우채국택배</td>
              <td>
                https://service.epost.go.kr/trace.RetrieveEmsRigiTrace.comm
              </td>
            </tr>
          </s.Table>
        </s.TruckTable>
      </s.Truck>
    </>
  );
}
export default TruckPage;
