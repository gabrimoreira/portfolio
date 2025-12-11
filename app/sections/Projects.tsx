import { ProjectCard } from "../components/ProjectCard";
import { projects } from "@/data/projects"; 

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto bg-background " data-aos="fade-up">
      
      <div className="mb-12 flex flex-col items-center justify-center gap-4">
        <h2 className="text-6xl font-bold text-foreground shrink-0">
          Principais <span className="text-gradient">Projetos</span>
        </h2>
        <div className="hidden md:block h-1 flex-1 bg-border/50 mt-2" />
        <p className=" text-muted text-sm md:text-base max-w-md text-justify md:text-center">
          Uma seleção dos trabalhos que desenvolvi na graduação e projetos pessoais
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 gap-y-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="w-full lg:w-[calc(50%-12px)]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      
    </section>
  );
}