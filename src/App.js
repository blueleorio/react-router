import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth, RequireAuth } from "./auth/AuthContext";

import ExpensesPage from "./pages/ExpensesPage";
import { InvoicesPage } from "./pages/InvoicesPage";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/HomePage";
import { Layout } from "./layouts/Layout";
import BasicModal from "./components/BasicModal"; // Import your login modal component
import JobDetailModal from "./components/JobDetailModal";

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
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<HomePage />} />
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
      {state && auth.user ? (
        <Routes>
          <Route path="/job/:id" element={<JobDetailModal />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/job/:id" element={<BasicModal />}></Route>
        </Routes>
      )}
    </>
  );
}
