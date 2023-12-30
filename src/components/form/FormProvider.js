import { FormProvider as RHFormProvider } from "react-hook-form";

export const FormProvider = () => (
  <RHFormProvider {...methods}>
    <form onSubmit={onSubmit}>{children}</form>
  </RHFormProvider>
);
