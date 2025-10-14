export default function FAQ() {
  const faqs = [
    {
      q: "How dows Hotbed.lk help seekers find accommodation easily?",
      a: "Hotbed.lk provides advanced filters for seekers to search for boarding places based on specific criteria such as location, price range, facilities, and proximity to key areas. This saves time and ensures seekers find the most relevant options without contacting multiple owners.",
    },
    {
      q: "How do property owners manage their listings on Hotbed.lk?",
      a: "Property owners have full control over their listings on Hotbed.lk. They can update the availability status of their properties, manage pricing, and even control when their contact information is visible, ensuring a streamlined process for long-term management.",
    },
    {
      q: "What makes Hotbed.lk different from other accommodation platforms like SLbodima.lk and ikman.lk?",
      a: "Unlike other platforms, Hotbed.lk is dedicated solely to boarding accommodation, providing a more specialized and organized service. It offers real-time availability updates, subscription-based alerts, and efficient listing management tools that other general marketplaces lack.",
    },
    {
      q: "Can I receive notifications for new vacancies?",
      a: "Yes, Hotbed.lk offers a subscription and alert mechanism that allows seekers to receive notifications whenever a preferred property becomes available. This ensures that seekers are always in the loop about new vacancies without having to search manually.",
    },
  ];

  return (
    <section className="mt-15 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-bold text-[var(--primary-color)]`}>
          Question & Answers
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Hotbed.lk aims to address the challenges faced by students, <br />
          young professionals, and property owners in Sri Lanka's boarding place
          market.
          <br />
          Below are some of the common quastions and answers to help both
          seekers and owners <br /> understand how the platform works and how it
          can be help them.
        </p>

        <div className="mt-6 space-y-3 text-left">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-gray-50 rounded-lg shadow-sm p-4"
              aria-expanded="false"
            >
              <summary className="flex items-center justify-between cursor-pointer text-gray-800 font-medium list-none">
                <span>{f.q}</span>
                <svg
                  className="w-5 h-5 transform transition-transform duration-200 group-open:rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                </svg>
              </summary>
              <div className="mt-3 text-sm text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
