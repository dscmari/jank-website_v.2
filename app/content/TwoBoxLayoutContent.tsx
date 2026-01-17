import LinkAdsKurs from "../components/links/LinkAdsKurs";
import LinkGEOKurs from "../components/links/LinkGEOKurs";
import LinkSEOKurs from "../components/links/LinkSEOKurs";

export const adsBerater = [
  {
    iconText: "Präsenz",
    title: "Mehr Sichtbarkeit durch Google Ads",
    subtitle: "Ganz oben bei Google",
    text: "Unsere Aufgabe ist klar: Wir bringen Deine Firmen-Website ganz nach oben in die Google Suche. Dabei steuern wir Deine Google Werbung so, dass wir genau Deine Zielgruppe erreichen und nur die richtigen Personen auf Deine Website bringen. Deine Vorteile:",
    services: [
      "Du erscheinst in der Google Suche ganz oben",
      "Du wirst von Deinen potentiellen Kunden wahrgenommen",
      "Deine Kunden finden Dich dort, wo sie suchen",
      "Du stehst über Deinen Wettbewerbern bei Google",
      "Du bekommst die richtigen Menschen auf die Seite",
      "Du bestehst langfristig am Markt",
    ],
    linkComponent: <LinkAdsKurs />,
  },
  {
    iconText: "Angebot",
    title: "Unser Preispaket für Dich",
    subtitle: "Werbeanzeigen auf Google und Bing",
    text: "Kurzfristige Steigerung Deiner Google Sichtbarkeit durch Werbeanzeigen auf Google und Bing. Damit Du von Deinen Kunden schnell gefunden wirst und Anfragen bekommst.",
    services: [
    "Persönlicher Ansprechpartner",
    "Fortlaufende Suchbegriff Recherche",
    "Einrichtung der Kampagne",
    "Erstellung der Anzeigentexte",
    "Andauernde Optimierung der Kampagne",
    "Ausschluss falscher Keywords",
    "Erstellung passender Landingpages",
    "Wettbewerbsanalysen",
    "Strategische Anpassungen",
    ]
  },
];

export const geoBeraterTwoBox = [
  {
    iconText: "KI Sichtbarkeit",
    title: "Mehr KI Sichtbarkeit mit Deiner Firma",
    subtitle: "Präsens in allen gängigen KI Tools",
    text: "Unsere Aufgabe ist klar: Wir bringen Deine Firmenwebsite in die KI-Antworten von ChatGPT, Gemini, Copilot und Perplexity, damit Du künftig die Nummer 1 der Branche bist und mehr Neukunden gewinnst.",
    services: [
    "Für wichtige Prompts erscheinst Du in der KI Antwort",
    "Du bekommst eine hohe Sichtbarkeit in KI Systemen",
    "Deine Kunden finden Dich dort, wo sie suchen",
    "Du ziehst an Deinen Wettbewerbern vorbei",
    "Du erhältst mehr Anfragen",
    "Du bestehst langfristig am Markt",
    ],
    linkComponent: <LinkGEOKurs />,
  },
  {
    iconText: "Angebot",
    title: "Unser Preispaket für Dich",
    subtitle: "Für Reichweite in den KI Tools",
    text: "Website-Optimierungen, damit Deine Firma in den Antworten der KI Systeme ChatGPT, Gemini, Perplexity & Copilot erscheint. Und Du mehr Anfragen generierst.",
    services: [
    "Persönlicher Ansprechpartner",
    "Fortlaufende PromptRecherchen",
    "Website Optimierung",
    "Schema.org Umsetzung",
    "Mind. ein Backlink im Monat",
    "Mind. ein Text im Monat",
    "Content Optimierung",
    "Mind. eine digitale PR Aktion im Monat",
    "Strategische Anpassungen",
    ],
  },
];
export const seoBeraterTwoBox = [
  {
    iconText: "Google Sichtbarkeit",
    title: "Mehr Google Sichtbarkeit mit deiner Firma",
    subtitle: "Ganz nach oben in den Rankings",
    text: "Wir bringen Dich und Deine Firmenwebsite bei Google ganz nach oben. Das ist unsere Aufgabe. Firmen, die bei Google nicht sichtbar sind, gehen beim Neukundengeschäft leer aus.",
    services: [
    "Für wichtige Keywords rankst du auf Platz 1",
    "Du bekommst eine hohe Sichtbarkeit auf Google",
    "Deine Kunden finden Dich dort, wo sie suchen",
    "Du bist im Ranking über Deinen Wettbewerbern ",
    "Du erhältst mehr Anfragen über die Website",
    "Du bestehst langfristig am Markt",
    ],
    linkComponent: <LinkSEOKurs className="w-full text-left" />,
  },
  {
    iconText: "Angebot",
    title: "Unser Preispaket für Dich",
    subtitle: "Für ein starkes Google Ranking",
    text: "Website-Optimierungen, damit Du in der Google-Suche & bei Google Maps zu vielen Suchbegriffen oben rankst. Und mehr Anfragen generierst.",
    services: [
    "Persönlicher Ansprechpartner",
    "Fortlaufende Suchbegriff Recherche",
    "OnPage Optimierung",
    "Schema.org Umsetzung",
    "Mind. ein Backlink im Monat",
    "Mind. ein Text im Monat",
    "Erstellung neuer SEO Landingpages",
    "Wettbewerbsanalysen",
    "Strategische Anpassungen",
    ]
  },
]