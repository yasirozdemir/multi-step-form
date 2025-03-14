import { useFormData } from "@/providers";
import Description from "../Description";
import Title from "../Title";

const Summary = () => {
  const { formData } = useFormData();
  const {
    step2: { plan, period },
    step3: { online_service, larger_storage, customizable_profile },
    prices,
  } = formData;

  const pr = period === "monthly" ? "mo" : "yr";

  const totalPrice =
    prices[plan][period] +
    (online_service ? prices.online_service[period] : 0) +
    (larger_storage ? prices.larger_storage[period] : 0) +
    (customizable_profile ? prices.customizable_profile[period] : 0);

  return (
    <div>
      <Title>Finishing up</Title>
      <Description>
        Double-check everything looks OK before conforming.
      </Description>
      <ul className="mt-4 bg-[var(--magnolia)] p-4 pb-2 rounded-lg">
        <li className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
          <p className="capitalize">
            <span className="font-bold text-[var(--marine-blue)]">
              {plan}, ({period})
            </span>
            <button
              type="button"
              className="underline text-[var(--cool-gray)] block"
            >
              Change
            </button>
          </p>
          <p className="text-[var(--marine-blue)] font-semibold">
            ${prices[plan][period]}/{pr}
          </p>
        </li>
        {online_service && (
          <li className="flex justify-between mb-2">
            <p className="text-gray-400">Online Service</p>
            <p className="text-[var(--marine-blue)]">
              ${prices.online_service[period]}/{pr}
            </p>
          </li>
        )}
        {larger_storage && (
          <li className="flex justify-between mb-2">
            <p className="text-gray-400">Larger Storage</p>
            <p className="text-[var(--marine-blue)]">
              ${prices.larger_storage[period]}/{pr}
            </p>
          </li>
        )}
        {customizable_profile && (
          <li className="flex justify-between mb-2">
            <p className="text-gray-400">Customizable Profile</p>
            <p className="text-[var(--marine-blue)]">
              ${prices.customizable_profile[period]}/{pr}
            </p>
          </li>
        )}
      </ul>
      <div className="flex justify-between items-center px-4 mt-6">
        <p className="text-[var(--cool-gray)]">
          Total (per {period === "monthly" ? "month" : "year"})
        </p>
        <p className="text-[var(--purplish-blue)] font-semibold">
          ${totalPrice}/{pr}
        </p>
      </div>
    </div>
  );
};

export default Summary;
