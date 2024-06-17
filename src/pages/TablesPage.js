import React from "react";
import MaterialTable from "@material-table/core";

const TablesPage = () => {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth City",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ];

  const data = [
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ];

  return <MaterialTable title="Basic Table" columns={columns} data={data} />;
};

export default TablesPage;
