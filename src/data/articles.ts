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
    slug: "die-nacht",
    image: synagogue1,
    title: "Die Nacht bricht herein",
    subtitle: "Hannover, 9. November 1938",
    date: "9. November 1938",
    content: [
      'Die Ausschreitungen ereigneten sich in der Nacht vom 9. auf den 10. November 1938 sowie in den darauffolgenden Tagen. Sie fanden zeitgleich im gesamten Deutschen Reich statt \u2013 einschlie\u00dflich \u00d6sterreichs und des Sudetenlandes.',
      'Die Reichspogromnacht (oft auch als \u201eNovemberpogrome\u201c bezeichnet) war ein vom nationalsozialistischen Regime organisiertes und gelenktes Gewaltverbrechen gegen die j\u00fcdische Bev\u00f6lkerung im Deutschen Reich. Sie markiert den \u00dcbergang von der Diskriminierung zur systematischen Verfolgung und Vernichtung.',
      'Heutzutage verwenden Historiker bevorzugt Begriffe wie Novemberpogrome oder Reichspogromnacht. Der Begriff \u201eReichskristallnacht\u201c wurde damals von den T\u00e4tern oder im Berliner Volksmund gepr\u00e4gt. Er gilt als besch\u00f6nigend, da er das Bild von \u201eglitzerndem Glas\u201c nutzt, um die Brutalit\u00e4t und das vergossene Blut zu \u00fcberdecken.',
    ],
  },
  {
    id: 2,
    slug: "der-vorwand",
    image: synagogue2,
    title: "Der Vorwand",
    subtitle: "Das Attentat von Paris",
    date: "7. November 1938",
    content: [
      'Als offizieller Anlass diente ein Attentat in Paris: Der 17-j\u00e4hrige Jude Herschel Grynszpan hatte am 7. November auf den deutschen Diplomaten Ernst vom Rath geschossen. Als dieser am 9. November starb, nutzte die NS-F\u00fchrung \u2013 insbesondere Propagandaminister Joseph Goebbels \u2013 dies als Vorwand, um eine \u201espontane Entladung des Volkszorns\u201c zu inszenieren.',
      'Ob Hitler tats\u00e4chlich erst w\u00e4hrend der Feierlichkeiten zum Gedenken des Hitler-Putsches von 1923 vom Tod des Diplomaten erfuhr, bleibt historisch umstritten. Fest steht jedoch, dass die Nachricht als Katalysator f\u00fcr die bereits geplante Gewalt diente.',
    ],
  },
  {
    id: 3,
    slug: "zerstoerung",
    image: synagogue3,
    title: "Zerst\u00f6rung und Terror",
    subtitle: "Die Bilanz des Grauens",
    date: "9.\u201310. November 1938",
    content: [
      'Die Gewalt war keineswegs spontan, sondern wurde von der SA und SS in Zivilkleidung durchgef\u00fchrt oder angeleitet. Polizei und SD wurden angewiesen, nicht einzugreifen.',
      '\u00dcber 1.400 Synagogen und Gebetsr\u00e4ume wurden gepl\u00fcndert und in Brand gesetzt. Rund 7.500 j\u00fcdische Gesch\u00e4fte wurden zertr\u00fcmmert \u2013 daher der Name \u201eKristallnacht\u201c, wegen der vielen Scherben auf den Stra\u00dfen.',
      'Hunderte Menschen wurden ermordet oder in den Selbstmord getrieben. Etwa 30.000 j\u00fcdische M\u00e4nner wurden verhaftet und in die Konzentrationslager Dachau, Buchenwald und Sachsenhausen verschleppt, um sie zur Auswanderung zu zwingen und ihr Verm\u00f6gen zu rauben.',
    ],
  },
  {
    id: 4,
    slug: "muenchen",
    image: synagogue4,
    title: "Der Beginn in M\u00fcnchen",
    subtitle: "Die Rede, die den Terror entfesselte",
    date: "9. November 1938, 21:00 Uhr",
    content: [
      'Gegen 21:00 Uhr versammelte sich die NS-F\u00fchrung in M\u00fcnchen, um des Hitler-Putsches von 1923 zu gedenken. W\u00e4hrend der Feierlichkeiten erhielt Hitler die Nachricht vom Tod des Diplomaten Ernst vom Rath. Goebbels verlie\u00df die Veranstaltung vorzeitig und ohne seine traditionelle Rede.',
      'Um 22:30 Uhr hielt Goebbels eine hasserf\u00fcllte antisemitische Rede, die als Signal f\u00fcr den Terror diente. Unmittelbar danach ergingen Befehle an die SA und die Partei, j\u00fcdische Synagogen und Gesch\u00e4fte zu zerst\u00f6ren.',
      'Die Bilanz dieser Nacht war verheerend: Mehr als 1.300 Menschen wurden ermordet, \u00fcber 30.000 j\u00fcdische M\u00e4nner und Frauen verhaftet und tausende Geb\u00e4ude sowie Gesch\u00e4fte zerst\u00f6rt.',
      'Nach der Nacht versch\u00e4rfte sich die Lage dramatisch: Die j\u00fcdische Gemeinschaft wurde gezwungen, eine \u201eS\u00fchneleistung\u201c von einer Milliarde Reichsmark an den Staat zu zahlen. Versicherungsleistungen f\u00fcr die Sch\u00e4den wurden vom Staat beschlagnahmt. Es folgte der fast vollst\u00e4ndige Ausschluss der Juden aus dem deutschen Wirtschaftsleben.',
      'Die Reichspogromnacht war das Ende der relativen Sicherheit im privaten Raum. Ab diesem Zeitpunkt war jedem klar, dass der Staat j\u00fcdisches Leben und Eigentum nicht mehr sch\u00fctzte, sondern aktiv vernichten wollte.',
    ],
  },
];
