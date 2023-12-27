import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import { useForm, Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LogInForm() {
  const defaultValues = {
    email: "belukotu@shibainu.com",
    password: "ThanhDepTrai",
    remember: true,
  };
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    register,
    reset,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);
  const handleMouseDownPassword = (e) => e.preventDefault();

  const onSubmit = (values) => {
    console.log(values);
    setError("afterSubmit", { message: "Server response Error" });
  };

  return (
    <Box>
      <Typography variant="h3" textAlign="center" mb={3}>
        Log In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Email Address"
                // type="email"
                // {...register("email", {
                //   required: "required",
                //   pattern: {
                //     value: /\S+@\S+\.\S+/,
                //     message: "Entered value does not match email format",
                //   },
                // })}
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!error}
                helperText={error?.message}
                {...field}
                // {...register("password", {
                //   required: "required",
                //   minLength: {
                //     value: 5,
                //     message: "min length is 5",
                //   },
                // })}
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
              />
            )}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FormControlLabel
              label="remember my ass"
              control={
                <Controller
                  name="remember"
                  control={control}
                  render={({ field }) => (
                    <Checkbox {...field} checked={field.value} />
                  )}
                />
              }
            />{" "}
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            loading={isSubmitting}
          >
            Log In
          </LoadingButton>
        </Stack>
      </form>
    </Box>
  );
}

export default LogInForm;
