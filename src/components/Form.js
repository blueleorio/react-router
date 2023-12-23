import React, { useState } from "react";
import { useForm } from "react-hook-form";
function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" autoComplete="off" {...register("username")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            {...register("email", { required: true })}
          />
          {errors.email && <p> Email is required</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
