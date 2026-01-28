
// default preisboxen (ohne zahlen)
const google = {
  icon: "Paket 1",
  title: "Google Platz 1",
  subTitle: "Website Optimierungen",
  introText:
    " Wir optimieren Deine Website, damit Du in der Google-Suche & bei Google Maps zu vielen Suchbegriffen oben rankst. Und mehr Anfragen generierst.",
  services: [
    "Persönlicher Ansprechpartner",
    "Fortlaufende Keyword Recherchen",
    "Onpage Optimierung",
    "Schema.org Umsetzung",
    "Mind. ein Backlink im Monat",
    "Mind. ein Text im Monat",
    "Erstellung neuer SEO-Landingpages",
    "Wettbewerbsanalysen",
    "Strategische Anpassungen",
  ],
  closingText: "Wir sind keine Webdesigner und führen keine technischen Änderungen durch. Natürlich passen wir die Strategie an Deine Firma individuell an.",
  outroText: <div>
    <span className="mt-4 block text-center font-light">
      Preisanfrage unter
    </span>
    <span className="block text-center text-custom-red">
      {" "}
      jan@jankroesche.de
    </span>
  </div>
};
const chatGPT = {
  icon: "Paket 2",
  title: "ChatGPT Platz 1",
  subTitle: "Website Optimierungen",
  introText:
    "Wir optimieren Deine Website, damit Deine Firma in den Antworten der KI-Systeme ChatGPT, Gemini, Perplexity & Copilot erscheint und Du mehr Anfragen generierst.",
  services: [
    "Persönlicher Ansprechpartner",
    "Fortlaufende Prompt Recherchen",
    "Website Optimierung",
    "Schema.org Umsetzung",
    "Mind. ein Backlink im Monat",
    "Mind. ein Text im Monat",
    "Content Optimierung",
    "Mind. eine digitale PR Aktion im Monat",
    "Strategische Anpassungen",
  ],
  closingText: "Wir sind keine Webdesigner und führen keine technischen Änderungen durch. Natürlich passen wir die Strategie an Deine Firma individuell an.",
  outroText: <div>
    <span className="mt-4 block text-center font-light">
      Preisanfrage unter
    </span>
    <span className="block text-center text-custom-red">
      {" "}
      jan@jankroesche.de
    </span>
  </div>

};

const googleAds = {
  icon: "Paket 3",
  title: "Google Ads",
  subTitle: "Kurzfr. Steigerung der Sichtbarkeit",
  introText:
    "Kurzfristige Steigerung Deiner Google Sichtbarkeit durch Werbeanzeigen auf Google und Bing. Damit Du von Deinen Kunden schnell gefunden wirst und Anfragen bekommst.",
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
  ],
  closingText: "Wir sind keine Webdesigner und führen keine technischen Änderungen durch. Natürlich passen wir die Strategie an Deine Firma individuell an.",
  outroText: <div>
    <span className="mt-4 block text-center font-light">
      Preisanfrage unter
    </span>
    <span className="block text-center text-custom-red">
      {" "}
      jan@jankroesche.de
    </span>
  </div>
};

const pricingBoxes = [google, chatGPT, googleAds];

//workshops
const seoWorkshop = {
  icon: "SEO",
  title: "SEO Workshop",
  subTitle: "Website Optimierungen",
  introText:
    "Im SEO Workshop lernst Du im ersten Teil die theoretischen Grundlagen von SEO. In der zweiten Hälfte des Workshops zeigen wir Dir konkrete SEO für Deine Seite.",
  services: [
    "Dauer: 2,5 h + 0,5h Q&A",
    "Hälfte 1: Theoretische Grundlagen von SEO",
    "Hälfte 2: Konkrete Tipps für Deine Seite",
    "Im Vorfeld des Workshops analysieren wir Deine Website und Deine Keywords",
    "Unbegrenzte Teilnehmerzahl",
    "Der Workshop findet über Teams statt",
    "Preis: 600 Euro netto",
  ],
  closingText: "",
  outroText: <div>
    <span className="mt-4 block text-center font-light">
      Terminvereinbarung & Rücksprache unter
    </span>
    <span className="block text-center text-custom-red">
      {" "}
      jan@jankroesche.de
    </span>
  </div>
};

