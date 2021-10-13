import React from "react";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import { IncomeTypesProvider } from "../Context/IncomeTypesContext";
const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <IncomeTypesProvider>
            <AppContent />
          </IncomeTypesProvider>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
