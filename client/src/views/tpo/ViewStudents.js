import React, { useState } from "react";
import {
  CInputCheckbox,
  CLabel,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CFormGroup,
} from "@coreui/react";

const ViewStudents = () => {
  const [active, setActive] = useState(1);
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";

  return (
    <div>
      <CTabs activeTab="home">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="home">Home</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="profile">Profile</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="messages">Messages</CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="home">
            <CCol>
              <br />
              <CFormGroup>
                <CInputCheckbox
                  id="checkbox1"
                  name="checkbox1"
                  value="option1"
                />
                <CLabel
                  variant="checkbox"
                  className="form-check-label"
                  htmlFor="checkbox1"
                >
                  Option 1
                </CLabel>
              </CFormGroup>
            </CCol>
          </CTabPane>
          <CTabPane data-tab="profile">456</CTabPane>
          <CTabPane data-tab="messages">789</CTabPane>
        </CTabContent>
      </CTabs>
    </div>
  );
};

export default ViewStudents;
