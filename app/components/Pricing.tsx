import { GoDiamond } from "react-icons/go";

type Props = {
  className?: string;
};

export default function Pricing({ className }: Props) {
  return (
    <div className={`lg:mb-24 lg:mx-8 2xl:mx-32 ${className}`}>
      <h2 className="mx-4 lg:mx-0 text-center !mb-8 lg:!text-3xl lg:mt-16 lg:!pb-8">
        Unsere 3 Preispakete
      </h2>
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-8 lg:justify-around">
        <div className="flex flex-col justify-between lg:flex-1 bg-custom-white lg:m-0 p-8 shadow-lg rounded-lg dark">
          <div>
            <h2 className="text-center">Paket 1: Google Platz 1</h2>
            <p>
              Website-Optimierungen, damit Du in der Google-Suche & bei Google
              Maps zu vielen Suchbegriffen oben rankst. Und mehr Anfragen
              generierst.{" "}
            </p>
            <div className="my-8 flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fester, persönlicher Ansprechpartner</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fortlaufende Keyword-Recherchen</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Onpage-Optimierung (Titles, Metas …)</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Schema.org Umsetzung</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Ein Backlink pro Monat (ggf. mehr)</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Ein Text pro Monat (ggf. mehr)</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Erstellung neuer SEO-Landingpages</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Wettbewerbsanalysen</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Strategie Anpassungen bei Updates</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 pb-8 border-b-1 border-slate-700">
              Wir sind keine Webdesigner und führen keine technischen Änderungen
              durch. Natürlich passen wir die Strategie an Deine Firma
              individuell an.
            </p>
            <span className="mt-4 block text-center">Preisanfrage unter</span>
            <span className="block text-center text-custom-red">
              {" "}
              jan@jankroesche.de
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:flex-1 bg-custom-white lg:m-0 p-8 shadow-lg rounded-lg dark">
          <div>
            <h2 className="text-center">Paket 2: Chat GPT Platz 1</h2>
            <p>
              Website-Optimierungen, damit Deine Firma in den Antworten der
              KI-Systeme ChatGPT, Gemini, Perplexity & Copilot erscheint. Und Du
              mehr Anfragen generierst.
            </p>
            <div className="my-8 flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fester, persönlicher Ansprechpartner</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fortlaufende Prompt-Recherchen</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Website-Optimierung (Titles, Metas …)</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Schema.org & llms.txt Umsetzung</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Ein Backlink pro Monat (ggf. mehr)</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Ein Text pro Monat (ggf. mehr)</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Content-Optimierung für KI-Sichtbarkeit</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Eine Digital PR Aktion pro Monat</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Strategie Anpassungen bei Updates</span>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-4 pb-8 border-b-1 border-slate-700">
              Wir sind keine Webdesigner und führen keine technischen Änderungen
              durch. Natürlich passen wir die Strategie an Deine Firma
              individuell an.
            </p>
            <span className="mt-4 block text-center">Preisanfrage unter</span>
            <span className="block text-center text-custom-red">
              {" "}
              jan@jankroesche.de
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:flex-1 bg-custom-white lg:m-0 p-8 shadow-lg rounded-lg dark">
          <div>
            <h2 className="text-center">Paket 3: Google Ads</h2>
            <p>
              Kurzfristige Steigerung Deiner Google Sichtbarkeit durch
              Werbeanzeigen auf Google und Bing. Damit Du von Deinen Kunden
              schnell gefunden wirst und Anfragen bekommst.
            </p>
            <div className="my-8 flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fester, persönlicher Ansprechpartner</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fortlaufende Suchbegriff-Recherche</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Einrichtung der Kampagne</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Erstellung der Anzeigentexte</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Fortlaufende Kampagnen-Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Ausschluss „falscher“ Keywords</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Ggf. Erstellung passender Landingpages</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Wettbewerbsanalysen</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  className="h-4 flex-shrink-0"
                />
                <span>Strategie Anpassungen bei Updates</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 pb-8 border-b-1 border-slate-700">
              Wir sind keine Webdesigner und führen keine technischen Änderungen
              durch. Natürlich passen wir die Strategie an Deine Firma
              individuell an.
            </p>
            <span className="mt-4 block text-center">Preisanfrage unter</span>
            <span className="block text-center text-custom-red">
              {" "}
              jan@jankroesche.de
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
