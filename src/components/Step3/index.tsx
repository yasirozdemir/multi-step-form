import { useFormData } from "@/providers";
import Title from "../Title";
import Description from "../Description";
import Image from "next/image";

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

  const buttonClassList =
    "w-full flex flex-row items-center p-4 rounded-lg border border-gray-300 transition-all duration-200";
  const selectedClassList =
    " !bg-[var(--magnolia)] !border-[var(--purplish-blue)]";
  return (
    <section>
      <Title>Pick add-ons</Title>
      <Description>Add-ons help enchance your gaming experience.</Description>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <button
            type="button"
            data-select="online_service"
            onClick={handleSelect}
            className={
              buttonClassList + (step3.online_service && selectedClassList)
            }
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-sm border border-gray-300 transition duration-200 ${
                step3.online_service ? "bg-[var(--purplish-blue)]" : ""
              }`}
            >
              <Image
                src="/icon-checkmark.svg"
                alt="checkmark icon"
                width={16}
                height={16}
                className={step3.online_service ? "block" : "hidden"}
              />
            </div>
            <p className="flex flex-col items-start grow ml-4">
              <span className="font-bold text-sm text-start">
                Online Service
              </span>
              <small className="text-gray-400 text-xs text-start">
                Access to multiplayer games
              </small>
            </p>
            <span className="text-sm text-[var(--purplish-blue)]">
              {period === "monthly" ? <>+$1/mo</> : <>+$10/yr</>}
            </span>
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
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-sm border border-gray-300 transition duration-200 ${
                step3.larger_storage ? "bg-[var(--purplish-blue)]" : ""
              }`}
            >
              <Image
                src="/icon-checkmark.svg"
                alt="checkmark icon"
                width={16}
                height={16}
                className={step3.larger_storage ? "block" : "hidden"}
              />
            </div>
            <p className="flex flex-col items-start grow ml-4">
              <span className="font-bold text-sm text-start">
                Larger Storage
              </span>
              <small className="text-gray-400 text-xs text-start">
                Extra 1TB of cloud save
              </small>
            </p>
            <span className="text-sm text-[var(--purplish-blue)]">
              {period === "monthly" ? <>+$2/mo</> : <>+$20/yr</>}
            </span>
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
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-sm border border-gray-300 transition duration-200 ${
                step3.customizable_profile ? "bg-[var(--purplish-blue)]" : ""
              }`}
            >
              <Image
                src="/icon-checkmark.svg"
                alt="checkmark icon"
                width={16}
                height={16}
                className={step3.customizable_profile ? "block" : "hidden"}
              />
            </div>
            <p className="flex flex-col items-start grow ml-4">
              <span className="font-bold text-sm text-start">
                Customizable Profile
              </span>
              <small className="text-gray-400 text-xs text-start">
                Custom theme on your profile
              </small>
            </p>
            <span className="text-sm text-[var(--purplish-blue)]">
              {period === "monthly" ? <>+$2/mo</> : <>+$20/yr</>}
            </span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Step3;
