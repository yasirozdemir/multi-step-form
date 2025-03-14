"use client";

import { useState } from "react";
import { useFormData } from "@/providers";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Summary from "@/components/Summary";
import Finished from "../Finished";
import Footer from "../Footer";
import DesktopSidebar from "../DesktopSidebar";
import MobileNavbar from "../MobileNavbar";

const Form = () => {
  const { formData } = useFormData();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col px-6 xl:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        <MobileNavbar step={step} setStep={setStep} />
        <div className="flex flex-col flex-grow justify-center">
          <section className="p-6 rounded-lg md:w-[1024px] mx-auto bg-white shadow-lg md:flex md:flex-row">
            <DesktopSidebar step={step} setStep={setStep} />
            <div className="md:flex md:w-[500px] md:mx-auto">
              <div className="md:w-[500px] md:h-full md:flex md:flex-col md:mx-auto md:justify-center md:[&>div]:mt-auto">
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                {step === 4 && <Summary />}
                {step === 5 && <Finished />}
                {step !== 5 && (
                  <div className="hidden md:block bg-red-500 -mx-6 mt-auto">
                    <Footer step={step} setStep={setStep} />
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
        {step !== 5 && (
          <div className="md:hidden">
            <Footer step={step} setStep={setStep} />
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
