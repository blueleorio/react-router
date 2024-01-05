import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ExpensesPage from "./pages/ExpensesPage";
import { InvoicesPage } from "./pages/InvoicesPage";
import TestPage from "./pages/TestPage";
import { Layout } from "./layouts/Layout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p> There is nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
