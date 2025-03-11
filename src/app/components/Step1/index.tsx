type Step1Props = {
  name: string;
  email: string;
  phone: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Step1 = ({ name, email, phone, handleChange }: Step1Props) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        data-step="step1"
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="mail"
        value={email}
        data-step="step1"
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="phone"
        value={phone}
        data-step="step1"
        onChange={handleChange}
      />
      <button type="button">Next</button>
    </div>
  );
};

export default Step1;
