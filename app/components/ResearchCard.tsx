import { FileText, ExternalLink, Award, GraduationCap } from "lucide-react";

interface ResearchCardProps {
  title: string;
  type: string;
  publisher: string;
  date: string;
  description: string;
  tags: string[];
  link: string;
}

export function ResearchCard({ title, type, publisher, date, description, tags, link }: ResearchCardProps) {
  
  const isPublished = type === "published";

  return (
    <a 
      href={link} 
      target="_blank" 
      className={`
        group relative flex flex-col p-6 rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1
        ${isPublished 
          ? "border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-[0_0_20px_-10px_rgba(234,179,8,0.3)]" 
          : "border-border hover:border-primary/50 hover:shadow-[0_0_20px_-10px_var(--primary)]"
        }
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <div className={`p-2 rounded-lg ${isPublished ? "bg-yellow-500/10 text-yellow-500" : "bg-primary/10 text-primary"}`}>
            {isPublished ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
          </div>
          
          <div className="flex flex-col">
            <span className={`text-xs font-semibold uppercase tracking-wider ${isPublished ? "text-yellow-500" : "text-primary"}`}>
              {isPublished ? "Accepted Paper" : "Academic"}
            </span>
            <span className="text-xs text-muted">{date}</span>
          </div>
        </div>

        <ExternalLink className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
      </div>

      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 font-medium">
        {publisher}
      </p>

      <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}