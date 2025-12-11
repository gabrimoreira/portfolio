import { ResearchCard } from "../components/ResearchCard";
import { research } from "@/data/research"; 

export default function Research() {
  return (
    <section id="research" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-24">
      
      <div 
        className="mb-12 flex flex-col items-center justify-center gap-4"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-foreground shrink-0 text-center">
          Pesquisa & <span className="text-gradient">Publicações</span>
        </h2>
        <p className="text-muted text-sm md:text-base max-w-2xl text-center">
          Artigos científicos e trabalhos desenvolvidos durante minha trajetória acadêmica e de iniciação científica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {research.map((item, index) => (
          <div 
            key={index}
            className={`${item.type === 'published' ? "md:col-span-2" : ""}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ResearchCard {...item} />
          </div>
        ))}
      </div>
      
    </section>
  );
}