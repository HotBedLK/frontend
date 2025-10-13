import { theme } from "../theme";

const StepsCard = () => {
  const steps = [
    {
      step: 1,
      title: "Register with us :",
      description:
        "Quick, easy sign-up to unlock Sri Lanka's largest rental marketplace.",
    },
    {
      step: 2,
      title: "Search best stay for you :",
      description:
        "Effortlessly filter and browse verified annexes, rooms, and apartments tailored to your needs.",
    },
    {
      step: 3,
      title: "Get notification :",
      description:
        "Receive instant alerts for new properties matching your specific location and budget.",
    },
    {
      step: 4,
      title: "Comfort without any hassle :",
      description:
        "Secure your rental directly, ensuring a smooth, comfortable, and problem-free move.",
    },
  ];

  return (
    <div
      className={`bg-[${theme.backgrund.green}] rounded-2xl shadow-lg py-10 px-6 mx-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 text-center md:text-left`}
    >
      {steps.map((item, index) => (
        <div key={item.step} className="flex gap-4">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Step {item.step}</h3>
            <h4 className="text-base font-bold mt-2 text-center">
              {item.title}
            </h4>
            <p className=" text-sm text-gray-600 max-w-[220px] mt-1 text-center">
              {item.description}
            </p>
          </div>

          {index !== steps.length - 1 && (
            <div className="hidden md:flex justify-center items-center mx-4">
              {/* Arrow Icon Here */}

              {"-->"}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsCard;
