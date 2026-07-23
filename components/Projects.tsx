const projects = [
  {
    title: "E-Commerce Management System",
    stack: ["React.js", "Laravel", "MySQL", "Bootstrap", "Stripe"],
    description:
      "A full-stack e-commerce application with user authentication, product management, a shopping cart, order management, and Stripe payment integration, communicating with a Laravel REST API.",
    video: "/ecommerce.mp4"
  },
  {
    title: "Smart Boarding Management System",
    stack: ["HTML", "PHP", "MySQL", "Tailwind CSS"],
    description:
      "A platform for managing boarding house operations — student registration, room allocation, payment tracking, and boarding details — built to improve administrative efficiency and data accuracy.",
    video: "/boarding.mp4"
  },
  {
    title: "Learning Management System (LMS)",
    stack: ["HTML", "Tailwind CSS", "Mysql", "PHP", "JavaScript"],
    description:
      "A secure LMS for registered students, covering notices, learning-material uploads and downloads, assignment submission, and personalized exam-result viewing.",
    video: "/LMS.mp4"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <p className="eyebrow text-teal"> Projects</p>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Academic projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (

            < div
              key={project.title}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 transition-transform hover:-translate-y-1 hover:border-teal"
            >
              {project.video ? (
                <video
                  src={project.video}
                  className="mb-5 aspect-video w-full rounded-xl object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <div className="mb-5 flex aspect-video w-full items-center justify-center rounded-xl bg-teal-light/40 font-mono text-xs text-teal-dark">
                  Demo coming soon
                </div>
              )}
              <h3 className="font-display text-xl text-ink">{project.title}</h3>
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink/75">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-teal-light px-3 py-1 font-mono text-xs text-teal-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/Dilmi65"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 font-body text-sm font-medium text-ink transition-colors hover:text-coral"
        >
          See more on GitHub ↗
        </a>
      </div>
    </section >
  );
}
