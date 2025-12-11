import { ProjectCard } from "../components/ProjectCard";
import { projects } from "@/data/projects"; 

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      
      <div className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-4">
        <h2 className="text-3xl font-bold text-foreground shrink-0">
          Principais <span className="text-gradient">Projetos</span>
        </h2>
        <div className="hidden md:block h-1 flex-1 bg-border/50 mt-2" />
        <p className="text-muted text-sm md:text-base max-w-md text-left md:text-right">
          Uma seleção dos trabalhos que desenvolvi na graduação, pesquisa e projetos pessoais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project} 
          />
        ))}
      </div>
      
    </section>
  );
}