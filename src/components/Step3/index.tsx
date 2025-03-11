import { useFormData } from "@/providers";

const Step3 = () => {
  const { formData, setFormData } = useFormData();
  const {
    step2: { period },
    step3,
  } = formData;

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { select } = e.currentTarget.dataset as {
      select: keyof typeof step3;
    };
    setFormData((prev) => ({
      ...prev,
      step3: {
        ...prev.step3,
        [select]: !prev.step3[select],
      },
    }));
  };

  const buttonClassList = "bg-red-200 text-red-800 font-bold py-2 px-4 rounded";
  const selectedClassList = " bg-red-800 text-white";
  return (
    <section>
      <div>
        <ul>
          <li>
            <button
              type="button"
              data-select="online_service"
              onClick={handleSelect}
              className={
                buttonClassList + (step3.online_service && selectedClassList)
              }
            >
              <p>Online Service</p>
              <small>Access to multiplayer games</small>
              {period === "monthly" ? (
                <p>
                  <span>+$1/mo</span>
                </p>
              ) : (
                <p>$+10/yr</p>
              )}
            </button>
          </li>

          <li>
            <button
              type="button"
              data-select="larger_storage"
              onClick={handleSelect}
              className={
                buttonClassList + (step3.larger_storage && selectedClassList)
              }
            >
              <p>Larger Storage</p>
              <small>Extra 1TB of cloud save</small>
              {period === "monthly" ? (
                <p>
                  <span>+$2/mo</span>
                </p>
              ) : (
                <p>$+20/yr</p>
              )}
            </button>
          </li>

          <li>
            <button
              type="button"
              data-select="customizable_profile"
              onClick={handleSelect}
              className={
                buttonClassList +
                (step3.customizable_profile && selectedClassList)
              }
            >
              <p>Customizable Profile</p>
              <small>Custom theme on your profile</small>
              {period === "monthly" ? (
                <p>
                  <span>+$2/mo</span>
                </p>
              ) : (
                <p>$+20/yr</p>
              )}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Step3;
