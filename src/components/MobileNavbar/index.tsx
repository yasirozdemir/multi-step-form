import Image from "next/image";

const MobileNavbar = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="md:hidden -mx-6">
      <Image
        src="/bg-sidebar-mobile.svg"
        alt="bg img"
        width={900}
        height={450}
        className="fixed top-0 -z-10 h-60 object-cover"
      />
      <ol className="flex justify-center py-12 color-white gap-4">
        {[1, 2, 3, 4].map((num) => (
          <li key={num}>
            <button
              type="button"
              className={`font-semibold border bg-[var(--light-gray)] border-white text-white rounded-full w-10 h-10 text-center transition-all duration-200 hover:bg-[var(--light-blue)] hover:text-[var(--alabster)] ${
                num === step
                  ? "!bg-[var(--light-blue)] !text-[var(--alabster)]"
                  : ""
              }`}
              onClick={() => setStep(num)}
            >
              {num}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MobileNavbar;
