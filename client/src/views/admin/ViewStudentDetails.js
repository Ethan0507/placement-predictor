import React, { useState, useContext, useEffect } from "react";
import {
  CDataTable,
  CBadge,
  CButton,
  CCollapse,
  CCardBody,
} from "@coreui/react";
import { AuthContext } from "src/context/auth-context";

const ViewStudentDetails = () => {
  const auth = useContext(AuthContext);
  const [db_values, setDBValues] = useState([]);
  //   console.log(auth.token);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          },
        });

        let responseData;
        if (response.ok) {
          responseData = await response.json();
        }

        if (responseData) {
          setDBValues(responseData);
          console.log(responseData.students);
        }
      } catch (err) {}
    })();
  }, []);

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "username", _style: { width: "40%" } },
    { key: "password", _style: { width: "20%" } },
    { key: "role", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (placement_status) => {
    switch (placement_status) {
      case "placed":
        return "success";
      case "unplaced":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <CDataTable
      items={db_values.students}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(index);
                }}
              >
                {details.includes(index) ? "Hide" : "Show"}
              </CButton>
            </td>
          );
        },
        details: (item, index) => {
          return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h4>{item.cgpa}</h4>
                <p className="text-muted">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          );
        },
      }}
    />
  );
};

export default ViewStudentDetails;
