import { FormProvider as RHFormProvider } from "react-hook-form";

export const FormProvider = ({ children, onSubmit, methods }) => (
  <RHFormProvider {...methods}>
    <form onSubmit={onSubmit}>{children}</form>
  </RHFormProvider>
);
