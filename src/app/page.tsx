import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LatestPosts from "@/components/LatestPosts";
import ProjectShowcase from "@/components/ProjectShowcase";
import SocialCTA from "@/components/Socials";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/animations/FadeInSection";
import ThreeCube from "@/components/3d-objects/ThreeCube";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <FadeInSection delay={0}>
          <Hero />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <About />
        </FadeInSection>

        {/* <FadeInSection delay={0.5}>
          <Gears />
        </FadeInSection> */}
        <FadeInSection delay={0.4}>
          <ThreeCube />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <LatestPosts />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <ProjectShowcase />
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <SocialCTA />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}