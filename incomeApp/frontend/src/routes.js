import React from "react";
import AddIncomeType from "./Components/IncomeTypes/AddIncomeType";
import EditIncomeType from "./Components/IncomeTypes/EditIncomeType";
import ListIncomeTypes from "./Components/IncomeTypes/ListIncomeTypes";

const Dashboard = React.lazy(() =>
  import("./views/components/dashboard/Dashboard")
);

// IncomTypes
const IncomeTypes = React.lazy(() =>
  import("./views/components/incomeTypes/IncomeTypes")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/incometypes/",
    exact: true,
    name: "IncomeTypes",
    component: ListIncomeTypes,
  },
  { path: "/incometypes/add", name: "IncomeTypes", component: AddIncomeType },
  {
    path: "/incometypes/list",
    name: "IncomeTypes",
    component: ListIncomeTypes,
  },
  { path: "/incometypes/edit", name: "IncomeTypes", component: EditIncomeType },
];

export default routes;
