export type IFormData = {
  step1: IStep1;
  step2: IStep2;
  step3: IStep3;
  prices: IPrices;
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

export type IPriceDetails = {
  monthly: number;
  yearly: number;
};

export type IPrices = {
  arcade: IPriceDetails;
  advanced: IPriceDetails;
  pro: IPriceDetails;
  online_service: IPriceDetails;
  larger_storage: IPriceDetails;
  customizable_profile: IPriceDetails;
};
