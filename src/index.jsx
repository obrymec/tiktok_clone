// Dependencies.
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import App from "./views/app.jsx";
import React from "react";

// Creates a root.
ReactDOM.createRoot (document.getElementById ("root")).render (<React.StrictMode><App/></React.StrictMode>);
// Reports web vitals.
reportWebVitals ();
