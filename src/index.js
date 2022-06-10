import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Router:Tanımlanan yerlere sayfaların render edileceğin i bildirir
//Route: yeni sayfa tanımı oluşturmak
//path özelliği : taraycıdan erişilecek olan url
//Route componenti: ilgili path özelliği geldiğinde hangi componenti render edeceğin ibelirtir

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
