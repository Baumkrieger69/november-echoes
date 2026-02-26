import { useParams, useNavigate } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

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
      {/* Top bar */}
      <nav className="border-b border-primary/20 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm tracking-widest uppercase font-body"
          >
            <ArrowLeft size={16} />
            Zurück zur Übersicht
          </button>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(30%) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 -mt-24 relative z-10 pb-16">
        <header className="mb-8 animate-fade-up">
          <p className="text-muted-foreground text-xs tracking-[0.5em] uppercase mb-3 font-body">
            {article.date}
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-3">
            {article.title}
          </h1>
          <p className="font-display italic text-lg md:text-xl text-foreground/70">
            {article.subtitle}
          </p>
        </header>

        <div className="newspaper-double-divider" />

        <div className="article-columns article-content">
          {article.content.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 text-foreground/85 leading-loose text-base md:text-lg animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: "backwards" }}
            >
              {i === 0 && (
                <span className="font-display text-5xl md:text-6xl text-primary float-left mr-3 mt-1 leading-[0.8]">
                  {paragraph.charAt(0)}
                </span>
              )}
              {i === 0 ? paragraph.slice(1) : paragraph}
            </p>
          ))}
        </div>

        <div className="newspaper-double-divider" />

        <footer className="text-center mt-8">
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
            Gedenken · Erinnern · Niemals vergessen
          </p>
        </footer>
      </article>
    </div>
  );
};

export default ArticlePage;
