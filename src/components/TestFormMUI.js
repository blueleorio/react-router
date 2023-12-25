import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function TestFormMUI() {
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

  const onSubmit = (values) => console.log(values);

  return (
    <>
      <h1>Log IN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
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
            type="password"
            {...register("password", {
              required: "required",
              minLength: {
                value: 5,
                message: "min length is 5",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default TestFormMUI;
