export default function FAQ() {
  const faqs = [
    {
      q: "How does Hotbed.lk help seekers find accommodation easily?",
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
      a: "Yes, Hotbed.lk offers a subscription and alert mechanism that allows seekers to receive notifications whenever a preferred property becomes available. This ensures that seekers are always in the loop about new vacancies without having to search manually.",
    },
  ];

  return (
    <section className="mt-12 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-[var(--primary-color)]">
              FAQs
            </p>
            <h2 className="font-display mt-3 text-3xl text-gray-900">
              Questions & Answers
            </h2>
            <p className="font-body mt-3 text-sm text-gray-600">
              Clear answers for seekers and owners on how Hotbed.lk makes the
              boarding process easier.
            </p>
          </div>

          <div className="mt-6 space-y-3 text-left">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-lg border border-gray-200 bg-gray-50/40 p-4 transition hover:border-gray-300"
                aria-expanded="false"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-gray-900">
                  <span className="font-body">{f.q}</span>
                  <svg
                    className="h-5 w-5 transform text-gray-500 transition-transform duration-200 group-open:rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                  </svg>
                </summary>
                <div className="font-body mt-3 text-sm text-gray-600">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
