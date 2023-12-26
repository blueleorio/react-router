import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LogInPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "belukotu@shibainu.com",
      password: "ThanhDepTrai",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);
  const handleMouseDownPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const onSubmit = (values) => console.log(values);

  return (
    <Box>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="email"
            type="email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "required",
              minLength: {
                value: 5,
                message: "min length is 5",
              },
            })}
            // TODO: Add toggle hide/show password here from MUI
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default LogInPage;
