import Breadcrumbs from "@/app/components/Breadcrumps";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import GEOConferenceOverview from "@/app/components/GEOConferenceOverview";
import FourBoxLayout from "@/app/components/layouts/FourBoxLayout";
import KroescheKonferenzIntroLayout from "@/app/components/layouts/KroescheKonferenzIntroLayout";
import Timetable from "@/app/components/Timetable";
import { geoKonferenzContent } from "@/app/content/FourBoxLayoutContent";
import { geoKonferenz } from "@/app/content/KroescheKurseContent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GEO Konferenz im Allgäu 17.04.26 | GEO Seminar Bad Wörishofen",
};

export default function page() {
  return (
    <div>
      <section className="pt-12 lg:pt-0 lg:px-32 px-4 lg:bg-geo-conference bg-cover lg:h-screen flex flex-col lg:justify-center lg:items-start">
      <div className="xl:max-w-2/3 bg-white p-8 lg:p-16 rounded-xl">
       <h1 className="text-center md:px-32 lg:px-0 lg:text-start 2xl:!text-5xl/14">
          <span className="text-custom-red">GEO Konferenz</span> im Allgäu am
          17. April 2026
        </h1>
        <h2 className="hidden lg:block">
          Mehr Sichtbarkeit bei ChatGPT, Gemini & Co.: So stellst Dich online
          auf, damit Dich Deine Kunden in der KI finden können
        </h2>
        <p>
          Auf der GEO Konferenz am 17.04.2026 im Ringhotel Sonneck Bad
          Wörishofen lernst Du, wie Du Deine Firmen-Website in die KI-Antworten
          von ChatGPT, Gemini, Perplexity & Copilot bekommst. Damit Dich
          potenzielle Kunden in Zukunft dort finden, wo sie nach Produkten und
          Dienstleistungen suchen.
        </p>
      </div>
      {/* <div className="absolute">
                 <Image
            src="/images/hotel_sonneck_panorama.jpg"
            style={{ width: "1200px" }}
            alt="Screenshot eines Prompts in einer KI Suchmaschine"
            height={300}
            width={500}
            className="mx-auto"
          />
      </div> */}
 
      </section>
            <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <section>
        <KroescheKonferenzIntroLayout
          workshop={geoKonferenz}
          className="dark:pt-12"
        />
      </section>
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-24 lg:gap-12 lg:p-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Die GEO Konferenz für{" "}
            <span className="text-custom-red">
              Wissenstransfer & Networking
            </span>
          </h1>
          <p>
            In der KI-Suche entscheidet sich künftig, ob Unternehmen gefunden
            werden. Wer in KI-Antworten nicht vorkommt, bleibt für potenzielle
            Kunden unsichtbar.
          </p>
          <p className="py-4">
            Die GEO-Konferenz bringt fachlich auf den nächsten Stand und zeigt,
            wie Websites für das KI-Zeitalter vorbereitet werden.
          </p>
          <p>
            Im Fokus stehen GEO, KI-SEO und LLMO – ergänzt durch offene
            Diskussionsrunden statt reiner Vorträge.
          </p>
          <p>
            Der persönliche Rahmen ermöglicht Austausch, Fragen und Gespräche
            auf Augenhöhe.
          </p>
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/geo-konferenz.png"
            style={{ width: "600px" }}
            alt="Screenshot eines Prompts in einer KI Suchmaschine"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Firmen, die in der KI Antwort von ChatGPT nicht auftauchen, können
            von potenziellen Kunden nicht wahrgenommen werden
          </p>
        </div>
      </section>
      <section className="px-4 md:px-8 lg:px-32 bg-custom-white ">
        <Timetable className="pt-24 lg:pt-32" />
      </section>
      <section className="bg-custom-white pt-24 px-4 md:px-8 lg:p-32 lg:pb-48">
        <FourBoxLayout boxes={geoKonferenzContent} className="pb-24" />
      </section>
      <section className="lg:hidden mt-24 dark:mt-0 lg:dark:mt-24 p-8 mx-4 bg-custom-white rounded-xl dark">
        <InfoBtn className="dark:bg-black" content="Seit 2017 im Geschäft" />
        <h1 className="mt-4">
          Über den GEO Referenten{" "}
          <span className="text-custom-red">Jan Krösche</span>
        </h1>
        <h2>
          Taten sprechen bekanntlich lauter als Worte. Drei Beispiele von meinen
          betreuten Kunden:
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            Eine Firma aus der Baubranche konnte durch die gesteigerte Google
            Sichtbarkeit über 500 Anfragen über die Website generieren.
            Auftragsvolumen mehr als 8 Millionen Euro. Allein über Google!
          </p>
          <p>
            Eine Firma aus dem IT-Bereich gewinnt jede Woche mehr als zwei neue
            Kunden durch die Google Rankings. Mit durchschnittlichem
            Auftragswert von 7.000 Euro.
          </p>
          <p>
            Eine Firma aus dem Werbemittel-Bereich hat letztes Jahr 9 neue große
            Firmenkunden allein über ChatGPT gewonnen: Gesamt-Auftragsvolumen
            von über 200.000 Euro.
          </p>
          <p>
            Du siehst: Google Rankings sind kein Selbstzweck, sondern ein
            Treiber für Neukunden und Umsatz.
          </p>
        </div>
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 p-32 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-3997.jpg"
              style={{ width: "400px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
              className="mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Über den GEO Referenten{" "}
            <span className="text-custom-red">Jan Krösche</span>
          </h1>
          <InfoBtn
            content="Seit 2017 im Geschäft"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Seit 2017 bin ich als SEO, Ads und GEO Dienstleister und
            Kundenberater unterwegs
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              In den vergangenen Jahren habe ich eine der größten
              Onlinemarketing Agenturen in Süddeutschland geleitet. Mit ca. 50
              festangestellten Mitarbeitenden betreuten wir einen Kundenstamm
              von über 300 Firmen aus dem deutschsprachigen Raum.
            </p>
            <p>
              In den vergangenen Jahren habe ich eine der größten
              Onlinemarketing Agenturen in Süddeutschland geleitet. Mit ca. 50
              festangestellten Mitarbeitenden betreuten wir einen Kundenstamm
              von über 300 Firmen aus dem deutschsprachigen Raum.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:hidden mt-12 p-8 mx-4 bg-custom-white rounded-xl dark">
        <InfoBtn className="dark:bg-black" content="SEO & GEO Experte" />
        <h1 className="mt-4">
          Über den GEO Referenten{" "}
          <span className="text-custom-red">Bastian Huber</span>
        </h1>
        <h2>Mein Hintergrund ist redaktionell - mein Blick strategisch.</h2>
        <div className="flex flex-col gap-4">
          <p>
            Eine Firma aus der Baubranche konnte durch die gesteigerte Google
            Sichtbarkeit über 500 Anfragen über die Website generieren.
            Auftragsvolumen mehr als 8 Millionen Euro. Allein über Google!
          </p>
          <p>
            Eine Firma aus dem IT-Bereich gewinnt jede Woche mehr als zwei neue
            Kunden durch die Google Rankings. Mit durchschnittlichem
            Auftragswert von 7.000 Euro.
          </p>
          <p>
            Eine Firma aus dem Werbemittel-Bereich hat letztes Jahr 9 neue große
            Firmenkunden allein über ChatGPT gewonnen: Gesamt-Auftragsvolumen
            von über 200.000 Euro.
          </p>
          <p>
            Du siehst: Google Rankings sind kein Selbstzweck, sondern ein
            Treiber für Neukunden und Umsatz.
          </p>
        </div>
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-32 xl:mt-48 lg:bg-custom-white p-32 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-3997.jpg"
              style={{ width: "400px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
              className="mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Über den GEO Referenten{" "}
            <span className="text-custom-red">Bastian Huber</span>
          </h1>
          <InfoBtn
            content="SEO & GEO Experte"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Mein Hintergrund ist redaktionell - mein Blick strategisch.
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Ich arbeite seit vielen Jahren im Bereich SEO und Content mit dem
              Fokus darauf, wie Sichtbarkeit tatsächlich entsteht – und warum
              sie oft ausbleibt.
            </p>
            <p>
              Mit der ConversionSchmiede berate ich Unternehmen dabei, online
              als relevante Quelle wahrgenommen zu werden – in Suchmaschinen
              ebenso wie in KI-Antwortsystemen. Dabei geht es nicht um Taktiken,
              sondern um saubere Strukturen, Inhalte und Einordnung.
            </p>
            <p>
              Mein Schwerpunkt liegt auf SEO, GEO und der Verbindung aus
              Technik, Content und Autorität. Dieses Wissen vermittle ich
              praxisnah in Beratung, Workshops und Vorträgen.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-24 xl:flex-row px-4 md:px-8 lg:px-32 mt-24 lg:mt-32 xl:mt-48">
        <div className="flex-1 mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3 lg:mt-8">
          <h1 className="text-center">
            Anmeldung zur <span className="text-custom-red">GEO Konferenz</span>
          </h1>
          <InfoBtn
            content="Teilnahme sichern"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Du kannst dich per Mail für die GEO Konferent anmelden
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Du kannst Dich ganz einfach per E-Mail für die GEO Konferenz am
              17.04.2026 anmelden. Schreibe uns einfach eine Nachricht an
              jan@jankroesche.de. Du erhältst dann alle weiteren Informationen
              zugeschickt.
            </p>
            <p>
              Hast Du Fragen zur Veranstaltung? Dann kontaktieren uns gern
              persönlich. Wir stehen Dir per Mail oder per Telefon gern zur
              Seite.
            </p>

            <p className="pb-8 border-b-1 border-slate-700 dark:border-custom-white">
              Wir freuen uns, auf viele spannende Gespräche rund um GEO und KI
              und eine gute Zeit mit Dir.
            </p>
            <div className="flex flex-col items-center">
              <span className="dark:text-custom-white">Jan Krösche</span>
              <span className="text-custom-red">+49 176 55 10 93 83</span>
              <span className="text-custom-red">jan@jankroesche.de </span>
            </div>
          </div>
        </div>
        <GEOConferenceOverview conference={geoKonferenz} className="flex-1" />
      </section>
    </div>
  );
}
