export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-muted">
      <p className="mb-2">
        © {new Date().getFullYear()} Hamdan Prakoso. All rights reserved.
      </p>
      <p className="text-xs">
        Built with <a href="https://nextjs.org" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Next.js</a> & hosted on <a href="https://vercel.com" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Vercel</a>.
      </p>
    </footer>
  );
}