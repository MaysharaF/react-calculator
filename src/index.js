import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./main/Calculator";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <h1>Calculator</h1>
    <Calculator />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
