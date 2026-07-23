import Braid from "./Braid";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10">
        <p className="eyebrow text-coral"> Contact</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          Open to internship and coordination opportunities —{" "}
          <span className="italic text-teal">let&apos;s talk.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 font-body text-sm md:grid-cols-4">
          <a
            href="mailto:dilmiedirisinghe.official@gmail.com "
            className="rounded-xl border border-paper/20 px-5 py-4 transition-colors hover:border-coral"
          >
            <span className="eyebrow block text-paper/50">Email</span>
            dilmiedirisinghe.official@gmail.com
          </a>
          <a
            href="tel:0702609815"
            className="rounded-xl border border-paper/20 px-5 py-4 transition-colors hover:border-coral"
          >
            <span className="eyebrow block text-paper/50">Phone</span>
            070-2609815
          </a>
          <a
            href="https://www.linkedin.com/in/dilmiedirisinghe"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-paper/20 px-5 py-4 transition-colors hover:border-coral"
          >
            <span className="eyebrow block text-paper/50">LinkedIn</span>
            dilmi-edirisingha
          </a>
          <a
            href="https://github.com/Dilmi65"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-paper/20 px-5 py-4 transition-colors hover:border-coral"
          >
            <span className="eyebrow block text-paper/50">GitHub</span>
            Dilmi65
          </a>
        </div>

        <Braid className="mt-16 opacity-70" />

        <p className="mt-6 font-mono text-xs text-paper/40">
          Colombo, Sri Lanka
        </p>
      </div>
    </section>
  );
}
