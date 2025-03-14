import { useFormData } from "@/providers";
import Description from "../Description";
import Title from "../Title";

const Summary = () => {
  const { formData } = useFormData();
  const {
    step2: { plan, period },
    step3: { online_service, larger_storage, customizable_profile },
  } = formData;

  const prices = {
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
  };

  const pr = period === "monthly" ? "mo" : "yr";

  const totalPrice =
    prices[plan][period] +
    (online_service ? prices.online_service[period] : 0) +
    (larger_storage ? prices.larger_storage[period] : 0) +
    (customizable_profile ? prices.customizable_profile[period] : 0);

  return (
    <section>
      <Title>Finishing up</Title>
      <Description>
        Double-check everything looks OK before conforming.
      </Description>
      <ul className="mt-4">
        <li>
          <p className="capitalize">
            <span>
              {plan}, ({period})
            </span>
            <button type="button" className="underline">
              Change
            </button>
          </p>
          <p>
            ${prices[plan][period]}/{pr}
          </p>
        </li>
        {online_service && (
          <li>
            <p>Online Service</p>
            <p>
              +${prices.online_service[period]}/{pr}
            </p>
          </li>
        )}
        {larger_storage && (
          <li>
            <p>Larger Storage</p>
            <p>
              +${prices.larger_storage[period]}/{pr}
            </p>
          </li>
        )}
        {customizable_profile && (
          <li>
            <p>Customizable Profile</p>
            <p>
              +${prices.customizable_profile[period]}/{pr}
            </p>
          </li>
        )}
      </ul>
      <div>
        <p>Total (per month)</p>
        <p>
          ${totalPrice}/{pr}
        </p>
      </div>
    </section>
  );
};

export default Summary;
