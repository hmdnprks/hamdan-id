import Link from "next/link";

const interests = [
  {
    href: "/life/inter",
    title: "Inter Milan",
    description: "A deep dive into my passion for football and the nerazzurri journey.",
    emoji: "⚽️",
  },
  {
    href: "/life/travel",
    title: "Travel",
    description: "Cinematic journals and maps of the places I’ve explored.",
    emoji: "🌍",
  },
  {
    href: "/life/music",
    title: "Music",
    description: "Thoughts on sound, my guitar journey, and playlists I love.",
    emoji: "🎸",
  },
  {
    href: "/life/books",
    title: "Books",
    description: "Reflections from the books I’ve read and how they shaped my thinking.",
    emoji: "📖",
  },
  {
    href: "/life/astronomy",
    title: "Astronomy",
    description: "A look at the stars, space wonders, and my fascination with the universe.",
    emoji: "🌌",
  },
  {
    href: "/life/coffee",
    title: "Coffee",
    description: "Just me, a cup of coffee, and the joy of simple rituals.",
    emoji: "☕️",
  },
];

export default function LifePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">Life Beyond Code</h1>
        <p className="text-lg text-muted mb-10">
          These are the things that inspire, ground, and express who I am beyond work. From the San Siro to the stars, here’s what I love.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-left">
          {interests.map(({ href, title, description, emoji }) => (
            <Link
              key={href}
              href={href}
              className="border rounded-lg p-6 hover:bg-muted/10 transition-colors block h-full"
            >
              <h3 className="text-xl font-semibold mb-1">
                <span className="mr-2 text-2xl">{emoji}</span>
                {title}
              </h3>
              <p className="text-sm text-muted">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}