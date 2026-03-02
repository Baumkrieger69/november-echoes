import synagogue1 from "@/assets/synagogue-1.jpeg";
import synagogue2 from "@/assets/synagogue-2.jpeg";
import synagogue3 from "@/assets/synagogue-3.jpeg";
import synagogue4 from "@/assets/synagogue-4.jpeg";

export interface Article {
  id: number;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  date: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "vorgeschichte",
    image: synagogue1,
    title: "Der Weg in den Terror",
    subtitle: "Wie die Nazi-Eliten die Juden Schritt für Schritt enteigneten",
    date: "1933-1938",
    content: [
      "HANNOVER — Was in der Nacht vom 9. November 1938 über Deutschland hereinbrach, war kein Volkszorn. Es war Programm. Jahrelang hatte das Nazi-Regime die jüdische Bevölkerung mit Gesetzen, Verboten und wirtschaftlichen Zwangsmaßnahmen in die Enge getrieben. Dann kam der Befehl zur organisierten Vernichtung.",
      "Bereits im Oktober 1938 hatte eine Aktion das Schicksal von Zehntausenden besiegelt: die sogenannte \"Polenaktion\". SA und Gestapo trieben etwa 17.000 polnische Juden zusammen - 484 aus Hannover, darunter jüdische Familien aus der Burgstraße und benachbarten Straßen. Sie wurden in Zügen und Lastwagen zur deutsch-polnischen Grenze gekarrt und hinausgejagt. Tagelang standen sie hungrig und frierend im Grenzgebiet, bis Polen sie schließlich aufnahm.",
      "Unter den Vertriebenen war die Familie Grynszpan. Ihr 17-jähriger Sohn Herschel befand sich in Paris. Eine Postkarte seiner Schwester brachte ihm die Nachricht vom Schicksal der Familie. Was dann folgte, gab dem Regime den Vorwand, das vorzubereiten, was längst geplant war.",
    ],
  },
  {
    id: 2,
    slug: "verlauf",
    image: synagogue2,
    title: "Ein Schuss und der Terror bricht los",
    subtitle: "Das Attentat von Paris wird zum Katalysator für Gewalt",
    date: "7.-9. November 1938",
    content: [
      "PARIS — Am 7. November betritt ein verzweifelter Junge die Deutsche Botschaft. Herschel Grynszpan will Protest erheben. Er schießt auf den Diplomaten Ernst vom Rath. Der Schuss wird zum Signal.",
      "Zwei Tage später ist von Rath tot. Die NS-Propaganda schlägt sofort zu: \"Jüdischer Mordanschlag\" brüllen die Zeitungen. Goebbels sieht seine Chance. Am 9. November sitzt die gesamte Nazi-Führung im Münchener Rathauskeller zusammen, um des Hitler-Putsches von 1923 zu gedenken. Hitler erfährt vom Tod des Diplomaten - und gibt das Signal. Sofort greifen die Telefone. Goebbels kündigt vor versammelten Gauleitern und SA-Führern \"Vergeltungsmaßnahmen\" an. Aber: Die Partei werde nicht offiziell dahinterstehen. Der \"Volkszorn\" soll es machen.",
      "In Wahrheit ist alles organisiert. Briefe und Fernschreiben ergehen an die Gestapo-Dienststellen, an die SA-Einheiten, an Propagandaämter. Befehle fließen in die Provinz. Es geht um Synagogenbrand, um Zerstörung, um Verhaftungen. Und um mehr: etwa 20.000 bis 30.000 Juden sollen \"in Schutzhaft\" genommen werden. Es soll überall gleichzeitig ausbrechen - wie Spontaneität.",
    ],
  },
  {
    id: 3,
    slug: "ereignisse",
    image: synagogue3,
    title: "Die lange Nacht der Zerstörung",
    subtitle: "1.400 Synagogen brennen, 30.000 verhaftet, hunderte ermordet",
    date: "9.-10. November 1938",
    content: [
      "HANNOVER — In der Bergstraße steht das Wahrzeichen der jüdischen Gemeinde seit 1870: die Neue Synagoge. In der Nacht zum 10. November brennt sie. SA-Männer, offiziell in Zivil, aber mit Äxten und Brechstangen bewaffnet, stecken überall Feuer an. Die Polizei bleibt weg - Befehl von oben. Die Feuerwehr schützt nur Nachbargebäude.",
      "Ein Augenzeugenbericht aus Nürnberg zeigt, wie koordiniert der Wahnsinn ab läuft: Erst die Ladengeschäfte. Schaufenster werden eingeschlagen, Pöbel plündert. Dann die Wohnungen. Manche Türen werden eingetreten. Männer und Frauen werden misshandelt. Ein Kaufmann wird vom Geschäft zum Gefängnis getrieben. Am Morgen sind die meisten unter 60 Jahren nach Dachau geworfen.",
      "Die Bilanz österreichischer und deutscher Brutalität: über 1.400 Synagogen geplündert und in Brand gesetzt, etwa 7.500 jüdische Geschäfte zerstört, 30.000 Männer verhaftet und in KZs verschleppt. Wie viele ermordet wurden, bleibt unklar. Die Nazis zählen 91, Historiker schätzen 1.000 bis 2.000 - einschließlich jener, die sich aus Verzweiflung selbst töteten.",
    ],
  },
  {
    id: 4,
    slug: "weitere-schritte",
    image: synagogue4,
    title: "Das Geschäft mit dem Raub",
    subtitle: "Vom Pogrom zur systematischen Vernichtung",
    date: "Nach November 1938",
    content: [
      "BERLIN — Drei Tage nach den Pogromen treffen sich über 100 Nazi-Funktionäre im Reichsluftfahrtministerium. Göring sitzt an der Spitze. Das Thema: Wie werden die Juden schneller enteignet? Das Ergebnis ist ein zynisches Geschäft: 1 Milliarde Reichsmark \"Sühneleistung\" - bestraft für ihr eigenes Leid. Zusätzlich: Versicherungsgelder konfisziert, Vermögen zu Schleuderpreisen verkauft.",
      "Was folgt, ist stufenweise Vernichtung der Existenz. Juden dürfen keinen Handel mehr treiben, kein Handwerk, keine Märkte. Schulen sind ihnen verschlossen, Führerscheine entzogen, öffentliche Orte verboten. Im Herbst 1938 ist klar: In Deutschland kann kein deutscher Jude mehr leben. Die Folge ist Massenflucht. 1939 verlassen 80.000 Juden das Reich - mehr als in fünf Jahren davor.",
      "Großbritannien nimmt 10.000 jüdische Kinder in Kindertransporten auf. Doch für 90 Prozent von ihnen ist es das letzte Wiedersehen mit den Eltern. Herschel Grynszpan wird nach der deutschen Besetzung Frankreichs ausgeliefert. Sein weiteres Schicksal bleibt ungeklärt. Die Pogrome von 1938 sind nicht der Höhepunkt des Horrors - sie sind erst der Anfang. Der Holocaust wird folgen.",
    ],
  },
];