const geoWorkshop = {
  icon: "GEO",
  title: "GEO Workshop",
  subTitle: "Website Optimierungen",
  introText:
    "Im GEO Workshop lernst Du, wie KI Suchmaschinen funktionieren und die Grundlagen von Generative Engine Optimization. Zudem bekommst Du konkrete Tipps für Deine Seite.",
  services: [
    "Dauer: 2,5 h + 0,5h Q&A",
    "Hälfte 1: Theoretische Grundlagen von GEO",
    "Hälfte 2: Konkrete Tipps für Deine Seite",
    "Im Vorfeld des Workshops analysieren wir Deine Website und Deine Prompts (Keywords)",
    "Unbegrenzte Teilnehmerzahl",
    "Der Workshop findet über Teams statt",
    "Preis: 600 Euro netto",
  ],
  closingText: "",
  outroText: <div>
    <span className="mt-4 block text-center font-light">
    Terminvereinbarung & Rücksprache unter
    </span>
    <span className="block text-center text-custom-red">
      {" "}
      jan@jankroesche.de
    </span>
  </div>
};

const adsWorkshop = {
  icon: "Google Ads",
  title: "Google Ads Workshop",
  subTitle: "Kurzfr. Steigerung der Sichtbarkeit",
  introText:
    "Im Google Ads Workshop lernst Du die Grundlagen, wie man Google Werbung schalten kann. Zudem analysieren wir Deine Keywords und schauen uns eine mögliche Kampagnenstrategie an.",
  services: [
    "Dauer: 2,5 h + 0,5h Q&A",
    "Hälfte 1: Theoretische Grundlagen von Google Ads",
    "Hälfte 2: Praktische Umsetzung von Google Ads",
    "Im Vorfeld des Workshops analysieren wir Deine Keywords und die Klickpreise",
    "Unbegrenzte Teilnehmerzahl",
    "Der Workshop findet über Teams statt",
    "Preis: 600 Euro netto",
  ],
  closingText: "",
  outroText: <div>
    <span className="mt-4 block text-center font-light">
      Terminvereinbarung & Rücksprache unter
    </span>
    <span className="block text-center text-custom-red">
      {" "}
      jan@jankroesche.de
    </span>
  </div>

};

const workshops = [seoWorkshop, geoWorkshop, adsWorkshop]

// geo-tracker Preisboxen
const tenPrompts = {
  title: "10 Prompts",
  subTitle: "Wir tracken deine 10 wichtigsten Prompts",
  introText:
    "Wir überwachen die Sichtbarkeit deiner wichtigsten Prompts über alle relevanten KI-Plattformen hinweg. So weißt du genau, wie deine Marke in der Welt der künstlichen Intelligenz wahrgenommen wird.",
  services: [
    "Tracking von 10 Prompts",
    "Zweiwöchentliche Berichte",
    "ChatGPT, Gemini, Perplexity und Copilot",
    "Persönlicher Ansprechpartner",
    "Schnelle Installation",
    "Monatlich kündbar",
  ],
  price: 30,
};
const twentyPrompts = {
  title: "20 Prompts",
  subTitle: "Wir tracken deine 20 wichtigsten Prompts",
  introText:
    "Wir überwachen die Sichtbarkeit deiner wichtigsten Prompts über alle relevanten KI-Plattformen hinweg. So weißt du genau, wie deine Marke in der Welt der künstlichen Intelligenz wahrgenommen wird.",
  services: [
    "Tracking von 20 Prompts",
    "Zweiwöchentliche Berichte",
    "ChatGPT, Gemini, Perplexity und Copilot",
    "Persönlicher Ansprechpartner",
    "Schnelle Installation",
    "Monatlich kündbar",
  ],
  price: 55,
};
const thirtyPrompts = {
  title: "30 Prompts",
  subTitle: "Wir tracken deine 30 wichtigsten Prompts",
  introText:
    "Wir überwachen die Sichtbarkeit deiner wichtigsten Prompts über alle relevanten KI-Plattformen hinweg. So weißt du genau, wie deine Marke in der Welt der künstlichen Intelligenz wahrgenommen wird.",
  services: [
    "Tracking von 30 Prompts",
    "Zweiwöchentliche Berichte",
    "ChatGPT, Gemini, Perplexity und Copilot",
    "Persönlicher Ansprechpartner",
    "Schnelle Installation",
    "Monatlich kündbar",
  ],
  price: 80,
};

const geoTrackerPriceBoxes = [tenPrompts, twentyPrompts, thirtyPrompts]



export { pricingBoxes, geoTrackerPriceBoxes, workshops }
