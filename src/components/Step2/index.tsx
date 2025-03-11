import { useFormData } from "@/providers";

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

  const listClassList = "flex flex-row space-x-4";

  const buttonClassList = "bg-red-200 text-red-800 font-bold py-2 px-4 rounded";
  const selectedClassList = " bg-red-800 text-white";
  return (
    <section>
      <div>
        <ul className={listClassList}>
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
              <p>Arcade</p>
              {period === "monthly" ? (
                <p>$9/mo</p>
              ) : (
                <p className="flex flex-col">
                  <span>$90/yr</span>
                  <small>2 months free</small>
                </p>
              )}
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
              <p>Advanced</p>
              {period === "monthly" ? (
                <p>$12/mo</p>
              ) : (
                <p className="flex flex-col">
                  <span>$120/yr</span>
                  <small>2 months free</small>
                </p>
              )}
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
              <p>Pro</p>
              {period === "monthly" ? (
                <p>$15/mo</p>
              ) : (
                <p className="flex flex-col">
                  <span>$150/yr</span>
                  <small>2 months free</small>
                </p>
              )}
            </button>
          </li>
        </ul>

        <ul className={listClassList}>
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
