import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
        />
      </div>
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          type="password"
        />
      </div>
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
