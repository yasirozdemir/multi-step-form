import Image from "next/image";
import Title from "../Title";
import Description from "../Description";

const Finished = () => {
  return (
    <section>
      <div className="py-12 px-4">
        <div className="flex justify-center">
          <Image
            src="/icon-thank-you.svg"
            alt="thank you icon"
            width={64}
            height={64}
          />
        </div>
        <div className="text-center mt-6">
          <Title>Thank you!</Title>
          <Description>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at myozdemir.career@gmail.com
          </Description>
        </div>
      </div>
    </section>
  );
};

export default Finished;
