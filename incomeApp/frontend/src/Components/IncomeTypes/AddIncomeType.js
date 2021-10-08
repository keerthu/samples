import React, { useContext, useState } from "react";
import { IncomeTypesContext } from "../../Context/IncomeTypesContext";
const AddIncomeType = () => {
  const [incomeTypeName, setIncometypeName] = useState("");
  const [symbol, setSymbol] = useState("");

  const { addIncomeTypes } = useContext(IncomeTypesContext);

  const clearForm = () => {
    setIncometypeName("");
    setSymbol("");
  };

  return (
    <div className="add-income-type-container">
      <form>
        <h4>Add new income type</h4>
        <div className="form-input-group mt-2">
          <label>Income type name</label>
          <input
            className="form-control"
            placeholder="Enter income type name"
            type="text"
            name="incomeTypeName"
            value={incomeTypeName}
            onChange={(e) => setIncometypeName(e.target.value)}
          />
        </div>
        <div className="bill-form-control form-input-group mt-2">
          <label>Symbol</label>
          <input
            className="form-control"
            placeholder="Enter income type symbol"
            type="text"
            name="symbol"
            value={ symbol }
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <button
          className="btn btn-danger float-right mt-3"
          onClick={ async (e) => {
            e.preventDefault();
            await addIncomeTypes({ name: incomeTypeName, symbol });
            clearForm();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddIncomeType;
