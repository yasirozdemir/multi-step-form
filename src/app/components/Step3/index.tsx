type Step3Props = {
  add_ons: {
    online_service: boolean;
    larger_storage: boolean;
    customizable_profile: boolean;
  };
  handleSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Step3 = ({ handleSelect, add_ons }: Step3Props) => {
  const buttonClassList = "bg-red-200 text-red-800 font-bold py-2 px-4 rounded";
  const selectedClassList = " bg-red-800 text-white";
  return (
    <section>
      <div>
        <ul>
          <li>
            <button
              type="button"
              data-select="online_service"
              onClick={handleSelect}
              className={
                buttonClassList + (add_ons.online_service && selectedClassList)
              }
            >
              Online Service
            </button>
          </li>

          <li>
            <button
              type="button"
              data-select="larger_storage"
              onClick={handleSelect}
              className={
                buttonClassList + (add_ons.larger_storage && selectedClassList)
              }
            >
              Larger Storage
            </button>
          </li>

          <li>
            <button
              type="button"
              data-select="customizable_profile"
              onClick={handleSelect}
              className={
                buttonClassList +
                (add_ons.customizable_profile && selectedClassList)
              }
            >
              Customizable Profile
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Step3;
