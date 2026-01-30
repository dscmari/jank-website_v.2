import { Metadata } from "next";
import Image from "next/image";
import ATF from "@/app/components/ATF";
import atf from "../../content/ATFContents";
import LinkSeoCheck from "@/app/components/links/LinkSeoCheck";
import SEOCheckBtn from "@/app/components/buttons/SEOCheckBtn";
import Contact from "@/app/components/Contact";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { seoBeraterTwoBox } from "@/app/content/TwoBoxLayoutContent";
import SixBoxLayout from "@/app/components/layouts/SixBoxLayout";
import { seoBeraterSixBox } from "@/app/content/SixBoxLayoutContent";
import { GoDiamond } from "react-icons/go";
import FiveStarRating from "@/app/components/FiveStarRating";
import references from "@/app/content/referencesList";
import WebsiteCheck from "@/app/components/website-check/WebsiteCheck";
import Link from "next/link";
import Accordion from "@/app/components/layouts/Accordion";
import { faqsSeoBerater } from "@/app/content/faqsContent";

export const metadata: Metadata = {
  title: "SEO Berater für Google Rankings | Jan Krösche",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.seoBeraterATF.title}
        subtitle={atf.seoBeraterATF.subtitle}
        text={atf.seoBeraterATF.text}
        LinkComponent={<LinkSeoCheck className="w-full text-left" />}
        imgPathMobile="/images/portraits/39321-3994.jpg"
        imgPathDesktop="/images/portraits/39321-4118_01.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Du willst endlich die Nummer 1 bei Google sein und{" "}
            <span className="text-custom-red">mehr Anfragen</span> generieren?
          </h1>
          <p>
            Was bringt Dir eine Website, die keine Anfragen liefert? Wer bei
            Google oben steht, bekommt nachweislich die meisten Neukunden.
          </p>
          <p className="py-4">
            In München gibt es zum Beispiel mehrere Hundert Zahnärzte. Woher
            soll ein potentieller Patient wissen, zu welchem er gehen soll?
            Richtig: Er googelt nach „Zahnarzt München“ und schaut sich die
            Zahnärzte an, die bei Google auf den Top Positionen gerankt sind.
            Die Praxen, die die meiste Google-Sichtbarkeit haben, gewinnen auch
            die meisten Patienten.
          </p>
          <p>
            Als SEO Berater helfen wir Firmen, bei Google zu Top Rankings zu
            kommen: Seit 2017 haben wir schon über 500 Firmen auf Platz 1 bei
            Google katapultiert. Hier findest Du unsere <Link href={"/referenzen"} className="underline">Referenzen</Link>.
          </p>

          <SEOCheckBtn className="mt-8 lg:max-w-2/3 2xl:w-full" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/seo-berater.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Google Suche"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Was bringt eine Website, die bei Google nicht gut rankt und keine
            Anfragen liefert?
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 relative lg:bg-custom-white">
        <div className="px-4 lg:px-0 lg:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Deine Website hat viel Geld gekostet und soll endlich zur{" "}
            <span className="text-custom-red">Vertriebsmaschine </span> werden?
          </h2>
        </div>
        <div className="lg:text-lg px-4 lg:px-0">
          <p>
            Du hast viel Zeit und Ressourcen in die Entwicklung und Erstellung
            der Inhalte gesteckt? Und jetzt liefert sie keine oder nur sehr
            wenige Neukunden? Dann geht es Dir wie vielen Firmen in Deutschland.
            Das größte Problem ist fast immer: Deine Website hat keine
            Google-Sichtbarkeit. Du wirst also bei Google und im Internet nur
            schlecht gefunden. Je besser Deine Google Rankings zu wichtigen
            Suchbegriffen sind, desto mehr Anfragen wirst Du generieren. Dabei
            stehen wir Dir als SEO Berater zur Seite.
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
            Jan Krösche & Team: Die{" "}
            <span className="text-custom-red">SEO Berater</span> für Firmen aus
            Deutschland, Österreich, Südtirol & der Schweiz
          </h2>
          <p>
            Wir haben uns auf ein einziges Kundenproblem spezialisiert: Wir
            machen Unternehmen bei Google & innerhalb von KI-Systemen wie
            ChatGPT oder Gemini sichtbar. Genau das ist unsere Aufgabe.
          </p>
          <p>
            Unser Ziel ist es, Dich und Deine Firmenwebsite bei Google sichtbar
            zu machen. Wir optimieren Deine Seite, damit Du für
            Schlüssel-Keywords ganz oben in den Google-Suchergebnissen gerankt
            wirst.
          </p>
          <p>
            Zu unseren Kunden zählen Selbstständige wie Zahnärzte, Handwerker,
            Makler, Anwälte, Eventagenturen, Hoteliers und technische Firmen wie
            Hersteller Maschinenbauer, Software-Unternehmen und
            IT-Dienstleister. Wir betreuen Firmen aus Deutschland, Österreich,
            Südtirol und der Schweiz.
          </p>
          <SEOCheckBtn className="mt-8 2xl:max-w-2/3" />
        </div>
      </section>
      <section className="mt-24 px-4 py-24 xl:m-0 xl:p-32 relative bg-custom-white">
        <div className="lg:max-w-2/3">
          <h1>
            Persönliche
            <span className="text-custom-red"> SEO Dienstleistung</span> aus
            einer Hand
          </h1>
        </div>
        <div className="lg:text-lg">
          <p>
            Wir verstehen uns als Dienstleister. Daher betreuen wir alle unsere
            Kunden persönlich. Bei uns gibt es kein „Ticket-System“ oder
            kilometerlange SEO-Reportings. Wir sind erreichbar, stimmen uns
            regelmäßig mit Dir ab und zeigen Dir die Fortschritte Deiner Google
            Rankings. Neben der fachlichen Expertise wird bei uns der
            Kundenservice groß geschrieben.
          </p>
          <TwoBoxLayout boxes={seoBeraterTwoBox} className="mt-12 lg:mt-24" />
        </div>
      </section>
      <section className="pt-24 pb-12 lg:pt-16 px-4 lg:px-32 bg-custom-white">
        <h1 className="text-center">
          So kommst Du in den{" "}
          <span className="text-custom-red">KI Antworten</span> ganz nach oben
        </h1>
        <SixBoxLayout boxes={seoBeraterSixBox} className="mt-8 lg:mt-16" />
      </section>
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
            Unser Kunde HBS Bau rankt auf{" "}
            <span className="text-custom-red">Platz 1 bei Google</span>
          </h1>
          <p>
            Du möchtest ein Beispiel sehen, wie die SEO Beratung mit uns genau
            aussieht? Kein Problem! Wenn Du bei Google nach einer
            „Tiefgaragensanierung“ suchst, erscheint die Website von HBS Bau
            ganz oben bei Google – direkt auf Platz 1.
          </p>
          <p>
            Seit 2018 optimieren wir die Website unseres Kunden HBS Bau mit dem
            Ziel, für extrem viele wichtige Keywords bei Google sichtbar zu
            sein. Durch die starken Google Rankings generiert die Website
            laufend neue Anfragen – und unser Kunde gewinnt laufend neue Kunden.
          </p>
          <p>
            Du bist Dir noch unsicher und weißt nicht, wie das Ganze abläuft?
            Dann hole Dir einfach ein paar kostenlose SEO Tipps über unseren
            kostenlosen Website Check. Unser SEO Berater Jan Krösche schaut sich
            Deine Website an und schickt Dir ein paar Tipps als pdf-Datei per
            Mail zu. Komplett kostenlos.
          </p>
          <SEOCheckBtn className="mt-8 md:max-w-2/3" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/seo-berater_2.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Google Suche"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Unser Kunde HBS Bau rankt für „Tiefgaragensanierung“ auf Platz 1 bei
            Google und erhält konstant Anfragen von Neukunden
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
            Wenn Du nach Deinen Produkten oder Dienstleistungen bei Google
            suchst, erscheint immer erst Dein Wettbewerber? Das ist natürlich
            sehr ärgerlich, weil er Dir dadurch viele wichtige Neukunden vor der
            Nase wegschnappt. Es ist statistisch bewiesen, dass die Websites,
            die bei Google oben ranken, das größte Neukundengeschäft machen.
          </p>
          <p>
            Wir optimieren Deinen Webauftritt so, dass Du die Nummer 1 Deiner
            Branche wirst und wieder mehr Marktanteile gewinnst.
          </p>
        </div>
        <WebsiteCheck isGeo={false} className="mt-12" />
      </section>
      <section className="mx-4 mt-24 lg:mx-32 lg:mt-32">
        <div className="lg:max-w-2/3">
          <h1 className="text-center lg:text-start mb-4 lg:mb-0 lg:dark:mt-64">
            Unsere <span className="text-custom-red">SEO Berater</span>{" "}
            optimieren Deine Website für die Google Suche, Google Maps, Gemini
            und den KI Modus
          </h1>
        </div>
        <p>
          Die Google Suche verändert sich. KI-Funktionen wie die „AI Overviews“
          spielen eine immer größer werdende Rolle. Unsere SEO Berater
          beschäftigen sich laufend mit allen neuen Technologien und sich auf
          das KI Zeitalter bestens vorbereiten. Wir helfen allen unseren Kunden,
          nicht nur in der klassischen Google Suche oben zu sein, sondern auch
          in allen KI-Systemen (AI Overviews, Gemini, KI Modus, etc.)
        </p>
      </section>
      <section className="lg:bg-custom-white mx-auto lg:mt-64 lg:flex gap-12 lg:p-32 lg:pb-32 2xl:gap-32 2xl:justify-center dark">
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
            Wir kommunizieren auf{" "}
            <span className="text-custom-red">Augenhöhe</span> – ohne
            komplizierte Fachbegriffe.
          </h1>
          <p>
            Du hast von schema.org, llms.txt und Canonical-Tags noch nie etwas
            gehört? Keine Sorge, das ist auch nicht Deine Aufgabe. Es reicht,
            wenn Du Dich auf Deine Kunden und Dein Geschäft konzentrierst. Um
            Deine Google Rankings kümmern wir uns.
          </p>
          <p>
            Wir wissen, dass der SEO-Marketingkanal für viele Menschen sehr
            fremd und wenig zugänglich ist. Deswegen wird bei uns der
            Kundenservice priorisiert. Wir arbeiten mit Dir auf Augenhöhe und
            erklären Dir alles, was Du wissen musst. Wir sprechen kein
            Fachchinesisch und ballern Dich auch nicht mit sinnlosen Reportings
            zu.
          </p>
          <SEOCheckBtn className="mt-8 mx-auto md:max-w-2/3 lg:max-w-full 2xl:mx-0 2xl:max-w-2/3" />
        </div>
      </section>
      <section className=" pb-12 pt-24 lg:pt-48 px-4 lg:px-32">
            <h1 className="lg:text-center">
          Du hast <span className="text-custom-red"> Fragen </span>zum SEO Berater Jan Krösche oder zur Zusammenarbeit?
        </h1>
        <Accordion faqs={faqsSeoBerater} className="mt-12 lg:mt-16" />
      </section>
    </div>
  );
}
