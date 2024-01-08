import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ExpensesPage from "./pages/ExpensesPage";
import { InvoicesPage } from "./pages/InvoicesPage";
import TestPage from "./pages/TestPage";
import { Layout } from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { useAuth, RequireAuth } from "./auth/AuthContext";

export default function App() {
  const location = useLocation();
  const auth = useAuth(); // Ensure to call useAuth as a function
  const state = location.state;

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
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
      {/* {state && auth.user ? (
        <Routes>
          <Route path="/job/:id" element={<JobDetailModal />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<LoginModal />}></Route>
        </Routes>
      )} */}
    </>
  );
}
