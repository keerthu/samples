import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddIncomeType from "../IncomeTypes/AddIncomeType";
import "../../scss/style.scss";
import { IncomeTypesProvider } from "../../Context/IncomeTypesContext";
import ListIncomeTypes from "../IncomeTypes/ListIncomeTypes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("../../layout/DefaultLayout"));

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};
export default App;
