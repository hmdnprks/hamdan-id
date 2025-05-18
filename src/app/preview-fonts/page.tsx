export default function FontPreviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10 space-y-10">
      <h1 className="text-4xl font-bold">Font Preview – JustSans</h1>

      {/* Headings */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Heading 1 – 5xl Bold</h1>
        <h2 className="text-4xl font-semibold">Heading 2 – 4xl SemiBold</h2>
        <h3 className="text-3xl font-medium">Heading 3 – 3xl Medium</h3>
        <h4 className="text-2xl font-normal">Heading 4 – 2xl Regular</h4>
        <h5 className="text-xl font-light">Heading 5 – xl Light</h5>
      </section>

      {/* Body Text */}
      <section className="space-y-4">
        <p className="text-base font-normal">
          Regular body text – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          dignissim, urna eget facilisis ultricies, dolor nulla egestas augue, vitae mattis
          risus eros ac justo.
        </p>
        <p className="text-base font-medium">
          Medium body text – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          dignissim, urna eget facilisis ultricies, dolor nulla egestas augue.
        </p>
        <p className="text-base font-semibold">
          SemiBold body text – Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-base font-bold">
          Bold body text – Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

      {/* Inline Type Tags */}
      <section className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-wide text-muted">Caption / Label</p>
        <code className="bg-surface p-2 rounded text-sm font-mono">Code Block Text</code>
      </section>
    </div>
  );
}