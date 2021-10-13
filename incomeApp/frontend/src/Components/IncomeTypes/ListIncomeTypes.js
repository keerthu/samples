import React, { useContext, useEffect, useState } from "react";
import { IncomeTypesContext } from "../../Context/IncomeTypesContext";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import swal from "sweetalert";
import {useHistory } from "react-router-dom";
import EditIncomeType from "./EditIncomeType";

const ListIncomeTypes = () => {
  const history = useHistory();
  const { incomeTypes, editIncomeType, deleteIncomeType } =
    useContext(IncomeTypesContext);

    const [name, setName] = useState('');

  const handleEdit = (incomeType) => {
    history.push({
      pathname: '/incometypes/edit',
      state: incomeType
    });
  };

  const handleAdd = () => {
    history.push('/incomeTypes/add');
  }

  useEffect(() => {
    const columns = [
      {
        data: "name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        data: "symbol",
        selector: (row) => row.symbol,
        sortable: true,
        left: true,
      },
      {
        data: null,
        defaultContent:
          '<i id="edit-btn" class="btn fa fa-pencil customText"/><i id="delete-btn" class="btn fa fa-trash text-danger"/>',
        className: "row-edit dt-center",
        orderable: false,
      }
    ];

    const table = $("#income_types_data").DataTable({
      processing: true,
      data: incomeTypes,
      columns: columns,
    });

    $("#income_types_data tbody").on("click", "#edit-btn", function () {
      var data = table.row($(this).parents("tr")).data();
      if (data) {
        handleEdit(data);
      }
    });

    $("#income_types_data tbody #delete-btn").on("click", function () {
      const data = table.row($(this).parents("tr")).data();
      if (data) {
        swal({
          title: "Are you sure you want to delete this?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            deleteIncomeType(data.id);
            swal("Income type has been deleted!", {
              icon: "success",
            });
            history.push("/incometypes/list");
          } 
        });
      }
    });
    return () => {
      $("#income_types_data").DataTable().clear();
      $("#income_types_data").DataTable().destroy();
    };
  }, [incomeTypes]);
  return (
    <div className="container p-3">
      <div>
        <div className="table-responsive">
          <div className="float-right mb-5">
            <button className="btn customButton" onClick={handleAdd}>Add new income type</button>
          </div>

          <div>
            <table
              id="income_types_data"
              className="display mt-5 mb-5 table table-sm table-hover"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListIncomeTypes;
