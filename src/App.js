import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth, RequireAuth } from "./auth/AuthContext";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
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
