"use client";

import { IFormData } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

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
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
  },
  prices: {
    arcade: {
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
    },
    pro: {
      monthly: 15,
      yearly: 150,
    },
    online_service: {
      monthly: 1,
      yearly: 10,
    },
    larger_storage: {
      monthly: 2,
      yearly: 20,
    },
    customizable_profile: {
      monthly: 2,
      yearly: 20,
    },
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
