import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpensesPage from "./pages/ExpensesPage";
import InvoicesPage from "./pages/InvoicesPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p> There is nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
