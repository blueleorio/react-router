// BasicModal.js
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LogInForm from "./LogInForm";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ onClose }) {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle form submission
  const handleLogin = (username) => {
    // Call the signin method to update the authentication state

    auth.signin(username, () => {
      console.log("User has logged in:", auth.user);
      // Close the modal after successful login
      onClose();
      navigate(location.state?.backgroundLocation || "/");
    });
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Pass the handleLogin function to the LogInForm */}
          <LogInForm onLogin={handleLogin} />
        </Box>
      </Modal>
    </div>
  );
}
