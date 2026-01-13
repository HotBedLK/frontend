const StepsCard = () => {
  const steps = [
    {
      step: 1,
      title: "Register with us",
      description:
        "Quick, easy sign-up to unlock Sri Lanka's largest rental marketplace.",
    },
    {
      step: 2,
      title: "Search best stay for you",
      description:
        "Effortlessly filter and browse verified annexes, rooms, and apartments tailored to your needs.",
    },
    {
      step: 3,
      title: "Get notification",
      description:
        "Receive instant alerts for new properties matching your specific location and budget.",
    },
    {
      step: 4,
      title: "Comfort without any hassle",
      description:
        "Secure your rental directly, ensuring a smooth, comfortable, and problem-free move.",
    },
  ];

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[var(--background-pink)]/60 p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`flex flex-col items-center text-center md:items-start md:text-left ${
                index !== steps.length - 1
                  ? "md:border-r md:border-white/70 md:pr-6"
                  : ""
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-sm font-semibold text-[var(--primary-color)] shadow-sm">
                {String(item.step).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-base text-gray-900">
                {item.title}
              </h3>
              <p className="font-body mt-2 text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsCard;
