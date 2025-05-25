import Link from "next/link";

const interLinks = [
  {
    href: "/life/inter/blog",
    title: "Blog & Stories",
    description: "Personal thoughts, reflections, and stories around Inter Milan.",
  },
  {
    href: "/life/inter/matches",
    title: "Matches",
    description: "Match journals, memorable games, and derby experiences.",
  },
  {
    href: "/life/inter/achievements",
    title: "Achievements",
    description: "Trophies, historic moments, and personal favorite milestones.",
  },
];

export default function InterMilanPage() {
  return (
    <main>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Inter Milan 💙🖤</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          This is a special section of my site dedicated to Inter Milan — the club I’ve loved for years.
          Here I share matches I’ve watched, titles we’ve won, and stories only a fellow nerazzurri would understand.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {interLinks.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="block border border-[var(--inter-border)] rounded-lg p-6 bg-[var(--surface)] hover:bg-[var(--inter-accent)] hover:text-white transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[var(--inter-muted)]">{description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}