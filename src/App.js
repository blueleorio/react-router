import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

import HomePage from "./pages/HomePage";
import { Layout } from "./layouts/Layout";
import BasicModal from "./components/BasicModal";
import JobDetailModal from "./components/JobDetailModal";

export default function App() {
  const location = useLocation();
  const auth = useAuth();
  const state = location.state;
  const navigate = useNavigate();
  // State to manage the modal

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
          <Route path="login" element={<HomePage />} />

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
          <Route
            path="/job/:id"
            element={
              <BasicModal
                onClose={() => {
                  navigate(-1);
                  console.log("app / basicmodal");
                }}
              />
            }
          ></Route>
        </Routes>
      )}
    </>
  );
}
