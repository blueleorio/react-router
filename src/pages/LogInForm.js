import React, { useState } from "react";
import {
  Stack,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Alert,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { FormProvider } from "../components/form/FormProvider";
import { FTextField } from "../components/form/FTextField";
import { FCheckBox } from "../components/form/FCheckBox";

// import { FormProvider, FTextField, FCheckBox } from ".index.js";

function LogInForm() {
  const defaultValues = {
    email: "belukotu@shibainu.com",
    password: "ThanhDepTrai",
    remember: true,
  };
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    setError,
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

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FTextField name="email" label="email address" />

          <FTextField
            name="password"
            label="password"
            type={showPassword ? "text" : "password"}
            fullWidth
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

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 2 }}
          >
            <FCheckBox name="remember" label="remember my ass" />
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
      </FormProvider>
    </Box>
  );
}

export default LogInForm;

// type="email"
// {...register("email", {
//   required: "required",
//   pattern: {
//     value: /\S+@\S+\.\S+/,
//     message: "Entered value does not match email format",
//   },
// })}

// {...register("password", {
//   required: "required",
//   minLength: {
//     value: 5,
//     message: "min length is 5",
//   },
// })}
