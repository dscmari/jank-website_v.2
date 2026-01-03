// Der Title Tag: GEO Berater Jan Krösche | Sichtbarkeit bei ChatGPT & Gemini

import {
  GiAirplaneDeparture,
  GiArchiveResearch,
  GiArtificialHive,
  GiGears,
} from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";
import { LuScreenShare } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import sections from "@/app/utils/referencesList";
import WebsiteCheck from "@/app/components/WebsiteCheck";
import { GoDiamond } from "react-icons/go";
import ATF from "@/app/components/ATF";
import Contact from "@/app/components/Contact";
import LinkGeoCheck from "@/app/components/LinkGeoCheck";

export default function GEOBerater() {
  const titleATF = "Dein GEO Berater für starke KI Sichtbarkeit";
  const subtitleATF =
    "GEO Berater Jan Krösche & Team sorgen dafür, dass Deine Firma in den KI-Antworten von ChatGPT, Gemini und Copilot erscheint.";
  const textATF =
    "Wir optimieren Deine Website , damit Du in den Antworten der KI Systeme zitiert wirst und nicht Deine Wettbewerber. Damit Du langfristig die meisten Kunden Deiner Branche gewinnst.";

  const boxes = [
    {
      icon: <GiArtificialHive color="rgb(231,0,53)" size="3rem" />,
      title: "GEO Präsenz",
      text: "Als GEO Betater unterstützen wir Dich, damit Deine Website in den KI Antworten von ChatGPT und Co. zitiert wird.",
      link: "",
    },
    {
      icon: <GiArchiveResearch color="rgb(231,0,53)" size="3rem" />,
      title: "Recherche",
      text: "Wir recherchieren die Prompts, die Deine Kunden innerhalb der KI Systeme suchen und identifikation Deine Zielgruppe",
      link: "",
    },
    {
      icon: <GrOptimize color="rgb(231,0,53)" size="3rem" />,
      title: "Optimierung",
      text: " Wir optimieren wichtige Teile Deiner Website wie Title Tags, Meta Descriptions, Überschriften und weitere Inhalte",
      link: "",
    },
    {
      icon: <LuScreenShare color="rgb(231,0,53)" size="3rem" />,
      title: "Reichweite",
      text: "Wir verbreiten Deine Firma im Netz über Backlinks und kleinere PR-Aktionen und sorgen so für mehr Aufmerksamkeit für Deine Website",
      link: "",
    },
    {
      icon: <GiAirplaneDeparture color="rgb(231,0,53)" size="3rem" />,
      title: "Content Verbesserung",
      text: " Wir erweitern und optimieren Deinen Content, damit die KI Systeme Dich häufiger zitieren können",
      link: "",
    },
    {
      icon: <GiGears color="rgb(231,0,53)" size="3rem" />,
      title: "GEO Techniken",
      text: "Wir setzen wichtige GEO Techniken um wie llms.txt und schema.org-Integrationen ein, damit deine Website von den KI Anbietern gefunen wird",
      link: "",
    },
  ];

  return (
    <div>
      <ATF
        title={titleATF}
        subtitle={subtitleATF}
        text={textATF}
        LinkComponent={<LinkGeoCheck />}
        imgPathMobile="/images/portraits/39321-4194.jpg"
        imgPathDesktop="/images/portraits/39321-4127_01.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Mit unserer <span className="text-custom-red">GEO Beratung</span>{" "}
            wirst Du bei ChatGPT, Gemini & Co. am häufigsten zitiert
          </h2>
          <p>
            Unter „GEO“ versteht man die Optimierung für generative
            Suchmaschinen. Einfach ausgedrückt: Man optimiert Firmen-Websites
            dahingehend, dass sie extrem häufig bei ChatGPT, Gemini, Copilot und
            anderen KI-Chatsystemen auftauchen.
          </p>
          <p className="py-4">
            Unseren Kunden „Schwabinger Wahrheit“ – ein Hotel in München –
            optimieren wir seit 2022 mit dem Ziel, in der KI sichtbarer zu sein.
            Für die Suchphrase (= Prompt) „Bestes Familienhotel in Schwabing“
            erscheint die Hotel-Website unseres Kunden auf Platz 1 in der
            Antwort. Genau so funktioniert die Kundengewinnung von Morgen.{" "}
          </p>
          <p>
            Wir stehen Unternehmen aus Deutschland, Österreich, Südtirol und der
            Schweiz als GEO Berater zur Seite. Wir helfen Dir, die Nummer 1 in
            der KI zu werden.
          </p>
          <button className="mt-4 lg:mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-1/3 2xl:w-2/3 flex items-center justify-between">
            <LinkGeoCheck />
            <FiArrowRight />
          </button>
        </div>
        <div className="mt-12 lg:mt-0 xl:min-w-1/2 2xl:min-w-1/3">
          <img
            src="/images/ki_screenshot.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
            className=""
          />
          <p className="p-8 italic 2xl:mx-auto text-center lg:text-start 2xl:text-center">
            "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 relative lg:bg-custom-white">
        <div className="px-4 lg:px-0 lg:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Das <span className="text-custom-red">Marketing der Zukunft </span>{" "}
            hat schon begonnen: Firmen, die in der KI nicht erscheinen, gehen in
            der neuen Welt unter
          </h2>
        </div>
        <div className="text-lg px-4 lg:px-0">
          <p>
            Ja, es ist immer noch wichtig, im Internet und vor allem bei Google
            präsent zu sein. Mit 90 Prozent hat Google immer noch den größten
            Marktanteil auf dem Suchmaschinenmarkt. KI-Chatsysteme wie ChatGPT,
            Copilot, Gemini, Claude oder Perplexity werden aber immer
            alltagsfähiger und gewinnen immer mehr Nutzer. Für Dich und Deine
            Firma bedeutet das: Du musst alles daran setzen, auch bei ChatGPT
            und Co. aufzutauchen, um künftig Anfragen generieren zu können.
          </p>
        </div>
        <Contact className="p-4 lg:p-8 mt-12" />
      </section>

      <section className="mt-24 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:p-32 lg:py-24 2xl:gap-32 2xl:justify-center ">
        <div className="min-w-1/2 2xl:min-w-1/3 relative">
          <div className="lg:absolute -top-48">
            <img
              src="/images/portraits/39321-4133web.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
            />
            <p className="text-center lg:text-start p-8 italic mx-auto text-lg">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:m-0 flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Jan Krösche & Team: Deine GEO Berater für mehr{" "}
            <span className="text-custom-red">Sichtbarkeit in KI Systemen</span>
          </h2>
          <p>
            Die Neukundengewinnung von Firmen ändert sich im KI-Zeitalter.
            Menschen nutzen zunehmenden KI-Chats oder gar KI-Agenten, um nach
            Antworten auf ihre Probleme zu suchen. Das bedeutet automatisch
            auch, dass Produkte und Dienstleistungen immer häufiger über
            ChatGPT, Gemini und Co. gesucht werden. „Wer ist der beste Makler in
            München?“, „Welche Laufschuhe eignen sich für Waldläufe?“, „Zeig mir
            ein zentrales, kleines Hotel in Venedig“. Menschen „prompten“ nach
            Phrasen dieser Art.
          </p>
          <p>
            Firmen, die innerhalb der KI-Antworten erscheinen, treten direkt mit
            der Zielgruppe in Kontakt. Marketingexperten aus den USA gehen davon
            aus, dass die Sichtbarkeit innerhalb von ChatGPT und Gemini zum
            wichtigsten Kundenlieferant für Unternehmen in Zukunft werden wird.{" "}
          </p>
          <p>
            Als GEO Berater haben wir uns auf dieses Thema spezialisiert. Wir
            helfen Dir, dass Deine Firmen-Website am häufigsten in den
            KI-Antworten auftauchen.
          </p>
          <button className="mt-8 lg:mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-2/3 flex items-center justify-between">
            <LinkGeoCheck />
            <FiArrowRight />
          </button>
        </div>
      </section>
      <section className="mt-24 mx-4 lg:m-0 lg:p-32 relative lg:bg-custom-white">
        <div className="lg:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            <span className="text-custom-red">
              {" "}
              Persönliche GEO Dienstleistung
            </span>{" "}
            aus einer Hand
          </h2>
        </div>
        <div className="text-lg">
          <p>
            Wir wissen, dass unsere Kunden keine GEO Profis sind und dass die
            Thematik erklärungsbedürftig ist. Aus diesem Grund verstehen wir als
            Dienstleister, der Kundenservice in der Zusammenarbeit priorisiert.
            Du erhältst kein „Ticket-System“ oder bist bei uns nur irgendeine
            Kundennummer. Bei uns hast Du einen festen GEO Berater, der sich in
            Dein Projekt einarbeitet und durchgehend für Dich zuständig ist.
            Alle GEO Dienstleistungen erfolgen aus einer Hand. Damit das
            Handling für Dich einfach ist.
          </p>
          <div className="flex flex-col lg:flex-row gap-12 mt-12 lg:mt-24">
            <div className="bg-custom-white lg:bg-white flex-1 flex flex-col gap-8 justify-between leading-8 p-8 lg:p-12 rounded-lg">
              <h2 className="text-center">
                Mehr KI-Sichtbarkeit mit Deiner Firma
              </h2>
              <p className="leading-6">
                Unsere Aufgabe ist klar: Wir bringen Deine Firmenwebsite in die
                KI-Antworten von ChatGPT, Gemini, Copilot und Perplexity, damit
                Du künftig die Nummer 1 der Branche bist und mehr Neukunden
                gewinnst. Deine Vorteile:
              </p>
              <div className="flex flex-col gap-4 lg:text-xl leading-6">
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>
                    Für wichtige Prompts erscheinst Du in der KI-Antwort
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Du bekommst eine hohe Sichtbarkeit in KI Systemen</span>
                </div>
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Deine Kunden finden Dich dort, wo sie suchen</span>
                </div>
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Du ziehst an Deinen Wettbewerbern vorbei</span>
                </div>
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Du erhältst mehr Anfragen</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Du bestehst langfristig am Markt</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
                <LinkGeoCheck />
                <FiArrowRight />
              </button>
            </div>
            <div className="bg-custom-white lg:bg-white flex-1 flex flex-col gap-8 justify-between leading-8 p-8 lg:p-12 rounded-lg">
              <h2 className="text-center">Unser Preispaket für Dich</h2>
              <p className="leading-6">
                Website-Optimierungen, damit Deine Firma in den Antworten der KI
                Systeme ChatGPT, Gemini, Perplexity & Copilot erscheint. Und Du
                mehr Anfragen generierst.
              </p>
              <div className="flex flex-col gap-4 lg:text-xl leading-6">
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
                  <span>Website Optimierung</span>
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
                  <span>Mindestens ein Backlink pro Monat </span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Mindestens ein Text pro Monat</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Content-Optimierung für KI-Sichtbarkeit</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Eine Digital PR Aktion pro Monat</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>Strategie Anpassungen bei Updates</span>
                </div>
              </div>
              <div>
                <p className="text-center">Preisanfrage unter</p>
                <span className="block text-center text-custom-red">
                  jan@jankroesche.de
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24 py-12 lg:pt-24 px-4 lg:m-0 lg:px-32 bg-custom-white">
        <h2 className="lg:text-center lg:!text-3xl/10 tracking-wide font-semibold">
          So kommst Du in den{" "}
          <span className="text-custom-red">KI Antworten</span> ganz nach oben
        </h2>
        <div className="pt-8 lg:pt-16 lg:pb-32 grid lg:grid-cols-3 gap-12 lg:gap-4 max-w-5xl mx-auto">
          {boxes.map((e, index) => (
            <div
              key={index}
              className="lg:aspect-square flex flex-col justify-between p-8 bg-white rounded-xl lg:shadow-lg"
            >
              <div className="flex flex-col pt-4">
                {e.icon}
                <h2 className="pt-8">{e.title}</h2>
                <p className="lg:text-sm">{e.text}</p>
              </div>

              {/* <button className="self-start rounded-xl text-custom-red bg-custom-red-op px-4 py-2 mt-8 text-sm">
                Mehr Infos
              </button> */}
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 pt-24 pb-12 lg:pb-32 lg:px-32 bg-custom-white">
        <h2 className="lg:text-center lg:!text-3xl/10 tracking-wide font-semibold">
          Seit 2017 haben wir schon
          <span className="text-custom-red">500 Firmen</span> über im SEO
          geholfen
        </h2>
        <div className="lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch">
          {sections.slice(0, 4).map((s: any, index: number) => (
            <section key={index} className="flex flex-col">
              <div className="h-full bg-white p-8 rounded-xl">
                <div className="flex gap-1">
                  <BsFillStarFill color="#FFB236" />{" "}
                  <BsFillStarFill color="#FFB236" />{" "}
                  <BsFillStarFill color="#FFB236" />{" "}
                  <BsFillStarFill color="#FFB236" />{" "}
                  <BsFillStarFill color="#FFB236" />
                </div>
                <h2 className="mt-8">{s.title}</h2>
                <p>{s.text}</p>
                <div className="flex flex-col gap-4 my-8">
                  <div className="flex items-center gap-4">
                    <GoDiamond
                      color="rgb(231,0,53)"
                      className="h-4 flex-shrink-0"
                    />
                    <span>
                      <span className="font-semibold">Google: </span>
                      {s.googleResults}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <GoDiamond
                      color="rgb(231,0,53)"
                      className="h-4 flex-shrink-0"
                    />
                    <span>
                      <span className="font-semibold">{s.preAIresults} </span>
                      {s.aiResults}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <GoDiamond
                      color="rgb(231,0,53)"
                      className="h-4 flex-shrink-0"
                    />
                    <span>
                      <span className="font-semibold">Firma: </span>
                      {s.company}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="flex flex-col 2xl:flex-row 2xl:items-center gap-12 px-4 pt-24 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="!text-3xl/10 tracking-wide font-semibold">
            Unser Kunde InfoteQ rankt auf{" "}
            <span className="text-custom-red">Platz 1 bei ChatGPT</span>
          </h2>
          <p>
            {" "}
            Wir arbeiten seit einigen Jahren für die Firma InfoteQ und verhelfen
            ihr zu mehr Sichtbarkeit bei Google und ChatGPT. Die durchgeführten
            GEO Arbeiten zeigen Früchte: Für den Prompt „EDV Firma Geretsried“
            erscheint die Website mittlerweile auf Platz 1 in der Antwort von
            ChatGPT. Damit ist sie für potentielle Neukunden sofort sichtbar.
          </p>
          <p>
            Was haben wir gemacht? Wir haben die Prompts recherchiert, die
            potentielle Kunden bei ChatGPT und Gemini eingeben. Auf diese
            Phrasen haben wir uns konzentriert. Dabei haben wir wichtige
            Elemente auf der Website optimiert. Wir haben die
            Überschriften-Struktur angepasst, Title Tags geschrieben, interne
            Links gesetzt und vieles mehr. Immer mit dem Ziel, die
            KI-Sichtbarkeit zu steigern.
          </p>
          <p>
            Du bist Dir noch unsicher und weißt nicht, wie das Ganze abläuft?
            Dann hole Dir einfach ein paar kostenlose GEO Tipps über unseren
            kostenlosen Website Check. Unser GEO Berater Jan Krösche schaut sich
            Deine Website an und schickt Dir ein paar Tipps als pdf-Datei per
            Mail zu. Komplett kostenlos.
          </p>
          <button className="mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-2/3 flex items-center justify-between">
            <LinkGeoCheck />
            <FiArrowRight />
          </button>
        </div>
        <div className="min-w-1/2 2xl:min-w-1/3 relative">
          <img
            src="/images/ki_screenshot_2.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
          />
          <p className="p-8 italic 2xl:mx-auto 2xl:text-center">
            "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
          </p>
        </div>
      </section>
      <section className="mt-24 lg:px-32 lg:mt-32">
        <div className="lg:max-w-2/3 px-4 lg:px-0">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Es ärgert Dich, dass Du{" "}
            <span className="text-custom-red">in der KI nicht zitiert</span>{" "}
            wirst?
          </h2>
        </div>

        <div className="flex flex-col gap-2 px-4 lg:px-0">
          <p>
            Wenn Du nach Deinen Produkten oder Dienstleistungen bei ChatGPT oder
            Gemini suchst, erscheint immer Dein Wettbewerber? Du gehst also
            komplett leer aus, wenn potentielle Kunden nach Deinem
            Tätigkeitsfeld suchen? Das ist natürlich sehr ärgerlich und kann
            sogar existenzbedrohend sein, wenn Du zu wenige Anfragen generierst.
            Vor allem in diesen Zeit.
          </p>
          <p>
            Wir können Dir helfen und Dich in der KI endlich sichtbarer machen.
            Damit Du von Deinen potentiellen Kunden wieder mehr wahrgenommen
            wirst und im Internet nicht untergehst.
          </p>
        </div>
        <WebsiteCheck isGeo={true} className="mt-12" />
      </section>
      <section className="mx-4 mt-24 lg:mx-32 lg:mt-32">
        <div className="lg:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Auf diese <span className="text-custom-red">KI Systeme</span> sind
            unsere GEO Berater{" "}
            <span className="text-custom-red">spezialisert</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          <p>
            Der KI-Markt ist noch jung und verändert sich kontinuierlich. Daher
            muss man fachlich am Ball bleiben und alle neuen Entwicklungen auf
            dem Schirm haben. Wir kennen die genauen Nutzerzahlen der
            wichtigsten KI-Chatsysteme und wissen, wo es sich lohnt, Arbeit
            reinzustecken. Derzeit konzentrieren wir uns auf ChatGPT, Gemini,
            Google KI Modus, AI Overviews, Copilot und Perplexity. Wenn Du hier
            sichtbar bist, kommen Deine potentiellen Kunden nicht an Dir vorbei.
          </p>
        </div>
      </section>
      <section className="lg:bg-custom-white lg:mt-48 lg:flex gap-12 lg:p-32 lg:pb-48 xl:pb-64 2xl:gap-32 2xl:justify-center ">
        <div className="mt-12 lg:m-0 min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute -top-48">
            <img
              src="/images/portraits/39321-4194.jpg"
              style={{ width: "500px" }}
              alt="Portrait Jan Kroesche"
              className="lg:mx-auto"
            />
            <p className="p-8 px-24 text-center italic text-lg">
              "Wir sind für Dich erreichbar und kümmern uns persönlich um deine
              Sichtbarkeit"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:m-0 flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Dein <span className="text-custom-red">GEO Berater</span> kümmert
            sich persönlich um Dich
          </h2>
          <p>
            Bei uns bist Du nicht irgendeine Nummer. Vom ersten
            Kennenlern-Termin an bekommst Du bei uns einen GEO Berater, der sich
            mit Dir, Deiner Firma und Deinem Webprojekt auseinandersetzt und
            sich persönlich um Dich kümmert. Je nach Fahrtstrecke kommen wir
            Dich auch gern in Deiner Firma persönlich besuchen, um Dich
            kennenzulernen.
          </p>
          <p>
            Natürlich arbeiten wir leistungsorientiert. Wir zeigen Dir in
            regelmäßigen Abständen, wo wir stehen und wie sich die Sichtbarkeit
            in der KI verbessert hat. Du stehst mit Deinem GEO Berater laufend
            in Kontakt und erhältst immer einen Überblick, welche Arbeiten
            anstehen.
          </p>
          <button className="mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-2/3 flex items-center justify-between">
            <LinkGeoCheck />
            <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
