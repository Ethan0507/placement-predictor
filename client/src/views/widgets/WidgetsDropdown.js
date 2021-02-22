import React from "react";
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetProgressIcon,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="6">
        <CWidgetProgressIcon
          header="385"
          text="Total Placed Students"
          color="gradient-success"
          value="100"
          inverse
        >
          <CIcon name="cil-userFollow" height="36" />
        </CWidgetProgressIcon>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetProgressIcon
          header="1238"
          text="Total Unplaced Students"
          color="gradient-warning"
          value="100"
          inverse
        >
          <CIcon name="cil-basket" height="36" />
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
