import { useFormData } from "@/providers";
import Title from "../Title";
import Description from "../Description";
import Image from "next/image";

const Step2 = () => {
  const { formData, setFormData } = useFormData();
  const {
    step2: { plan, period },
  } = formData;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { option } = e.currentTarget.dataset as {
      option: string;
    };
    setFormData((prev) => ({
      ...prev,
      step2: {
        ...prev.step2,
        plan: option as "arcade" | "advanced" | "pro",
      },
    }));
  };

  const changePeriod = () => {
    setFormData((prev) => ({
      ...prev,
      step2: {
        ...prev.step2,
        period: prev.step2.period === "monthly" ? "yearly" : "monthly",
      },
    }));
  };

  const buttonClassList =
    "w-full flex flex-row items-center p-4 rounded-lg border border-gray-300 transition-all duration-200";
  const selectedClassList =
    " !bg-[var(--magnolia)] !border-[var(--purplish-blue)]";
  return (
    <div>
      <Title>Select your plan</Title>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>
      <div>
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <button
              type="button"
              data-option="arcade"
              onClick={handleClick}
              className={
                buttonClassList + (plan === "arcade" && selectedClassList)
              }
            >
              <Image
                src="/icon-arcade.svg"
                alt="arcade icon"
                width={48}
                height={48}
              />
              <div className="flex flex-col items-start grow ml-4 text-[var(--marine-blue)]">
                <p className="font-bold">Arcade</p>
                {period === "monthly" ? (
                  <span className="text-gray-400">$9/mo</span>
                ) : (
                  <>
                    <span className="text-gray-400">$90/yr</span>
                    <small>2 months free</small>
                  </>
                )}
              </div>
            </button>
          </li>

          <li>
            <button
              type="button"
              data-option="advanced"
              onClick={handleClick}
              className={
                buttonClassList + (plan === "advanced" && selectedClassList)
              }
            >
              <Image
                src="/icon-advanced.svg"
                alt="advanced icon"
                width={48}
                height={48}
              />
              <div className="flex flex-col items-start grow ml-4 text-[var(--marine-blue)]">
                <p className="font-bold">Advanced</p>
                {period === "monthly" ? (
                  <span className="text-gray-400">$12/mo</span>
                ) : (
                  <>
                    <span className="text-gray-400">$120/yr</span>
                    <small>2 months free</small>
                  </>
                )}
              </div>
            </button>
          </li>

          <li>
            <button
              type="button"
              data-option="pro"
              onClick={handleClick}
              className={
                buttonClassList + (plan === "pro" && selectedClassList)
              }
            >
              <Image
                src="/icon-pro.svg"
                alt="pro icon"
                width={48}
                height={48}
              />
              <div className="flex flex-col items-start grow ml-4 text-[var(--marine-blue)]">
                <p className="font-bold">Pro</p>
                {period === "monthly" ? (
                  <span className="text-gray-400">$15/mo</span>
                ) : (
                  <>
                    <span className="text-gray-400">$150/yr</span>
                    <small>2 months free</small>
                  </>
                )}
              </div>
            </button>
          </li>
        </ul>

        <button
          type="button"
          className="w-full flex flex-row gap-6 items-center justify-center py-4 mt-4 rounded-lg bg-[var(--magnolia)] font-medium"
          onClick={changePeriod}
        >
          <p
            className={`${
              period === "monthly"
                ? "text-[var(--marine-blue)]"
                : "text-[var(--cool-gray)]"
            }`}
          >
            Monthly
          </p>
          <div className="w-10 h-6 bg-[var(--marine-blue)] rounded-full flex items-center px-1">
            <div
              className={`w-4 h-4 rounded-full bg-red-50 ${
                period === "monthly" ? "" : "ml-auto"
              }`}
            />
          </div>
          <p
            className={`${
              period === "yearly"
                ? "text-[var(--marine-blue)]"
                : "text-[var(--cool-gray)]"
            }`}
          >
            Yearly
          </p>
        </button>
      </div>
    </div>
  );
};

export default Step2;
