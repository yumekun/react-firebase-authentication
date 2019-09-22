import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
