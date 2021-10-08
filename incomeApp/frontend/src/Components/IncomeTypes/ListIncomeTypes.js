import DataTable from "react-data-table-component";
import React, { useContext } from "react";
import { IncomeTypesContext } from "../../Context/IncomeTypesContext";

const ListIncomeTypes = () => {
  const { incomeTypes } = useContext(IncomeTypesContext);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "Symbol",
      selector: row => row.symbol,
      sortable: true,
      left: true
    },
  ];

  return (
    <div>
      <h4>Available income types</h4>
      <DataTable
        columns={columns}
        data={incomeTypes}
        highlightOnHover="true"
        pagination="true"
      ></DataTable>
    </div>
  );
};

export default ListIncomeTypes;
