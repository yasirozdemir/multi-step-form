import { useFormData } from "@/providers";

const Step1 = () => {
  const { formData, setFormData } = useFormData();
  const {
    step1: { name, email, phone },
  } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      step1: {
        ...prev.step1,
        [name]: value,
      },
    }));
  };

  const labelClassList = "text-[var(--marine-blue)] text-sm font-semibold mt-4";
  const inputClassList =
    "border border-gray-300 px-3 py-2 rounded-md text-ellipsis placeholder:text-gray-400";

  return (
    <section>
      <h1 className="text-[var(--marine-blue)] font-bold text-2xl">
        Personal info
      </h1>
      <p className="text-lg text-gray-400 mt-2">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col">
        <label htmlFor="name" className={labelClassList}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
          className={inputClassList}
        />
        <label htmlFor="email" className={labelClassList}>
          Email Adress
        </label>
        <input
          id="email"
          name="email"
          type="mail"
          value={email}
          onChange={handleChange}
          placeholder="e.g. e.g. stephenking@lorem.com"
          className={inputClassList}
        />
        <label htmlFor="phone" className={labelClassList}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          value={phone}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
          className={inputClassList}
        />
      </div>
    </section>
  );
};

export default Step1;
