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
    "flex flex-row items-center p-4 rounded-lg border-2 border-gray-100";
  const selectedClassList =
    " !bg-[var(--light-gray)] !border-[var(--marine-blue)]";
  return (
    <section>
      <Title>Select your plan</Title>
      <Description>
        You have the option of monthly or yearly billing.
      </Description>
      <div>
        <ul className="">
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
                width={64}
                height={64}
              />
              <div>
                <p>Arcade</p>
                {period === "monthly" ? (
                  <p>$9/mo</p>
                ) : (
                  <p className="flex flex-col">
                    <span>$90/yr</span>
                    <small>2 months free</small>
                  </p>
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
                width={64}
                height={64}
              />
              <div>
                <p>Advanced</p>
                {period === "monthly" ? (
                  <p>$12/mo</p>
                ) : (
                  <p className="flex flex-col">
                    <span>$120/yr</span>
                    <small>2 months free</small>
                  </p>
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
                width={64}
                height={64}
              />
              <div>
                <p>Pro</p>
                {period === "monthly" ? (
                  <p>$15/mo</p>
                ) : (
                  <p className="flex flex-col">
                    <span>$150/yr</span>
                    <small>2 months free</small>
                  </p>
                )}
              </div>
            </button>
          </li>
        </ul>

        <ul className="">
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
