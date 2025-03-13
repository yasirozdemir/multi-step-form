export type IFormData = {
  step1: IStep1;
  step2: IStep2;
  step3: IStep3;
};

export type IStep1 = {
  name: string;
  email: string;
  phone: string;
};

export type IStep2 = {
  plan: "arcade" | "advanced" | "pro";
  period: "monthly" | "yearly";
};

export type IStep3 = {
  online_service: boolean;
  larger_storage: boolean;
  customizable_profile: boolean;
};
