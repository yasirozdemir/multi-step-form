"use client";

import { useFormData } from "@/providers";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

const Form = () => {
  const { formData } = useFormData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <Step1 />
        <Step2 />
        <Step3 />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
