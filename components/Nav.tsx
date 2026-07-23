const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "#socialwork", label: "Social Work" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          Dilmi<span className="text-coral">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="eyebrow text-ink/70 transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="eyebrow rounded-full border border-ink px-4 py-2 text-ink transition-colors hover:border-teal hover:text-teal"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
