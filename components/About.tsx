export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 md:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-coral">01 — About</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Two disciplines, one way of working
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="font-body text-lg leading-relaxed text-ink/80">
            I&apos;m currently pursuing a Higher National Diploma in Information
            Technology alongside a degree in Psychology &amp; Counselling. That
            combination shapes how I work: I care as much about whether a system
            is usable and well-coordinated as I do about whether it runs.
          </p>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink/80">
            On the technical side, I&apos;ve built full-stack applications with
            React.js, Laravel, PHP, and MySQL, and I have coursework exposure to
            Java and Angular. On the people side, my psychology background and a
            two-month internship with a government social services department
            have sharpened my communication, coordination, and problem-solving
            skills in real organizational settings.
          </p>
        </div>
      </div>
    </section>
  );
}
