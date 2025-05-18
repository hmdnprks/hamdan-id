import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mental Health Screening Platform",
    description: "Comprehensive questionnaire system built with Next.js and Go backend for university-level research.",
    imageUrl: "/projects/mental-health.jpg",
    link: "https://example.com/mental-health",
  },
  {
    title: "3D Learning Platform",
    description: "Interactive Three.js-powered tutorials for beginners and professionals to explore 3D web development.",
    imageUrl: "/projects/3d-platform.jpg",
    link: "https://example.com/3d-platform",
  },
  {
    title: "byHΔNDN Portfolio",
    description: "Cinematic photography and visual stories. Built with a minimalist CMS and Cloudinary integration.",
    imageUrl: "/projects/byhandn.jpg",
    link: "https://byhandn.com",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Project Showcase</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}