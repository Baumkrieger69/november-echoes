import { useNavigate } from "react-router-dom";
import { articles } from "@/data/articles";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Masthead */}
      <header className="pt-6 pb-2 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-1">
            <div className="flex-1 h-px bg-primary/30" />
            <p className="text-muted-foreground text-[10px] md:text-xs tracking-[0.5em] uppercase font-body whitespace-nowrap">
              Sonderausgabe · Deutsches Reich
            </p>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary animate-flicker leading-tight my-4">
            Reichspogromnacht
          </h1>

          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex-1 border-t-2 border-b border-primary/40" style={{ paddingBottom: '2px' }} />
            <p className="text-muted-foreground text-[10px] md:text-xs tracking-[0.4em] uppercase font-body whitespace-nowrap">
              9. November 1938
            </p>
            <div className="flex-1 border-t-2 border-b border-primary/40" style={{ paddingBottom: '2px' }} />
          </div>

          <p className="text-foreground/60 font-display italic text-base md:text-lg max-w-lg mx-auto mt-3">
            „Die Nacht, in der Deutschland seine Seele verlor"
          </p>
        </div>
      </header>

      {/* Newspaper rule */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t-4 border-primary/50 mt-4" />
      </div>

      {/* Main story - large feature */}
      <main className="max-w-5xl mx-auto px-4 pt-6 pb-12">
        {/* Lead article: full width */}
        <div
          className="image-card rounded-sm aspect-[21/9] mb-1 cursor-pointer animate-fade-up"
          onClick={() => navigate(`/artikel/${articles[0].slug}`)}
        >
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10">
            <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase mb-1">
              {articles[0].date}
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-primary text-shadow leading-tight">
              {articles[0].title}
            </h2>
            <p className="text-foreground/70 text-sm md:text-base font-display italic text-shadow mt-1">
              {articles[0].subtitle}
            </p>
          </div>
        </div>

        {/* Teaser line */}
        <p className="text-foreground/70 font-body text-sm leading-relaxed mb-6 max-w-2xl">
          {articles[0].content[0].slice(0, 160)}…
          <span className="text-primary/70 ml-1 text-xs tracking-widest uppercase">Weiterlesen →</span>
        </p>

        <div className="newspaper-double-divider" />

        {/* 3-column grid for remaining articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(1).map((article, i) => (
            <div
              key={article.id}
              className="cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: "backwards" }}
              onClick={() => navigate(`/artikel/${article.slug}`)}
            >
              <div className="image-card rounded-sm aspect-[4/3] mb-3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                  <p className="text-muted-foreground text-[9px] tracking-[0.3em] uppercase">
                    {article.date}
                  </p>
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-primary group-hover:text-primary/80 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-foreground/50 font-display italic text-sm mt-0.5 mb-2">
                {article.subtitle}
              </p>
              <p className="text-foreground/60 font-body text-sm leading-relaxed">
                {article.content[0].slice(0, 120)}…
              </p>
              <div className="border-b border-primary/15 mt-4 md:hidden" />
            </div>
          ))}
        </div>

        <div className="newspaper-double-divider mt-8" />

        {/* Bottom info block */}
        <div className="text-center">
          <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase">
            Wählen Sie einen Artikel, um den vollständigen Bericht zu lesen
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 py-6 text-center bg-secondary/30">
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body">
          Gedenken · Erinnern · Niemals vergessen
        </p>
      </footer>
    </div>
  );
};

export default Index;
