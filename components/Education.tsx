const education = [
  {
    title: "Higher National Diploma in Information Technology (HNDIT)",
    place: "Sri Lanka Institute of Advanced Technological Education – Kegalle",
    period: "2024 — Present",
  },
  {
    title: "BA in Psychology & Counselling",
    place: "IMBS Green Campus",
    period: "2025 — Present",
  },
  {
    title: "Diploma in Psychology and Counselling",
    place: "IMBS Green Campus",
    period: "2024 — 2025",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <p className="eyebrow text-teal">Education</p>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Academic timeline
        </h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {education.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <span className="eyebrow text-ink/50 md:col-span-3">
                {item.period}
              </span>
              <h3 className="font-display text-xl text-ink md:col-span-6">
                {item.title}
              </h3>
              <span className="font-body text-sm text-ink/60 md:col-span-3 md:text-right">
                {item.place}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
