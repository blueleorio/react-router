import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import BasicModal from "./BasicModal";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 24,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ title }) {
  // State to manage the modal
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate = useNavigate();
  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
    navigate(`/login`);
  };

  // Access user information from AuthContext
  const auth = useAuth();

  // Log user and modal state
  // I hae no idea how and why React render stuff , aysnc, awit, wateva dafuk

  console.log("Appbar => Auth.User:", auth.user);
  console.log("Is Modal Open:", isModalOpen);
  console.log("SOMEHOW, IF I REMOVE THIS, EVERYTHING BREAKS");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {auth.user ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome, {auth.user}!
              </Typography>
              <Button
                onClick={() => {
                  auth.signout(() => setIsModalOpen(false));
                }}
                color="inherit"
                variant="contained"
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              onClick={handleOpenModal} // Set up onClick to open the modal
              color="inherit"
              variant="contained"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {/* TODO: Need to revisit this logic later, have no idea why chatGPT suggest this */}
      {isModalOpen && (
        <BasicModal
          onClose={() => {
            console.log("App bar - basicmodal");
            setIsModalOpen(false);
            navigate(``);
          }}
        />
      )}
    </Box>
  );
}
