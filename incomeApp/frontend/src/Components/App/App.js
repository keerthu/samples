import React from "react";
import AddIncomeType from "../IncomeTypes/AddIncomeType";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListIncomeTypes from "../IncomeTypes/ListIncomeTypes";
import { IncomeTypesProvider } from "../../Context/IncomeTypesContext";

const App = () => {
  return (
    <div className="app-container">
      <IncomeTypesProvider>
        <AddIncomeType />
        <hr />
        <ListIncomeTypes />
      </IncomeTypesProvider>
    </div>
  );
};

export default App;
