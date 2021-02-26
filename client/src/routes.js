import React from "react";


const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const ViewStatus = React.lazy(() => import("./views/student/ViewStatus"));
const ViewHistory = React.lazy(() => import("./views/student/ViewHistory"));

const ViewDashboard = React.lazy(() => import("./views/tpo/ViewDashboard"));
const ViewStudents = React.lazy(() => import("./views/tpo/ViewStudents"));

const routes = [
  { path: "/", exact: true, name: "Home"},
  { path: "/student", name: "Student", component: ViewStatus, exact: true },
  { path: "/student/view-status", name: "View Status", component: ViewStatus },
  {
    path: "/tpo",
    component: ViewDashboard,
    exact: true,
  },
  {
    path: "/tpo/view-dashboard",
    name: "View Dashboard",
    component: ViewDashboard,
  },
  {
    path: "/tpo/view-students",
    name: "View Students",
    component: ViewStudents,
  },
];

export default routes;
