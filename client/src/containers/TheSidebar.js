import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { AuthContext } from "../context/auth-context";

const savedData = JSON.parse(localStorage.getItem("userData"));
let role = null;
if (savedData) {
  role = savedData.role;
}

let navigation;

switch (role) {
  case "tpo":
    navigation = [
      {
        _tag: "CSidebarNavTitle",
        _children: ["TPO Panel"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "View Dashboard",
        to: "/tpo/view-dashboard",
        icon: "cil-control",
      },
      {
        _tag: "CSidebarNavItem",
        name: "View Students",
        to: "/tpo/view-students",
        icon: "cil-drop",
      },
    ];
    break;

  case "admin": {
    navigation = [
      {
        _tag: "CSidebarNavTitle",
        _children: ["Admin Panel"],
      },
      {
        _tag: "CSidebarNavItem",
        name: "View Users",
        to: "/admin/view-users",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "View Student Details",
        to: "/admin/view-student-details",
        icon: "cil-drop",
      },
    ];
    break;
  }

  default:
    navigation = [];
    break;
}

const TheSidebar = () => {
  const dispatch = useDispatch();

  const auth = useContext(AuthContext);
  let show = useSelector((state) => state.sidebarShow);

  if (auth.isLoggedIn && auth.userRole === "student") {
    show = false;
  }

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <h4 className="c-sidebar-brand-full">Placement-Predictor</h4>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
