"use client";

import { FormProvider, IFormDataKey, useFormData } from "@/providers";
import Step1 from "./components/Step1";

function FormComponent() {
  const { formData, setFormData } = useFormData();
  const { step1 } = formData;
  const { name, email, phone } = step1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, dataset } = e.target;
    const { step } = dataset as { step: IFormDataKey };

    if (step)
      setFormData((prev) => ({
        ...prev,
        [step]: {
          ...prev[step],
          [name]: value,
        },
      }));
    else throw new Error("Step not found");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <Step1
          name={name}
          email={email}
          phone={phone}
          handleChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <FormProvider>
      <FormComponent />
    </FormProvider>
  );
}
