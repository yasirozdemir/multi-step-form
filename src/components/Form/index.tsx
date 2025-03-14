"use client";

import { useState } from "react";
import { useFormData } from "@/providers";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Summary from "@/components/Summary";
import Image from "next/image";
import Finished from "../Finished";

const Form = () => {
  const { formData } = useFormData();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
    console.log(formData);
  };

  const handlePrev = () => {
    setStep((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setStep((prev) => {
      if (prev === 4) return prev;
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen flex flex-col px-6 xl:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <div className="md:hidden -mx-6">
          <Image
            src="/bg-sidebar-mobile.svg"
            alt="bg img"
            width={900}
            height={450}
            className="fixed top-0 -z-10 h-60 object-cover"
          />
          <ol className="flex justify-center py-12 color-white gap-4">
            {[1, 2, 3, 4].map((num) => (
              <li key={num}>
                <button
                  type="button"
                  className={`font-semibold border bg-[var(--light-gray)] border-white text-white rounded-full w-10 h-10 text-center transition-all duration-200 hover:bg-[var(--light-blue)] hover:text-[var(--alabster)] ${
                    num === step
                      ? "!bg-[var(--light-blue)] !text-[var(--alabster)]"
                      : ""
                  }`}
                  onClick={() => setStep(num)}
                >
                  {num}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col flex-grow">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Summary />}
          {step === 5 && <Finished />}
        </div>
        {step !== 5 && (
          <footer className="h-18 flex items-center bg-white -mx-6 px-6 mt-auto">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="text-gray-400 font-bold"
              >
                Go Back
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[var(--marine-blue)] text-white px-6 py-2 rounded-md ml-auto font-bold"
              >
                Next Step
              </button>
            )}
            {step === 4 && (
              <button
                type="submit"
                className="bg-[var(--marine-blue)] text-white px-6 py-2 rounded-md ml-auto font-bold"
              >
                Confirm
              </button>
            )}
          </footer>
        )}
      </form>
    </div>
  );
};

export default Form;
