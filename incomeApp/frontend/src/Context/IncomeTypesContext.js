import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import config from "../config.json";

const IncomeTypesContext = createContext();

const IncomeTypesProvider = ({ children }) => {
  const [incomeTypes, setIncomeTypes] = useState([]);

  const fetchIncomeTypes = async () => {
    console.log("CALLING GET ALL METHOD");
    await axios

      .get(`${config.apiUrl}/incomeTypes`)
      .then((res) => {
        setIncomeTypes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchIncomeType = (id) => {
    console.log("CALLING GET METHOD");
    return axios.get(`${config.apiUrl}/incomeTypes/${id}`);
    // .then((res) => {
    //   console.log(res);
    //   return res.data;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const addIncomeTypes = async (incomeType) => {
    console.log(incomeType);
    await axios
      .post(`${config.apiUrl}/incomeTypes`, incomeType)
      .then((res) => {
        fetchIncomeTypes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editIncomeType = async ({id, name, symbol}) => {
    await axios
      .put(`${config.apiUrl}/incomeTypes/${id}`, {name, symbol})
      .then((res) => {
        fetchIncomeTypes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteIncomeType = async (id) => {
    await axios.delete(`${config.apiUrl}/incomeTypes/${id}`).then(
      setTimeout(() => {
        fetchIncomeTypes();
      }, 100)
    );
  };

  useEffect(() => {
    fetchIncomeTypes();
  }, [setIncomeTypes]);

  return (
    <IncomeTypesContext.Provider
      value={{
        incomeTypes,
        addIncomeTypes,
        editIncomeType,
        fetchIncomeTypes,
        deleteIncomeType,
      }}
    >
      {children}
    </IncomeTypesContext.Provider>
  );
};

export { IncomeTypesContext, IncomeTypesProvider };
