"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type IFormData = {
  step1: {
    name: string;
    email: string;
    phone: string;
  };
  step2: {
    plan: string;
    period: string;
  };
  step3: {
    add_on1: boolean;
    add_on2: boolean;
    add_on3: boolean;
  };
};

const initialFormData: IFormData = {
  step1: {
    name: "",
    email: "",
    phone: "",
  },
  step2: {
    plan: "arcade",
    period: "monthly",
  },
  step3: {
    add_on1: false,
    add_on2: false,
    add_on3: false,
  },
};

const FormContext = createContext<{
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
} | null>(null);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

const useFormData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
};

export { FormProvider, useFormData };
