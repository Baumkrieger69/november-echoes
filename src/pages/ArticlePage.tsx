import { useParams, useNavigate } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowLeft, Home } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Artikel nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <nav className="border-b border-primary/20 px-4 py-4 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm tracking-widest uppercase font-body"
          >
            <Home size={16} />
            Startseite
          </button>
          <p className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase font-body">
            Reichspogromnacht 1938
          </p>
        </div>
      </nav>

      {/* Hero image section */}
      <div className="relative w-full h-[35vh] md:h-[45vh] overflow-hidden border-b-2 border-primary/20">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(20%) contrast(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Article content */}
      <article className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        {/* Header section */}
        <header className="mb-10 animate-fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary/50 rounded-full" />
            <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase font-body">
              {article.date}
            </p>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-4">
            {article.title}
          </h1>
          
          <div className="w-20 h-1 bg-primary/40 rounded-full mb-6" />
          
          <p className="font-display italic text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
            {article.subtitle}
          </p>
        </header>

        <div className="newspaper-double-divider my-8" />

        {/* Article body with enhanced typography */}
        <div className="article-columns article-content max-w-4xl">
          {article.content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-6 text-foreground/85 leading-loose text-lg md:text-lg animate-fade-up first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-primary"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "backwards" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="newspaper-double-divider my-10" />

        {/* Footer section with context */}
        <footer className="bg-secondary/10 border-l-4 border-primary/40 p-6 md:p-8 rounded-sm mb-10">
          <h3 className="font-display text-lg text-primary mb-3">Kontext</h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
            Die Reichspogromnacht vom 9. November 1938 war ein Wendepunkt in der Geschichte des NS-Deutschlands. 
            Sie markierte den Übergang von Diskriminierung zu systematischer Verfolgung und war ein Vorspiel zum Holocaust.
          </p>
        </footer>

        {/* Navigation to related articles */}
        <div className="border-t border-primary/20 pt-8">
          <h3 className="font-display text-lg text-primary mb-6">Weitere Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.filter(a => a.id !== article.id).slice(0, 2).map((relatedArticle) => (
              <button
                key={relatedArticle.id}
                onClick={() => navigate(`/artikel/${relatedArticle.slug}`)}
                className="text-left p-4 border border-primary/20 rounded-sm hover:bg-secondary/20 hover:border-primary/40 transition-all group"
              >
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-body mb-1">
                  {relatedArticle.date}
                </p>
                <h4 className="font-display text-base text-primary group-hover:text-primary/80 transition-colors leading-snug">
                  {relatedArticle.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </article>

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

export default ArticlePage;
