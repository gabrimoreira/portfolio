import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repoLink?: string;
  demoLink?: string;
}

export function ProjectCard({ title, description, tags, image, repoLink, demoLink }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_-10px_var(--primary)] h-full max-w-md">
      
      <div className="h-48 overflow-hidden relative border-b border-border bg-neutral-900 group">
        
        <div className="absolute top-0 left-0 w-full h-8 bg-black/60 backdrop-blur-sm z-20 flex items-center px-3 gap-1.5 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" /> 
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" /> 
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" /> 
        </div>

        <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-all z-10" />
        
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full pt-8 group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full pt-8 bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
            <span className="text-neutral-700 text-sm font-mono">Terminal</span>
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col gap-6 flex-1">
        <div className="flex justify-between items-start">
          
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex gap-4">
            {repoLink && (
              <a href={repoLink} target="_blank" className="text-muted hover:text-primary transition-colors">
                <Github className="w-6 h-6" /> 
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" className="text-muted hover:text-primary transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted text-base line-clamp-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-sm font-medium px-3 py-1.5 rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}