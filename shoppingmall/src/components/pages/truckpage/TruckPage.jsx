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
              <s.TableTd>택배 회사</s.TableTd>
              <s.TableTd>링크</s.TableTd>
            </tr>
            <tr>
              <s.TableTd>CJ 대한통운</s.TableTd>
              <s.TableTd>
                https://www.cjlogistics.com//ko/tool/parcel/tracking
              </s.TableTd>
            </tr>
            <tr>
              <s.TableTd>로젠택배</s.TableTd>
              <s.TableTd>
                https://www.ilogen.com/web/personal/tkSearch
              </s.TableTd>
            </tr>
            <tr>
              <s.TableTd>한진</s.TableTd>
              <s.TableTd>
                https://www.hanjin.co.kr/kor/CMS/DeliveryMgr/WaybillSch.do?mCode=MN038
              </s.TableTd>
            </tr>
            <tr>
              <s.TableTd>롯데택배</s.TableTd>
              <s.TableTd>
                https://www.lotteglogis.com/mobile/reservation/tracking/index
              </s.TableTd>
            </tr>
            <tr>
              <s.LastTd>우채국택배</s.LastTd>
              <s.LastTd>
                https://service.epost.go.kr/trace.RetrieveEmsRigiTrace.comm
              </s.LastTd>
            </tr>
          </s.Table>
        </s.TruckTable>
      </s.Truck>
    </>
  );
}
export default TruckPage;
