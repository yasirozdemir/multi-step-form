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

  const buttonClassList =
    "w-full flex flex-row items-center p-4 rounded-lg border border-gray-300 transition-all duration-200";
  const selectedClassList =
    " !bg-[var(--magnolia)] !border-[var(--purplish-blue)]";
  return (
    <section>
      <Title>Select your plan</Title>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>
      <div>
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <button
              type="button"
              data-type="plan"
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
              data-type="plan"
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
              data-type="plan"
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

        <ul className="mt-4">
          <li>
            <button
              type="button"
              data-type="period"
              data-option="monthly"
              onClick={handleClick}
              className={
                buttonClassList + (period === "monthly" && selectedClassList)
              }
            >
              Monthly
            </button>
          </li>

          <li>
            <button
              type="button"
              data-type="period"
              data-option="yearly"
              onClick={handleClick}
              className={
                buttonClassList + (period === "yearly" && selectedClassList)
              }
            >
              Yearly
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Step2;
