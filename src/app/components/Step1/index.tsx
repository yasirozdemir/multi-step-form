type Step1Props = {
  name: string;
  email: string;
  phone: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Step1 = ({ name, email, phone, handleChange }: Step1Props) => {
  return (
    <section>
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
      <button type="button">Next</button>
    </section>
  );
};

export default Step1;
