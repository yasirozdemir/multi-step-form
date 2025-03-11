"use client";

import { useState } from "react";
import { useFormData } from "@/providers";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Summary from "@/components/Summary";

const Form = () => {
  const { formData } = useFormData();
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Summary />}
        <div>
          {currentStep > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {currentStep < 4 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 4 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default Form;
