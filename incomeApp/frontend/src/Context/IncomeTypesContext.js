import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const IncomeTypesContext = createContext();

const IncomeTypesProvider = ({ children }) => {
  const [incomeTypes, setIncomeTypes] = useState([]);

  const fetchIncomeTypes = async () => {
    await axios
      .get("http://localhost:5000/incomeTypes")
      .then((res) => {
        setIncomeTypes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addIncomeTypes = async (incomeType) => {
    await axios
      .post("http://localhost:5000/incomeTypes", incomeType)
      .then((res) => {
        fetchIncomeTypes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchIncomeTypes();
  }, [setIncomeTypes]);

  useEffect(() => {
    fetchIncomeTypes();
  }, []);

  return (
    <IncomeTypesContext.Provider
      value={{
        incomeTypes,
        addIncomeTypes,
      }}
    >
      {children}
    </IncomeTypesContext.Provider>
  );
};

export { IncomeTypesContext, IncomeTypesProvider };
