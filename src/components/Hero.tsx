import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-2xl mx-auto text-center py-20 px-6">
      <div className="relative w-24 h-24 mx-auto mb-6">
        <Image
          src="/profile.jpg"
          alt="Hamdan Prakoso"
          fill
          sizes="96px"
          className="rounded-full object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Hi, I&apos;m Hamdan.
      </h1>
      <p className="text-lg text-muted max-w-xl mx-auto">
        A Software Engineer crafting thoughtful, performant web experiences — blending engineering and creativity with curiosity and clarity.
      </p>
    </section>
  );
}