import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/Appbar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const Layout = () => {
  return (
    // useEffect(() => {
    //   first

    //   return () => {
    //     second
    //   }
    // }, [third])

    <Stack
      sx={{
        minHeight: "100vh",
        // backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <SearchAppBar title="Job Searching" />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
};
