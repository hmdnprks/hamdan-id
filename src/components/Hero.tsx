export default function Hero() {
  return (
    <section className="w-full max-w-2xl mx-auto text-center py-20 px-6">
      <img
        src="/profile.jpg"
        alt="Hamdan Prakoso"
        className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
      />
      <h1 className="text-4xl font-bold mb-4">
        Hi, I&apos;m Hamdan.
      </h1>
      <p className="text-lg text-muted max-w-xl mx-auto">
        A Software Engineer crafting thoughtful, performant web experiences — blending engineering and creativity with curiosity and clarity.
      </p>
    </section>
  );
}