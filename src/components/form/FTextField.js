import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const FTextField = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
};
