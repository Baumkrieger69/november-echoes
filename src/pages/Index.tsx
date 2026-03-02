import { useNavigate } from "react-router-dom";
import { articles } from "@/data/articles";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Masthead */}
      <header className="pt-8 pb-4 px-4 text-center border-b-2 border-primary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex-1 h-px bg-primary/30" />
            <p className="text-muted-foreground text-[10px] md:text-xs tracking-[0.5em] uppercase font-body whitespace-nowrap">
              Sonderausgabe · Deutsches Reich
            </p>
            <div className="flex-1 h-px bg-primary/30" />
          </div>

          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-primary animate-flicker leading-tight my-6 tracking-tight">
            Reichspogromnacht
          </h1>

          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex-1 border-t-2 border-b border-primary/40" style={{ paddingBottom: '2px' }} />
            <p className="text-muted-foreground text-[10px] md:text-xs tracking-[0.4em] uppercase font-body whitespace-nowrap">
              9. November 1938
            </p>
            <div className="flex-1 border-t-2 border-b border-primary/40" style={{ paddingBottom: '2px' }} />
          </div>

          <p className="text-foreground/60 font-display italic text-lg md:text-xl max-w-2xl mx-auto mt-4">
            „Die Nacht, in der Deutschland seine Seele verlor"
          </p>
        </div>
      </header>

      {/* Main story - large feature */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Lead article: full width */}
        <div
          className="image-card rounded-sm aspect-[16/9] mb-4 cursor-pointer animate-fade-up shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => navigate(`/artikel/${articles[0].slug}`)}
        >
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
            <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase mb-2 font-body">
              {articles[0].date}
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary text-shadow leading-tight mb-2">
              {articles[0].title}
            </h2>
            <p className="text-foreground/80 text-base md:text-lg font-display italic text-shadow">
              {articles[0].subtitle}
            </p>
          </div>
        </div>

        {/* Summary of lead article */}
        <div className="bg-secondary/10 border-l-4 border-primary/50 p-4 md:p-6 my-6 rounded-sm">
          <p className="text-foreground/75 font-body text-base md:text-lg leading-relaxed">
            {articles[0].content[0].slice(0, 200)}…
          </p>
          <button 
            onClick={() => navigate(`/artikel/${articles[0].slug}`)}
            className="text-primary text-sm tracking-widest uppercase font-body mt-3 hover:text-primary/80 transition-colors"
          >
            Vollständigen Bericht lesen →
          </button>
        </div>

        <div className="newspaper-double-divider my-8" />

        {/* 2-Column Grid for Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {articles.slice(1).map((article, index) => (
            <section 
              key={article.id} 
              className="animate-fade-up border border-primary/15 rounded-sm overflow-hidden hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: "backwards" }}
            >
              {/* Article card */}
              <div
                className="image-card rounded-sm aspect-[4/3] cursor-pointer group shadow-md hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/artikel/${article.slug}`)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <p className="text-muted-foreground text-[9px] tracking-[0.3em] uppercase font-body">
                    {article.date}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="font-display text-xl md:text-2xl font-bold text-primary leading-tight mb-2 cursor-pointer hover:text-primary/80 transition-colors"
                  onClick={() => navigate(`/artikel/${article.slug}`)}
                >
                  {article.title}
                </h3>
                <p className="text-foreground/60 font-display italic text-sm mb-4 border-b border-primary/20 pb-4">
                  {article.subtitle}
                </p>
                <p className="text-foreground/70 font-body text-sm leading-relaxed mb-4 min-h-[80px]">
                  {article.content[0].slice(0, 150)}…
                </p>
                <button 
                  onClick={() => navigate(`/artikel/${article.slug}`)}
                  className="text-primary text-xs tracking-widest uppercase font-body hover:text-primary/80 transition-colors"
                >
                  Weiterlesen →
                </button>
              </div>
            </section>
          ))}
        </div>

        <div className="newspaper-double-divider my-8" />

        {/* Bottom info block */}
        <div className="bg-secondary/10 p-8 rounded-sm text-center border border-primary/20">
          <h3 className="font-display text-xl md:text-2xl text-primary mb-2">Ein Stück Geschichte</h3>
          <p className="text-muted-foreground text-base font-body max-w-3xl mx-auto leading-relaxed">
            Diese Website dokumentiert die Ereignisse der Reichspogromnacht vom 9. November 1938. 
            Sie ist ein Mahnmal gegen das Vergessen und ein Zeugnis der Besinnung.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 py-8 text-center bg-secondary/30 mt-12">
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body mb-2">
          Gedenken · Erinnern · Niemals vergessen
        </p>
        <p className="text-muted-foreground text-[11px] opacity-60">
          Eine Dokumentation historischer Ereignisse
        </p>
      </footer>
    </div>
  );
};

export default Index;
