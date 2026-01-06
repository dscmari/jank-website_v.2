import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const metadata: Metadata = {
  title: "Tag: Kostenloser SEO Kurs | SEO Seminar mit Jan Krösche",
};

const seoKursBullets = [
  "Der SEO Kurs findet nur mit Dir oder in kleinen Gruppen statt (je nach Auslastung)",
  "Der Kurs ist live – Du kannst Fragen stellen",
  "Du kannst Dich per Mail anmelden jan@jankroesche.de",
  "Du erhältst passende Terminvorschläge per Mail",
];

export default function page() {
  return (
    <div>
      <div className="hidden lg:block lg:px-32 px-4 lg:pt-32 lg:pb-16 lg:max-w-2/3">
        <h1 className="!text-5xl/14">
          Kostenloser <span className="text-custom-red">SEO </span> Kurs
        </h1>
        <h2>
          Im kostenlosen SEO Kurs zeigt Dir der SEO Experte Jan Krösche, wie Du
          Deine Homepage bei Google nach vorne bringst, um mehr Neukundegeschäft
          zu machen. Damit Deine Website zur Vertriebsmaschine wird und für Dich
          atbeitet.
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 lg:px-32">
        <div className="px-4 lg:p-8 flex-1">
          <h1 className="mt-4 text-center">
            Dein kostenloser <span className="text-custom-red">SEO </span>Kurs
          </h1>
          <InfoBtn content="SEO Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Suchmaschinenoptimierung verstehen und Neukunden über Google
            gewinnen
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Im kostenlosen SEO Kurs von Jan Krösche lernst Du, wie Du Deine
              Website verbessern kannst, um bei Google besser zu ranken.
            </p>
            <p>
              Mit starken Rankings erhöhst Du die Wahrscheinlichkeit, dass
              potentielle Kunden auf Dich stoßen, wenn sie bei Google unterwegs
              sind. SEO ist daher nicht nice-to-have, sondern ein Neukunden- und
              Umsatzlieferant.
            </p>
            <p>
              Ich zeige Dir im kostenlosen SEO Kurs, was Du konkret tun kannst,
              um bei Google oben zu stehen. Der Kurs ist komplett kostenlos,
              praxisorientiert und einfach aufgebaut. Du brauchst keine
              Vorkenntnisse.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 lg:p-8 rounded-lg">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein SEO Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der SEO Kurs auf einen Blick
              </span>
              <span className="font-light">
                Komme nach ganz oben in der Google Suche
              </span>
            </div>

            <h1 className="text-center mt-8 lg:mt-16">SEO Kurs</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der Kurs ist für Dich komplett kostenfrei. Wir nehmen uns eine
              Stunde Zeit – davon 45 Minuten für intensives Lernen und 15
              Minuten für Deine individuellen Fragen. Ob per Video-Call oder vor
              Ort in Bad Wörishofen: Du entscheidest, wie Du dabei sein
              möchtest.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {seoKursBullets.map((e, index) => (
                <div key={index} className="flex items-start gap-2">
                  <IoIosCheckmarkCircle
                    color="rgb(231,0,53)"
                    size={24}
                    className="shrink-0"
                  />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="pb-8 font-semibold  border-b-1 border-slate-700">
              Als Bonus Wir können uns im Kurs auch Deine Website anschauen und
              Optimierungen erarbeiten
            </p>
            <span className="mt-4 block text-center text-base/5 font-light">
              Kursanmeldung per Mail an
            </span>
            <span className="block text-center text-custom-red">
              {" "}
              jan@jankroesche.de
            </span>
          </div>
        </div>
      </section>
      <section className="lg:hidden mt-12 p-4">
        <InfoBtn content="SEO Kurs" />
        <h1 className="mt-8">
          Mit dem kostenlosen SEO Kurs bringst Du Deine Website auf{" "}
          <span className="text-custom-red"> Platz 1 bei Google</span>
        </h1>
        <h2>So dominierst Du die Google-Suche in Deiner Branche</h2>
        <div className="flex flex-col gap-4">
          <p>
            SEO gehört zu den wichtigsten Marketing- und Vertriebswerkzeugen, um
            über die eigene Website Anfragen zu bekommen.
          </p>
          <p>
            Das „SEO Spiel“ ist dabei ganz einfach: Firmen, die bei Google zu
            Schlüssel-Suchbegriffen schlecht gerankt sind, werden von
            Google-Suchenden, die gleichzeitig auch potentielle Kunden sind,
            nicht wahrgenommen.
          </p>
          <p>
            Die Firmen, die bei Google auf Platz 1 stehen, gewinnen die meisten
            Neukunden und machen richtig Umsatz über die Seite.
          </p>
          <p>
            Im kostenlosen SEO Kurs von Jan Krösche lernst Du konkret, wie Du
            Deine Homepage bei Google nach vorne bringst, um mehr
            Neukundegeschäft zu machen. Damit Deine Website zur
            Vertriebsmaschine wird und für Dich atbeitet.
          </p>
          <p>
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-64 lg:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center ">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4319.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
            />
            <p className="p-8 italic mx-auto text-center font-light">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Mit dem kostenlosen SEO Kurs bringst Du Deine Website auf{" "}
            <span className="text-custom-red"> Platz 1 bei Google</span>
          </h1>
          <InfoBtn content="SEO Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            So dominierst Du die Google-Suche in Deiner Branche
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              SEO gehört zu den wichtigsten Marketing- und Vertriebswerkzeugen,
              um über die eigene Website Anfragen zu bekommen.
            </p>
            <p>
              Das „SEO Spiel“ ist dabei ganz einfach: Firmen, die bei Google zu
              Schlüssel-Suchbegriffen schlecht gerankt sind, werden von
              Google-Suchenden, die gleichzeitig auch potentielle Kunden sind,
              nicht wahrgenommen.
            </p>
            <p>
              Die Firmen, die bei Google auf Platz 1 stehen, gewinnen die
              meisten Neukunden und machen richtig Umsatz über die Seite.
            </p>
            <p>
              Im kostenlosen SEO Kurs von Jan Krösche lernst Du konkret, wie Du
              Deine Homepage bei Google nach vorne bringst, um mehr
              Neukundegeschäft zu machen. Damit Deine Website zur
              Vertriebsmaschine wird und für Dich atbeitet.
            </p>
          </div>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
      </section>
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Du willst die Nummer 1 bei Google werden und endlich{" "}
            <span className="text-custom-red">mehr Anfragen</span> bekommen?
          </h1>
          <p>
            Dann ist der kostenlose SEO Kurs genau richtig für Dich. Seit 2017
            haben wir schon über 500 Firmen-Websites auf Platz 1 bei Google
            gebracht. Immer mit dem Ziel, dass dadurch mehr Anfragen generiert
            werden.
          </p>
          <p className="py-4">
            Zum Beispiel für unseren Kunden Kramer Systems – einem IT
            Dienstleister aus Bayern. Für das Keyword „IT Dienstleister
            Landsberg“ rankt die Website unseres Kunden auf Platz 1 bei Google.
            Allein durch diese Top Position kommen regelmäßig Anfragen von neuen
            Kunden rein. Genau darum geht es im SEO. Bei Google oben zu stehen
            und mehr Neukunden zu erreichen.
          </p>
          <p>
            Wir geben unser SEO-Wissen im kostenlosen Kurs gern an Dich weiter.
            Der Kurs richtet sich an Selbstständige, Marketing- und
            Vertriebsverantwortliche und Website-Verantwortliche im Unternehmen.
          </p>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
        <div className="mt-12 lg:mt-0 xl:min-w-1/3">
          <Image
            src="/images/screenshots/seo-kurs.png"
            style={{ width: "600px" }}
            alt="Screenshot einer ChatGPT Suche"
            height={300}
            width={500}
          />
          <p className="p-8 max-w-xl 2xl:mx-auto text-center lg:text-start 2xl:text-center">
            "Der IT Dienstleister Kramer Systems wird bei Google für den
            Suchbegriff „IT Dienstleister Landsberg“ bei Google ganz oben
            gefunden. Durch diese Top Platzierung gewinnt die Firma jede Woche
            mehrere Neukunden. Allein durch SEO.“
          </p>
        </div>
      </section>
      <section className="bg-custom-white mt-12 px-4 lg:px-32 py-24 lg:py-32">
        <h1 className="text-center lg:text-start !mb-8 lg:!mb-12">
          Das sagen <span className="text-custom-red">zufriedene </span>
          Kursteilnehmer
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-2">
          <div className="flex flex-col p-8 bg-white rounded-xl">
            <div className="flex flex-col items-start gap-2">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-2 px-4 rounded-lg">
                Kursteilnehmer
              </span>
              <span className="font-semibold tracking-tight">Handwerk</span>
            </div>
            <p className="mt-4">
              „Im kostenlosen SEO Kurs von Jan Krösche habe ich viel zum Thema
              Google Optimierung gelernt. Der Kurs ist ideal, wenn man einen
              Überblick zum Thema SEO bekommen will und ein paar Tipps braucht,
              wie man damit anfangen soll.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">Elias F.</span>
                <span>Handwerker</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-white rounded-xl">
            <div className="flex flex-col items-start gap-2">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-2 px-4 rounded-lg">
                Kursteilnehmerin
              </span>
              <span className="font-semibold tracking-tight">Marketing</span>
            </div>
            <p className="mt-4">
              „Wir haben von einem Bekannten vom kostenlosen SEO Kurs erfahren.
              Das wollten wir uns dann selbst anschauen. Die SEO Sitzung dauert
              nicht lange, ist aber wirklich tiefgehend und nützlich. Danke an
              Jan Krösche für den kostenlosen Input."
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">Sandra S.</span>
                <span>Werbemittelbranche</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row py-12 gap-8 lg:mt-32 lg:px-32">
        <div className="p-8 mx-4 flex-1">
          <h1 className="mt-4 text-center">
            Das lernst Du im kostenlosen{" "}
            <span className="text-custom-red">SEO Kurs </span> von Jan Krösche
          </h1>
          <InfoBtn content="SEO Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">Akutelles Fachwissen rund um SEO</h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Im kostenlosen SEO Kurs erhältst Du aktuelles Fachwissen und einen
              fundierten Überblick über die entscheidenden Bausteine wie Title
              Tags, Überschriften und die Funktionsweise moderner Algorithmen.
              Dabei stehen praktische Tipps im Vordergrund, die Du direkt auf
              Deine eigene Strategie anwenden kannst, um die technischen und
              inhaltlichen Grundlagen Deiner Seite zu festigen.
            </p>
            <p>
              Das klare Ziel des Kurses ist es, Deine Firmenwebsite bei Google
              auf Platz 1 zu ranken und sie in einen echten Kundenmagneten zu
              verwandeln.
            </p>
            <p>
              Da der Kurs live per Teams stattfindet, kannst Du direkt Fragen an
              den Referenten stellen und profitierst von einem interaktiven
              Austausch. Der SEO Kurs ist dabei komplett kostenlos und Du
              bekommst alle verwendeten Folien im Anschluss an die Sitzung
              bequem per Mail zugeschickt.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 lg:p-8 rounded-lg">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein SEO Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der SEO Kurs auf einen Blick
              </span>
              <span className="font-light">
                Komme nach ganz oben in der Google Suche
              </span>
            </div>

            <h1 className="text-center mt-8 lg:mt-16">SEO Kurs</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der Kurs ist für Dich komplett kostenfrei. Wir nehmen uns eine
              Stunde Zeit – davon 45 Minuten für intensives Lernen und 15
              Minuten für Deine individuellen Fragen. Ob per Video-Call oder vor
              Ort in Bad Wörishofen: Du entscheidest, wie Du dabei sein
              möchtest.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {seoKursBullets.map((e, index) => (
                <div key={index} className="flex items-start gap-2">
                  <IoIosCheckmarkCircle
                    color="rgb(231,0,53)"
                    size={24}
                    className="shrink-0"
                  />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="pb-8 font-semibold  border-b-1 border-slate-700">
              Als Bonus Wir können uns im Kurs auch Deine Website anschauen und
              Optimierungen erarbeiten
            </p>
            <span className="mt-4 block text-center text-base/5 font-light">
              Kursanmeldung per Mail an
            </span>
            <span className="block text-center text-custom-red">
              {" "}
              jan@jankroesche.de
            </span>
          </div>
        </div>
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-64 lg:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center ">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4319.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
            />
            <p className="p-8 italic mx-auto text-center font-light">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Hier kannst Du Dich zum{" "}
            <span className="text-custom-red"> kostenlosen </span>SEO Kurs mit
            Jan Krösche anmelden
          </h1>
          <InfoBtn content="SEO Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Lass uns über Deine Sichbarkeit sprechen
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Der kostenlose SEO Kurs ist komplett kostenlos, dauert insgesamt
              60 Minuten und findet über Teams statt. Der Kurs wird allein mit
              Dir oder in kleinen Gruppen durchgeführt.
            </p>
            <p>
              Du kannst Dich ganz einfach anmelden, indem Du mir eine Mail an
              jan@jankroesche.de schickst. Ich werfe einen Blick in den Kalender
              und schicke Dir ein paar mögliche Termine zu. Du erhältst dann
              auch eine Teams-Einladung mit Link, über den Du am Kurs dann
              teilnehmen kannst.
            </p>
          </div>
          <div className="mt-4">
            <p className="pb-8 border-b-1 border-slate-700">
              Ich freue mich auf alle SEO-Interessierten und auf den Austausch
              mit Dir.
            </p>
            <span className="mt-4 block text-center text-base/5 font-light">
              Kursanmeldung per Mail an
            </span>
            <span className="block text-center text-custom-red">
              {" "}
              jan@jankroesche.de
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
