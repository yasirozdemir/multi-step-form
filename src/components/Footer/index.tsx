const Footer = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handlePrev = () => {
    setStep((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setStep((prev) => {
      if (prev === 4) return prev;
      return prev + 1;
    });
  };

  return (
    <footer className="h-18 flex items-center bg-white -mx-6 md:mx-0 px-6 mt-auto">
      {step > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          className="text-gray-400 font-bold"
        >
          Go Back
        </button>
      )}
      {step < 4 && (
        <button
          type="button"
          onClick={handleNext}
          className="bg-[var(--marine-blue)] text-white px-6 py-2 rounded-md ml-auto font-bold"
        >
          Next Step
        </button>
      )}
      {step === 4 && (
        <button
          type="submit"
          className="bg-[var(--purplish-blue)] text-white px-6 py-2 rounded-md ml-auto font-bold"
        >
          Confirm
        </button>
      )}
    </footer>
  );
};

export default Footer;
