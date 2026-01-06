import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const metadata: Metadata = {
  title: "GEO Berater für KI Sichtbarkeit | GEO Agentur Jan Krösche",
};

const geoKursBullets = [
  "Der GEO Kurs findet nur mit Dir oder in kleinen Gruppen statt (je nach Auslastung)",
  "Der Kurs ist live – Du kannst Fragen stellen",
  "Du kannst Dich per Mail anmelden jan@jankroesche.de",
  "Du erhältst passende Terminvorschläge per Mail",
];

export default function page() {
  return (
    <div>
        <div className="hidden lg:block lg:px-32 px-4 lg:pt-32 lg:pb-16 lg:max-w-2/3">
             <h1 className="!text-5xl/14">Kostenloser <span className="text-custom-red">GEO </span> Kurs</h1>
            <h2>Im kostenlosen GEO Kurs zeigt Dir der GEO Experte Jan Krösche, wie Du Deine Website in die KI-Antworten von ChatGPT, Gemini & Co. bekommst und auch in Zukunft mit Deiner Firma sichtbar bist. Damit Dein Geschäft für die Zukunft gewappnet ist.</h2>
        </div>
               
      <section className="flex flex-col lg:flex-row gap-8 lg:px-32">
        <div className="px-4 lg:p-8 flex-1">
          <h1 className="mt-4 text-center">
            Dein kostenloser <span className="text-custom-red">GEO </span>Kurs
          </h1>
          <InfoBtn content="Geo Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            KI-Marketing verstehen – Neukunden über ChatGPT & Co. gewinnen.
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Im kostenlosen GEO Kurs von Jan Krösche lernst Du, wie Du Deine
              Website in die KI-Antworten von ChatGPT, Gemini, Copilot und
              Perplexity bringst.
            </p>
            <p>
              Das Ziel des kostenlosen GEO Kurses ist es, Dir die GEO-Grundlagen
              praxisnah zu vermitteln, damit Du einen Überblick hast und Deinen
              Webauftritt optimieren kannst, um über die KI mehr Neukunden zu
              erreichen.
            </p>
            <p>
              Der GEO Kurs ist komplett kostenlos, dauert ca. 1 h und richtet
              sich an Unternehmen, die in der KI sichtbarer sein wollen.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 lg:p-8 rounded-lg">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein GEO Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der GEO Kurs auf einen Blick
              </span>
              <span className="font-light">
                Werde die Top-Empfehlung der KI
              </span>
            </div>

            <h1 className="text-center mt-8 lg:mt-16">GEO Kurs</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der Kurs ist für Dich komplett kostenfrei. Wir nehmen uns eine
              Stunde Zeit – davon 45 Minuten für intensives Lernen und 15
              Minuten für Deine individuellen Fragen. Ob per Video-Call oder vor
              Ort in Bad Wörishofen: Du entscheidest, wie Du dabei sein
              möchtest.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {geoKursBullets.map((e, index) => (
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
        <InfoBtn content="GEO Kurs" />
        <h1 className="mt-8">
          Im GEO Kurs lernst Du, wie Deine Website in den{" "}
          <span className="text-custom-red">KI-Antworten </span> zitiert wird
        </h1>
        <h2>Verpasse nicht den Anschluss an die neue Suche</h2>
        <div className="flex flex-col gap-4">
          <p>
            KI-Systeme wie ChatGPT, Copilot oder Gemini werden in den nächsten
            Jahren zu einem festen Bestandteil unseres täglichen Tuns werden.
            Sowohl im privaten als auch im beruflichen Umfeld.
          </p>
          <p>
            Es liegt daher klar auf der Hand: Firmen, die diesen digitalen Trend
            verpassen, werden Marktanteile verlieren oder bedrohen gar ihre
            Existenz. Denn: Menschen nutzen die Chatsysteme, um nach Anbietern
            und Produkten zu suchen. Firmen, die in den Antworten auftauchen und
            zitiert werden, bekommen automatisch die meisten Anfragen und
            Neukunden.
          </p>
          <p>
            Im kostenlosen GEO Kurs zeigt Dir der GEO Experte Jan Krösche, wie
            Du Deine Website in die KI-Antworten von ChatGPT, Gemini & Co.
            bekommst und auch in Zukunft mit Deiner Firma sichtbar bist. Damit
            Dein Geschäft für die Zukunft gewappnet ist.
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
            Im GEO Kurs lernst Du, wie Deine Website in den{" "}
            <span className="text-custom-red">KI-Antworten </span> zitiert wird
          </h1>
          <InfoBtn content="GEO Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            KI-Sichtbarkeit sichern: Verpasse nicht den Anschluss an die neue
            Suche
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              KI-Systeme wie ChatGPT, Copilot oder Gemini werden in den nächsten
              Jahren zu einem festen Bestandteil unseres täglichen Tuns werden.
              Sowohl im privaten als auch im beruflichen Umfeld.
            </p>
            <p>
              Es liegt daher klar auf der Hand: Firmen, die diesen digitalen
              Trend verpassen, werden Marktanteile verlieren oder bedrohen gar
              ihre Existenz. Denn: Menschen nutzen die Chatsysteme, um nach
              Anbietern und Produkten zu suchen. Firmen, die in den Antworten
              auftauchen und zitiert werden, bekommen automatisch die meisten
              Anfragen und Neukunden.
            </p>
            <p>
              Im kostenlosen GEO Kurs zeigt Dir der GEO Experte Jan Krösche, wie
              Du Deine Website in die KI-Antworten von ChatGPT, Gemini & Co.
              bekommst und auch in Zukunft mit Deiner Firma sichtbar bist. Damit
              Dein Geschäft für die Zukunft gewappnet ist.
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
            Du willst den Anschluss nicht verlieren und bei{" "}
            <span className="text-custom-red">
              ChatGPT, Gemini, Perplexity{" "}
            </span>{" "}
            & Co. auffindbar sein?
          </h1>
          <p>
            Jahrelang war es entscheidend, bei Google auf den top Positionen mit
            der Website zu ranken. Das ist zwar nach wie vor extrem wichtig,
            aber Suchsysteme verändern sich aufgrund der umfassenden
            KI-Entwicklungen.
          </p>
          <p className="py-4">
            Menschen nutzen zunehmend KI-Systeme wie ChatGPT, Gemini & Copilot,
            um nach Informationen und Firmen im Internet zu suchen. Firmen, die
            als erstes in den KI-Antworten erscheinen, bekommen die meisten
            Neukunden und machen den meisten Umsatz.
          </p>
          <p>
            Der kostenlose GEO Kurs richtet sich an Selbständige, Marketing- und
            Vertriebsverantwortliche und Website-Verantwortliche in Unternehmen.
          </p>
          <p>
            Referent Jan Krösche arbeitet seit 2017 als SEO Berater. Seit
            einigen Jahren berät er Firmen aus dem deutschsprachigen Raum im
            Bereich GEO.
          </p>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
        <div className="mt-12 lg:mt-0 xl:min-w-1/3">
          <Image
            src="/images/screenshots/geo-kurs.png"
            style={{ width: "600px" }}
            alt="Screenshot einer ChatGPT Suche"
            height={300}
            width={500}
          />
          <p className="p-8 max-w-xl 2xl:mx-auto text-center lg:text-start 2xl:text-center">
            "Das Hotel Schwabinger Wahrheit erscheint in der KI Antwort von
            ChatGPT ganz oben. Durch geziete GEO-Umsetzungen haben wir das für
            unseren Kunden erreicht.“
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
              <span className="font-semibold tracking-tight">Webdesign</span>
            </div>
            <p className="mt-4">
              „Der kostenlose GEO Kurs von Jan Krösche hat mir geholfen, die
              Mechanismen von LLMs wie ChatGPT und Gemini zu verstehen. Vieles
              war mir wirklich nicht bewusst. Ich habe nun einen Plan, wie ich
              meine Dienstleister-Website verbessern kann, um mehr KI
              Sichtbarkeit zu bekommen.“
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">Marian N.</span>
                <span>Webdesigner</span>
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
              „Meine Marketingkollegin und ich wollten wissen, was GEO
              eigentlich genau ist. Daher haben wir den Kurs gemacht. Der Kurs
              dauert zwar nur eine Stunde, ist aber komplett kostenlos und
              vollgepackt mit Informationen. Besonders gut hat mir gefallen,
              dass ich praktische GEO Tipps mitnehmen konnte, die wir auf
              unserer Website nun umsetzen können."
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">Susanne K.</span>
                <span>Marketingverantwortliche</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row py-12 gap-8 lg:mt-32 lg:px-32">
        <div className="p-8 mx-4 flex-1">
          <h1 className="mt-4 text-center">
            Das lernst Du im kostenlosen{" "}
            <span className="text-custom-red">GEO Kurs </span> von Jan Krösche
          </h1>
          <InfoBtn content="Geo Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">Akutelles Fachwissen rund um GEO</h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Im kostenlosen GEO Kurs erhältst Du aktuelles Fachwissen sowie
              praktische Tipps, die Du später selbst umsetzen kannst. Das Ziel
              des Kurses ist es, dass Du mit Deiner Firmenwebsite in KI-Systemen
              besser gefunden wirst und einen fundierten Überblick über die
              wichtigsten GEO-Maßnahmen wie llms.txt oder schema.org bekommst.
            </p>
            <p>
              Da der Kurs live per Teams stattfindet, kannst Du direkt Fragen an
              den Referenten stellen und profitierst von einem interaktiven
              Austausch. Der GEO Kurs ist dabei komplett kostenlos und Du
              bekommst alle verwendeten Folien im Anschluss an die Sitzung
              bequem per Mail zugeschickt.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between lg:flex-1 py-12 lg:pt-0 p-8 rounded-lg">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein GEO Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der GEO Kurs auf einen Blick
              </span>
              <span className="font-light">
                Werde die Top-Empfehlung der KI
              </span>
            </div>

            <h1 className="text-center mt-8 lg:mt-16">GEO Kurs</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der Kurs ist für Dich komplett kostenfrei. Wir nehmen uns eine
              Stunde Zeit – davon 45 Minuten für intensives Lernen und 15
              Minuten für Deine individuellen Fragen. Ob per Video-Call oder vor
              Ort in Bad Wörishofen: Du entscheidest, wie Du dabei sein
              möchtest.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {geoKursBullets.map((e, index) => (
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
            <span className="text-custom-red"> kostenlosen </span>GEO Kurs mit
            Jan Krösche anmelden
          </h1>
          <InfoBtn content="GEO Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
        Lass uns über Deine Sichbarkeit in der KI sprechen
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Der kostenlose GEO Kurs ist komplett kostenlos, dauert insgesamt
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
               Ich freue mich auf alle GEO-Interessierten und auf den Austausch
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
