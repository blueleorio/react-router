import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ExpensesPage from "./pages/ExpensesPage";
import { InvoicesPage } from "./pages/InvoicesPage";
import TestPage from "./pages/TestPage";
import { Layout } from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { useAuth, RequireAuth } from "./auth/AuthContext";

export default function App() {
  const location = useLocation();
  const auth = useAuth;
  const state = location.state;
  return (
    <Routes
      location={
        location.state?.backgroundLocation
          ? location.state.backgroundLocation
          : location
      }
    >
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="test" element={<TestPage />} />
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
