import { useState } from "react";
import synagogue1 from "@/assets/synagogue-1.jpeg";
import synagogue2 from "@/assets/synagogue-2.jpeg";
import synagogue3 from "@/assets/synagogue-3.jpeg";
import synagogue4 from "@/assets/synagogue-4.jpeg";
import ImageArticle from "@/components/ImageArticle";

const articles = [
  {
    id: 1,
    image: synagogue1,
    title: "Die Nacht bricht herein",
    subtitle: "Hannover, 9. November 1938",
    content: `Die Ausschreitungen ereigneten sich in der Nacht vom 9. auf den 10. November 1938 sowie in den darauffolgenden Tagen. Sie fanden zeitgleich im gesamten Deutschen Reich statt – einschließlich Österreichs und des Sudetenlandes.

Die Reichspogromnacht (oft auch als „Novemberpogrome" bezeichnet) war ein vom nationalsozialistischen Regime organisiertes und gelenktes Gewaltverbrechen gegen die jüdische Bevölkerung im Deutschen Reich. Sie markiert den Übergang von der Diskriminierung zur systematischen Verfolgung und Vernichtung.`,
  },
  {
    id: 2,
    image: synagogue2,
    title: "Der Vorwand",
    subtitle: "Das Attentat von Paris",
    content: `Als offizieller Anlass diente ein Attentat in Paris: Der 17-jährige Jude Herschel Grynszpan hatte am 7. November auf den deutschen Diplomaten Ernst vom Rath geschossen. Als dieser am 9. November starb, nutzte die NS-Führung – insbesondere Propagandaminister Joseph Goebbels – dies als Vorwand, um eine „spontane Entladung des Volkszorns" zu inszenieren.

Heutzutage verwenden Historiker bevorzugt Begriffe wie Novemberpogrome oder Reichspogromnacht. Der Begriff „Reichskristallnacht" wurde damals von den Tätern oder im Berliner Volksmund geprägt. Er gilt als beschönigend, da er das Bild von „glitzerndem Glas" nutzt, um die Brutalität und das vergossene Blut zu überdecken.`,
  },
  {
    id: 3,
    image: synagogue3,
    title: "Zerstörung und Terror",
    subtitle: "Die Bilanz des Grauens",
    content: `Die Gewalt war keineswegs spontan, sondern wurde von der SA und SS in Zivilkleidung durchgeführt oder angeleitet:

Über 1.400 Synagogen und Gebetsräume wurden geplündert und in Brand gesetzt. Rund 7.500 jüdische Geschäfte wurden zertrümmert. Hunderte Menschen wurden ermordet oder in den Selbstmord getrieben. Etwa 30.000 jüdische Männer wurden verhaftet und in die Konzentrationslager Dachau, Buchenwald und Sachsenhausen verschleppt, um sie zur Auswanderung zu zwingen und ihr Vermögen zu rauben.`,
  },
  {
    id: 4,
    image: synagogue4,
    title: "Der Beginn in München",
    subtitle: "München, 9. November 1938 – 21:00 Uhr",
    content: `Gegen 21:00 Uhr versammelte sich die NS-Führung in München, um des Hitler-Putsches von 1923 zu gedenken. Während der Feierlichkeiten erhielt Hitler die Nachricht vom Tod des Diplomaten Ernst vom Rath. Goebbels verließ die Veranstaltung vorzeitig und ohne seine traditionelle Rede.

Um 22:30 Uhr hielt Goebbels eine hasserfüllte antisemitische Rede, die als Signal für den Terror diente. Unmittelbar danach ergingen Befehle an die SA und die Partei, jüdische Synagogen und Geschäfte zu zerstören. Die Bilanz dieser Nacht war verheerend: Mehr als 1.300 Menschen wurden ermordet, über 30.000 jüdische Männer und Frauen verhaftet und tausende Gebäude sowie Geschäfte zerstört.

Nach der Nacht verschärfte sich die Lage dramatisch: Die jüdische Gemeinschaft wurde gezwungen, eine „Sühneleistung" von einer Milliarde Reichsmark an den Staat zu zahlen. Versicherungsleistungen für die Schäden wurden vom Staat beschlagnahmt. Es folgte der fast vollständige Ausschluss der Juden aus dem deutschen Wirtschaftsleben.

Die Reichspogromnacht war das Ende der relativen Sicherheit im privaten Raum. Ab diesem Zeitpunkt war jedem klar, dass der Staat jüdisches Leben und Eigentum nicht mehr schützte, sondern aktiv vernichten wollte.`,
  },
];

const Index = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedArticle = articles.find((a) => a.id === selectedId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-4 text-center border-b-2 border-primary/30">
        <p className="text-muted-foreground text-sm tracking-[0.4em] uppercase mb-2 font-body">
          Sonderausgabe · 9. November 1938
        </p>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl text-primary animate-flicker">
          Reichspogromnacht
        </h1>
        <div className="newspaper-double-divider max-w-2xl mx-auto" />
        <p className="text-muted-foreground font-display italic text-lg max-w-xl mx-auto">
          „Die Nacht, in der Deutschland seine Seele verlor"
        </p>
      </header>

      {/* Image Grid */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-center text-muted-foreground text-sm mb-8 tracking-widest uppercase">
          Wählen Sie ein Bild, um mehr zu erfahren
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <div
              key={article.id}
              className="image-card rounded-sm aspect-[16/10] animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "backwards" }}
              onClick={() =>
                setSelectedId(selectedId === article.id ? null : article.id)
              }
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h2 className="font-display text-xl md:text-2xl font-bold text-primary text-shadow">
                  {article.title}
                </h2>
                <p className="text-foreground/70 text-sm font-body text-shadow">
                  {article.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Article */}
        {selectedArticle && (
          <ImageArticle
            key={selectedArticle.id}
            title={selectedArticle.title}
            subtitle={selectedArticle.subtitle}
            content={selectedArticle.content}
            onClose={() => setSelectedId(null)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-6 text-center">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Gedenken · Erinnern · Niemals vergessen
        </p>
      </footer>
    </div>
  );
};

export default Index;
