const technical = [
  "React.js",
  "Laravel",
  "MySQL",
  "Bootstrap",
  "Java (coursework)",
  "Angular (coursework)",
  "Microsoft Office",
  "Canva",
];

const soft = [
  "Communication",
  "Team Coordination",
  "Leadership",
  "Problem Solving",
  "Time Management",
  "Organizational Skills",
  "Teamwork",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-20 md:px-10">
      <p className="eyebrow text-coral">05 — Skills</p>
      <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
        What I bring to a team
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-lg text-teal">Technical</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {technical.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-teal/40 px-4 py-2 font-body text-sm text-ink/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg text-coral">Interpersonal</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {soft.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-coral/40 px-4 py-2 font-body text-sm text-ink/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
