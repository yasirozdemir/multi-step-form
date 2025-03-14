import Image from "next/image";

const DesktopSidebar = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="hidden md:block md:relative">
      <Image
        src="/bg-sidebar-desktop.svg"
        alt="background img"
        width={300}
        height={600}
      />
      <ol className="md:absolute md:left-0 md:top-0 md:right-0 md:bottom-0 md:flex md:flex-col md:gap-6 md:p-6">
        {[1, 2, 3, 4].map((num) => (
          <li key={num}>
            <button
              type="button"
              className="flex gap-6 items-center hover:[&>div:first-child]:bg-[var(--light-blue)] hover:[&>div:first-child]:text-[var(--alabster)] "
              onClick={() => setStep(num)}
            >
              <div
                className={`transition-all duration-200 font-semibold border bg-[var(--light-gray)] border-white text-white rounded-full w-10 h-10 flex items-center justify-center ${
                  num === step
                    ? "!bg-[var(--light-blue)] !text-[var(--alabster)]"
                    : ""
                }`}
              >
                {num}
              </div>
              <div className="text-start">
                <span className="block text-gray-400">STEP {num}</span>
                <p className="text-white font-semibold">
                  {num === 1 && "YOUR INFO"}
                  {num === 2 && "SELECT PLAN"}
                  {num === 3 && "ADD-ONS"}
                  {num === 4 && "SUMMARY"}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DesktopSidebar;
