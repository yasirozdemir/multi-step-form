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

  return (
    <section>
      <h2>Step 1</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="mail"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default Step1;
