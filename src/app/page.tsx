import Hero from "@/components/Hero";
import About from "@/components/About";
import LatestPosts from "@/components/LatestPosts";
import ProjectShowcase from "@/components/ProjectShowcase";
import SocialCTA from "@/components/Socials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <About />
        <LatestPosts />
        <ProjectShowcase />
        <SocialCTA />
      </main>
      <Footer />
    </>
  );
}