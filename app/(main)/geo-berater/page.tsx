import Image from "next/image";
import references from "@/app/content/referencesList";
import WebsiteCheck from "@/app/components/website-check/WebsiteCheck";
import { GoDiamond } from "react-icons/go";
import ATF from "@/app/components/ATF";
import Contact from "@/app/components/Contact";
import LinkGeoCheck from "@/app/components/links/LinkGeoCheck";
import { Metadata } from "next";
import atf from "../../content/ATFContents";
import SixBoxLayout from "@/app/components/layouts/SixBoxLayout";
import { geoBeraterSixBox } from "../../content/SixBoxLayoutContent";
import FiveStarRating from "@/app/components/FiveStarRating";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { geoBeraterTwoBox } from "@/app/content/TwoBoxLayoutContent";
import GEOCheckBtn from "@/app/components/buttons/GEOCheckBtn";

export const metadata: Metadata = {
  title: "GEO Berater für KI Sichtbarkeit | GEO Agentur Jan Krösche",
};

export default function GEOBerater() {
  return (
    <div>
      <ATF
        title={atf.geoBeraterATF.title}
        subtitle={atf.geoBeraterATF.subtitle}
        text={atf.geoBeraterATF.text}
        LinkComponent={<LinkGeoCheck />}
        imgPathMobile="/images/portraits/39321-4194.jpg"
        imgPathDesktop="/images/portraits/39321-4127_01.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Mit unserer <span className="text-custom-red">GEO Beratung</span>{" "}
            wirst Du bei ChatGPT, Gemini & Co. am häufigsten zitiert
          </h1>
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
          <GEOCheckBtn className="mt-8" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/ki_screenshot.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
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
        <div className="lg:text-lg px-4 lg:px-0">
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
      <section className="mt-24 xl:mt-12 flex flex-col xl:flex-row gap-8 xl:gap-12 xl:p-32 xl:py-24 2xl:gap-32 2xl:justify-center dark">
        <div className="min-w-1/2 2xl:min-w-1/3 xl:relative">
          <div className="dark:md:pt-24 dark:xl:p-0 xl:absolute -top-48">
            <Image
              src="/images/portraits/39321-4133web.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={500}
              width={300}
              className="mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 xl:m-0 flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3 dark:pb-24 dark:md:pb-32 dark:xl:pb-0">
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
          <GEOCheckBtn className="mt-8" />
        </div>
      </section>
      <section className="mt-24 px-4 py-24 xl:m-0 xl:p-32 relative bg-custom-white">
        <div className="lg:max-w-2/3">
          <h1>
            Persönliche
            <span className="text-custom-red"> GEO Dienstleistung</span> aus
            einer Hand
          </h1>
        </div>
        <div className="lg:text-lg">
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
          <TwoBoxLayout boxes={geoBeraterTwoBox} className="mt-12 lg:mt-24" />
        </div>
      </section>
      <section className="pt-24 pb-12 lg:pt-16 px-4 lg:px-32 bg-custom-white">
        <h1 className="text-center tracking-wide">
          So kommst Du in den{" "}
          <span className="text-custom-red">KI Antworten</span> ganz nach oben
        </h1>
        
      </section>
      <SixBoxLayout boxes={geoBeraterSixBox} className="" />
      <section className="px-4 pt-24 pb-12 lg:pb-32 lg:px-32 bg-custom-white">
        <h1 className="text-center tracking-wide">
          Seit 2017 haben wir schon über
          <span className="text-custom-red"> 500 Firmen</span> im SEO geholfen
        </h1>
        <div className="pt-4 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch">
          {references.slice(0, 4).map((s: any, index: number) => (
            <section key={index} className="flex flex-col">
              <div className="h-full bg-white p-8 rounded-xl dark">
                <FiveStarRating />
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
          <h1 className="text-center lg:text-start tracking-wide">
            Unser Kunde InfoteQ rankt auf{" "}
            <span className="text-custom-red">Platz 1 bei ChatGPT</span>
          </h1>
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
          <GEOCheckBtn className="mt-8" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/ki_screenshot_2.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
          </p>
        </div>
      </section>
      <section className="mt-24 lg:px-32 lg:mt-32">
        <div className="lg:max-w-2/3 px-4 lg:px-0">
          <h1 className="text-center lg:text-start tracking-wide">
            Es ärgert Dich, dass Du{" "}
            <span className="text-custom-red">in der KI nicht zitiert</span>{" "}
            wirst?
          </h1>
        </div>

        <div className="flex flex-col gap-2 px-4 lg:px-0 pt-4 lg:pt-0">
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
          <h1 className="tracking-wide text-center lg:text-start mb-4 lg:mb-0">
            Auf diese <span className="text-custom-red">KI Systeme</span> sind
            unsere GEO Berater{" "}
            <span className="text-custom-red">spezialisert</span>
          </h1>
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
      <section className="lg:bg-custom-white mx-auto lg:mt-48 lg:flex gap-12 lg:p-32 lg:pb-32 2xl:gap-32 2xl:justify-center dark">
        <div className="mt-12 lg:m-0 min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute -top-48 md:dark:pt-32 dark:xl:pt-0">
            <Image
              src="/images/portraits/39321-4194.jpg"
              style={{ width: "400px" }}
              alt="Portrait Jan Kroesche"
              height={500}
              width={300}
              className="mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center ">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:m-0 flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3 dark:pb-24 md:dark:pb-32 dark:xl:pb-0">
          <h1 className="tracking-wide text-center lg:text-start mb-4 lg:mb-0">
            Dein <span className="text-custom-red">GEO Berater</span> kümmert
            sich persönlich um Dich
          </h1>
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
          <GEOCheckBtn className="mt-8" />
        </div>
      </section>
    </div>
  );
}
