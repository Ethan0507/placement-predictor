import React, { lazy } from "react";
import { CRow, CCol, CWidgetBrand, CCard, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { CChartDoughnut } from "@coreui/react-chartjs";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const ViewDashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Marketing and Finance</CCardHeader>
            <CChartDoughnut
              datasets={[
                {
                  backgroundColor: ["#41B883", "#E46651"],
                  data: [40, 20],
                },
              ]}
              labels={["Placed", "Unplaced"]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
            <br />
            <CWidgetBrand
              rightHeader="973k"
              rightFooter="PLACED"
              leftHeader="1.792"
              leftFooter="UNPLACED"
            ></CWidgetBrand>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader>Marketing and HR</CCardHeader>
            <CChartDoughnut
              datasets={[
                {
                  backgroundColor: ["#41B883", "#E46651"],
                  data: [40, 20],
                },
              ]}
              labels={["Placed", "Unplaced"]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
            <br />
            <CWidgetBrand
              rightHeader="973k"
              rightFooter="PLACED"
              leftHeader="1.792"
              leftFooter="UNPLACED"
            ></CWidgetBrand>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default ViewDashboard;
