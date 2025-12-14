import { ProjectCard } from "../components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 max-w-6xl mx-auto bg-background"
      data-aos="fade-up"
    >
      <div className="mb-12 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground shrink-0">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="hidden md:block w-24 h-1 bg-border/50 mt-2 rounded-full" />
        
        <p className="text-muted text-sm md:text-base max-w-2xl text-center leading-relaxed">
          A selection of projects developed during my undergraduate studies and
          personal endeavors.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-y-10">
        {projects.map((project, index) => (
          <div 
            key={index} 

            className="w-full lg:w-[calc(50%-0.75rem)] flex justify-center"
          >

            <div className="w-full max-w-md h-full">
              <ProjectCard {...project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}