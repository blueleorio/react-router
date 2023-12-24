import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        Email:{" "}
        <input
          type="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
      </div>
      {errors.email && errors.email.message}

      <div>
        Username:{" "}
        <input
          {...register("username", {
            validate: (value) => value !== "admin" || "Nice try!",
          })}
        />
      </div>
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
