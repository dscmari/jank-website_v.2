
// default preisboxen (ohne zahlen)
const google = {
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
};
const chatGPT = {
  title: "ChatGPT Platz 1",
  subTitle: "Website Optimierungen",
  introText:
    "Wir optimieren Deine Website, damit Deine Firma in den Antworten der KI-Systeme ChatGPT, Gemini, Perplexity & Copilot erscheint und Du mehr Anfragen generierst.",
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
};

const googleAds = {
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
};

const pricingBoxes = [google, chatGPT, googleAds];


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
  price: 35,
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



export {pricingBoxes, geoTrackerPriceBoxes}
