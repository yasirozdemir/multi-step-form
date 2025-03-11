"use client";

import { FormProvider, useFormData } from "@/providers";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

function FormComponent() {
  const { formData, setFormData } = useFormData();
  const { step1, step2 } = formData;
  const { name, email, phone } = step1;
  const { plan, period } = step2;

  // for step 1 inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        [name]: value,
      },
    }));
  };

  // for step 2 buttons
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { type, option } = e.currentTarget.dataset as {
      type: string;
      option: string;
    };
    setFormData((prev) => ({
      ...prev,
      step2: {
        ...prev.step2,
        [type]: option,
      },
    }));
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
        <Step2 plan={plan} period={period} handleClick={handleClick} />
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
