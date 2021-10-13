import React, { useContext } from "react";
import { IncomeTypesContext } from "../../Context/IncomeTypesContext";
import UseForm from "../../Hooks/UseForm";
import { useHistory } from "react-router-dom";

const EditIncomeType = (props) => {
  const incomeTypetoUpdate = props.location.state || {};
  const history = useHistory();
  const { formData: incomeType, handleField: setField } = UseForm({
    initialFormData: incomeTypetoUpdate,
  });
  const { editIncomeType } = useContext(IncomeTypesContext);

  return (
    <div className="container p-3">
      <form>
        <h4 className="customText mb-4">Edit income type</h4>
        <div className="form-input-group mt-3">
          <label>Income type name</label>
          <input
            className="form-control"
            placeholder="Enter income type name"
            type="text"
            name="name"
            value={incomeType.name}
            onChange={setField}
          />
        </div>
        <div className="bill-form-control form-input-group mt-3">
          <label>Symbol</label>
          <input
            className="form-control"
            placeholder="Enter income type symbol"
            type="text"
            value={incomeType.symbol}
            name="symbol"
            onChange={setField}
          />
        </div>
        <button
          className="btn float-right mt-4 customButton"
          onClick={async (e) => {
            e.preventDefault();
            await editIncomeType(incomeType).then(
              history.push("/incometypes/list")
            );
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditIncomeType;
