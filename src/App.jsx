import React from "react";
import ReactDOM from "react-dom";
import Login from "./views/login";
import "./index.scss";
import AdminView from "./views/admin.jsx";

const App = () => (
  <div className="mt-10 mx-auto w-full">
    <AdminView />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
