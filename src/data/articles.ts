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
    title: "Der Beginn in München",
    subtitle: "Die Rede, die den Terror entfesselte",
    date: "9. November 1938, 21:00 Uhr",
    content: [
      'Gegen 21:00 Uhr versammelte sich die NS-Führung in München, um des Hitler-Putsches von 1923 zu gedenken. Während der Feierlichkeiten erhielt Hitler die Nachricht vom Tod des Diplomaten Ernst vom Rath. Goebbels verließ die Veranstaltung vorzeitig und ohne seine traditionelle Rede.',
      'Um 22:30 Uhr hielt Goebbels eine hasserfüllte antisemitische Rede, die als Signal für den Terror diente. Unmittelbar danach ergingen Befehle an die SA und die Partei, jüdische Synagogen und Geschäfte zu zerstören.',
      'Die Bilanz dieser Nacht war verheerend: Mehr als 1.300 Menschen wurden ermordet, über 30.000 jüdische Männer und Frauen verhaftet und tausende Gebäude sowie Geschäfte zerstört.',
      'Nach der Nacht verschärfte sich die Lage dramatisch: Die jüdische Gemeinschaft wurde gezwungen, eine „Sühneleistung" von einer Milliarde Reichsmark an den Staat zu zahlen. Versicherungsleistungen für die Schäden wurden vom Staat beschlagnahmt. Es folgte der fast vollständige Ausschluss der Juden aus dem deutschen Wirtschaftsleben.',
      'Die Reichspogromnacht war das Ende der relativen Sicherheit im privaten Raum. Ab diesem Zeitpunkt war jedem klar, dass der Staat jüdisches Leben und Eigentum nicht mehr schützte, sondern aktiv vernichten wollte.',
    ],
  },
  {
    id: 5,
    slug: "rolle-der-kirchen",
    image: "",
    title: "Die Rolle der Kirchen",
    subtitle: "Zwischen Schweigen und mutigen Einzelstimmen",
    date: "November 1938",
    content: [
      'Die Reaktionen der großen christlichen Kirchen waren weitestgehend von Schweigen geprägt. Weder die katholische noch die evangelische Kirchenleitung protestierten offiziell gegen die Gewalt. Dies lag teils an der Sorge um die eigene Organisation im sogenannten Kirchenkampf, teils an tief verwurzeltem Antijudaismus, der über Jahrhunderte gewachsen war.',
      'Es gab jedoch mutige Ausnahmen: Der Berliner Dompropst Bernhard Lichtenberg betete öffentlich für die verfolgten Juden und wurde später dafür verhaftet. Er starb 1943 auf dem Transport in das Konzentrationslager Dachau. Auf evangelischer Seite gab es Pfarrer der Bekennenden Kirche, wie Julius von Jan, der die Gewalttaten in einer Predigt am Bußtag 1938 verurteilte und daraufhin von der SA brutal misshandelt wurde.',
      'Das institutionelle Versagen der Kirchen wird heute als eines der dunkelsten Kapitel der deutschen Kirchengeschichte betrachtet. Die wenigen Stimmen des Widerstands konnten die organisierte Verfolgung nicht aufhalten, zeigen aber, dass individuelles Handeln auch unter größter Gefahr möglich war.',
    ],
  },
  {
    id: 6,
    slug: "wien",
    image: "",
    title: "Die Brutalität in Wien",
    subtitle: 'Österreich nach dem \u201EAnschluss\u201C',
    date: "9.–10. November 1938",
    content: [
      'Nach dem „Anschluss" Österreichs im März 1938 war die Gewalt in Wien während der Pogromnacht besonders extrem. In Wien wurden in dieser Nacht fast alle der rund 90 Synagogen und Bethäuser zerstört. Die Zahl der Morde und Suizide war hier im Verhältnis zur jüdischen Bevölkerung deutlich höher als im sogenannten Altreich.',
      'Schätzungsweise 20 Prozent aller Todesfälle während der Pogrome entfielen auf Wien allein. Die Wiener Juden waren bereits seit dem Anschluss im März systematischen Demütigungen ausgesetzt gewesen – sie wurden gezwungen, Straßen mit Zahnbürsten zu schrubben, während Schaulustige zusahen.',
      'Viele Synagogenruinen wurden nicht sofort abgerissen, sondern zynisch zweckentfremdet, etwa als Lagerhäuser oder – wie im Fall der Vereinssynagoge im 3. Bezirk – als Magazin für die Persilwerke. Diese Zweckentfremdung symbolisierte die vollständige Entwürdigung jüdischen kulturellen und religiösen Lebens.',
    ],
  },
  {
    id: 7,
    slug: "arisierung",
    image: "",
    title: "Wirtschaftliche Vernichtung",
    subtitle: 'Die \u201EArisierung\u201C jüdischen Eigentums',
    date: "Ab November 1938",
    content: [
      'Die Pogrome waren der Startschuss für die totale Verdrängung der Juden aus der Wirtschaft. Unmittelbar nach den Pogromen wurde Juden verboten, Einzelhandelsgeschäfte oder Handwerksbetriebe zu führen oder als Betriebsführer tätig zu sein.',
      'Jüdische Eigentümer wurden gezwungen, ihre Firmen und Immobilien weit unter Wert an „arische" Käufer zu veräußern. Davon profitierten nicht nur große Banken wie die Deutsche Bank oder Dresdner Bank, sondern auch Privatleute – etwa Josef Neckermann, der das Versandhaus der Familie Ruschkewitz für einen Bruchteil seines Wertes übernahm.',
      'Am 11. November 1938 wurde zudem eine Verordnung erlassen, die Juden jeglichen Waffenbesitz – auch Blankwaffen wie Dolche – streng untersagte. Dies besiegelte ihre vollständige Wehrlosigkeit gegenüber weiteren Übergriffen und machte deutlich, dass der Staat die jüdische Bevölkerung systematisch entrechtete.',
    ],
  },
  {
    id: 8,
    slug: "aktionsjuden",
    image: "",
    title: 'Die \u201EAktionsjuden\u201C',
    subtitle: "30.000 Verschleppte in den Konzentrationslagern",
    date: "November–Dezember 1938",
    content: [
      'Die etwa 30.000 verschleppten jüdischen Männer wurden in der NS-Bürokratie zynisch als „Aktionsjuden" bezeichnet. In den Konzentrationslagern Dachau, Buchenwald und Sachsenhausen mussten sie stundenlang bei extremer Kälte beim Appell stehen oder sinnlose, körperlich ruinöse Arbeit leisten.',
      'Die Bedingungen in den Lagern waren unmenschlich: Überfüllung, mangelnde Hygiene, willkürliche Gewalt durch Wachmannschaften und gezielte Demütigungen prägten den Alltag der Gefangenen. Viele überlebten die Haft nicht.',
      'Die meisten Gefangenen kamen erst frei, nachdem sie notariell beglaubigt hatten, ihr gesamtes Vermögen dem Staat zu übertragen und Deutschland innerhalb weniger Wochen zu verlassen. Die Inhaftierung diente somit nicht nur der Einschüchterung, sondern war ein kalkuliertes Instrument zur Beraubung und erzwungenen Emigration.',
    ],
  },
  {
    id: 9,
    slug: "internationale-reaktionen",
    image: "",
    title: "Internationale Reaktionen",
    subtitle: "Kindertransporte und diplomatische Isolation",
    date: "November 1938 – September 1939",
    content: [
      'Die Weltöffentlichkeit reagierte schockiert auf die Gewalt, was zu konkreten Hilfsaktionen führte. Zwischen November 1938 und dem Kriegsbeginn im September 1939 konnten etwa 10.000 jüdische Kinder aus Deutschland und Österreich nach Großbritannien gerettet werden – die sogenannten „Kindertransporte".',
      'Die Eltern mussten ihre Kinder oft am Bahnhof zurücklassen und sahen sie in vielen Fällen nie wieder. Die Kindertransporte retteten Leben, doch für die Zurückgebliebenen begann ein Weg in die Vernichtung.',
      'Diplomatisch führten die Pogrome zur Isolation des NS-Regimes: Die USA riefen ihren Botschafter Hugh Wilson dauerhaft aus Berlin zurück – ein für Friedenszeiten höchst ungewöhnlicher Schritt, der die tiefen Risse im Verhältnis zum nationalsozialistischen Deutschland verdeutlichte. Dennoch blieben die Grenzen vieler Länder für jüdische Flüchtlinge weitgehend verschlossen.',
    ],
  },
  {
    id: 10,
    slug: "juristische-aufarbeitung",
    image: "",
    title: "Juristische Aufarbeitung",
    subtitle: "Unvollständige Gerechtigkeit nach 1945",
    date: "Nach 1945",
    content: [
      'In den Nachkriegsprozessen wurden die Pogrome nur teilweise gesühnt. Es gab zwar die sogenannten „Pogromprozesse" vor deutschen Gerichten, doch viele Täter erhielten nur milde Strafen oder wurden aufgrund von „Befehlsnotstand" freigesprochen.',
      'Viele der enteigneten Besitztümer aus der „Arisierung" wurden erst nach langjährigen Entschädigungsverfahren teilweise zurückgegeben oder finanziell kompensiert. Zahlreiche Opfer und ihre Nachkommen kämpften jahrzehntelang um Wiedergutmachung – oft vergeblich.',
      'Diese Details verdeutlichen, dass der 9. November 1938 nicht nur eine Nacht der Gewalt war, sondern ein bürokratisch und ideologisch vorbereiteter Raubzug, der das Ziel hatte, die jüdische Bevölkerung in Deutschland physisch und wirtschaftlich zu vernichten. Die unvollständige juristische Aufarbeitung bleibt bis heute eine offene Wunde der deutschen Nachkriegsgeschichte.',
    ],
  },
];
