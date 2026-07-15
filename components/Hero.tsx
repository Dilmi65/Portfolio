import Braid from "./Braid";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pt-16 md:px-10 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="eyebrow text-teal">Portfolio — Colombo Province, Sri Lanka</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
            <span className="text-teal">Builds software.</span>
            <br />
            <span className="italic text-coral">Understands people.</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/80">
            I&apos;m Dilmi Edirisinghe — an IT undergraduate and psychology &amp;
            counselling student. I build full-stack web applications, and I bring
            a people-first lens to how I design, coordinate, and collaborate.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-teal"
            >
              View my work
            </a>
            <a
              href="/Dilmi_Edirisinghe_Resume.pdf"
              className="rounded-full border border-ink px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:border-coral hover:text-coral"
            >
              Download résumé
            </a>
          </div>
          <div className="mt-8 flex gap-6 font-body text-sm text-ink/70">
            <a
              href="https://www.linkedin.com/in/dilmi-edirisingha-88416b326"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-teal"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Dilmi65"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-teal"
            >
              GitHub ↗
            </a>
            <a href="mailto:dilmiedirisingha4@gmail.com" className="transition-colors hover:text-teal">
              Email ↗
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[2rem] border border-teal/40" />
            <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-coral/40" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Portrait of Dilmi Edirisinghe"
              className="relative h-full w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>

      <Braid className="mt-16 md:mt-24" />
    </section>
  );
}
