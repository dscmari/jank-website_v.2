import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const metadata: Metadata = {
  title: "Kostenloser Google Ads Kurs | Google Werbung Kurs",
};

const googleAdsBullets = [
  "Der Kurs findet nur mit Dir oder in kleinen Gruppen statt (je nach Auslastung)",
  "Der Kurs ist live – Du kannst Fragen stellen",
  "Du kannst Dich per Mail anmelden jan@jankroesche.de",
  "Du erhältst passende Terminvorschläge per Mail",
];

export default function page() {
  return (
    <div>
      <div className="hidden lg:block lg:px-32 px-4 lg:pt-32 lg:pb-16 lg:max-w-2/3">
        <h1 className="!text-5xl/14">
          Kostenloser <span className="text-custom-red">Google Ads </span> Kurs
        </h1>
        <h2>
          Im kostenlosen Google Ads Kurs lernst Du, was Google Ads eigentlich
          ist und wie Du selbst auf Google Werbung schalten kannst. Wir schauen
          uns gemeinsam eine echte Google Ads Kampagne an, damit Du einen guten
          Überblick bekommst
        </h2>
      </div>

      <section className="flex flex-col lg:flex-row gap-8 lg:px-32">
        <div className="px-4 lg:p-8 flex-1">
          <h1 className="mt-4 text-center">
            Dein kostenloser{" "}
            <span className="text-custom-red">Google Ads </span>Kurs
          </h1>
          <InfoBtn content="Google Ads Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Google Ads verstehen und Neukunden gewinnen
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Im kostenlosen Google Ads Kurs von Jan Krösche lernst Du die
              Grundlagen zum Thema Google Werbung.
            </p>
            <p>
              Du hast keine Lust mehr, bei Google hinter Deinen Konkurrenten zu
              stehen? Du brauchst endlich mehr Anfragen über die Website und
              mehr Neukunden, um die Fixkosten weiterhin bezahlen zu können?
              Oder Du suchst nach einem neuen Absatzkanal, der Neukunden liefern
              soll?
            </p>
            <p>
              Dann könnte Google Ads für Dich die richtige Wahl sein. Im Kurs
              zeige ich Dir, wie Du Werbung bei Google schalten kannst und
              worauf Du bei der Anzeigenausspielung achten musst.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 lg:p-8 rounded-lg">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein Google Ads Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der Google Ads Kurs auf einen Blick
              </span>
              <span className="font-light">
                Komme nach ganz oben in der Google Suche
              </span>
            </div>

            <h1 className="text-center mt-8 lg:mt-16">Google Ads Kurs</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der Kurs ist für Dich komplett kostenfrei. Wir nehmen uns eine
              Stunde Zeit – davon 45 Minuten für intensives Lernen und 15
              Minuten für Deine individuellen Fragen. Ob per Video-Call oder vor
              Ort in Bad Wörishofen: Du entscheidest, wie Du dabei sein
              möchtest.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {googleAdsBullets.map((e, index) => (
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
        <InfoBtn content="Google Ads Kurs" />
        <h1 className="mt-8">
          Mehr Sichtbarkeit und{" "}
          <span className="text-custom-red">mehr Kunden </span> mit gezielter
          Google Werbung
        </h1>
        <h2>So dominierst Du die Google-Suche in Deiner Branche</h2>
        <div className="flex flex-col gap-4">
          <p>
            Für viele Unternehmen ist Google Ads der wichtigste Kanal, um
            Anfragen über die Website zu erhalten.
          </p>
          <p>
            Im kostenlosen Google Ads Kurs lernst Du, was Google Ads eigentlich
            ist und wie Du selbst auf Google Werbung schalten kannst. Wir
            schauen uns gemeinsam eine echte Google Ads Kampagne an, damit Du
            einen guten Überblick bekommst.
          </p>
          <p>
            Zudem lernst Du im Kurs wichtige Kennzahlen und Einstellungen
            kennen, die Deine Google Werbung effizient machen.
          </p>
          <p>
            Der kostenlose Google Ads Kurs ist ideal für Dich, wenn Du Deine
            Website bei Google sichtbarer machen willst und mehr Anfragen
            brauchst. Der Kurs richtet sich an alle, die ihr Geschäft
            voranbringen wollen und nach Werbemöglichkeiten suchen, um digital
            stärker zu werden.
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
            Mehr Sichtbarkeit und{" "}
            <span className="text-custom-red">mehr Kunden </span> mit gezielter
            Google Werbung
          </h1>
          <InfoBtn content="Google Ads Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            So dominierst Du die Google-Suche in Deiner Branche
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Für viele Unternehmen ist Google Ads der wichtigste Kanal, um
              Anfragen über die Website zu erhalten.
            </p>
            <p>
              Im kostenlosen Google Ads Kurs lernst Du, was Google Ads
              eigentlich ist und wie Du selbst auf Google Werbung schalten
              kannst. Wir schauen uns gemeinsam eine echte Google Ads Kampagne
              an, damit Du einen guten Überblick bekommst.
            </p>
            <p>
              Zudem lernst Du im Kurs wichtige Kennzahlen und Einstellungen
              kennen, die Deine Google Werbung effizient machen.
            </p>
            <p>
              Der kostenlose Google Ads Kurs ist ideal für Dich, wenn Du Deine
              Website bei Google sichtbarer machen willst und mehr Anfragen
              brauchst. Der Kurs richtet sich an alle, die ihr Geschäft
              voranbringen wollen und nach Werbemöglichkeiten suchen, um digital
              stärker zu werden.
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
           <h1 className="text-center">
            Mehr Sichtbarkeit und{" "}
            <span className="text-custom-red">mehr Kunden </span> mit gezielter
            Google Werbung
          </h1>
                <p>
              Für viele Unternehmen ist Google Ads der wichtigste Kanal, um
              Anfragen über die Website zu erhalten.
            </p>
            <p>
              Im kostenlosen Google Ads Kurs lernst Du, was Google Ads
              eigentlich ist und wie Du selbst auf Google Werbung schalten
              kannst. Wir schauen uns gemeinsam eine echte Google Ads Kampagne
              an, damit Du einen guten Überblick bekommst.
            </p>
            <p>
              Zudem lernst Du im Kurs wichtige Kennzahlen und Einstellungen
              kennen, die Deine Google Werbung effizient machen.
            </p>
            <p>
              Der kostenlose Google Ads Kurs ist ideal für Dich, wenn Du Deine
              Website bei Google sichtbarer machen willst und mehr Anfragen
              brauchst. Der Kurs richtet sich an alle, die ihr Geschäft
              voranbringen wollen und nach Werbemöglichkeiten suchen, um digital
              stärker zu werden.
            </p>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
        <div className="mt-12 lg:mt-0 xl:min-w-1/3">
          <Image
            src="/images/screenshots/ads-kurs.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Google Suche"
            height={300}
            width={500}
          />
          <p className="p-8 max-w-xl 2xl:mx-auto text-center lg:text-start 2xl:text-center">
            "Gibt man bei Google „Anwalt München“ ein, erscheinen ganz oben die
            bezahlten Suchanzeigen – auch Google Ads genannt. Mit Google Ads
            kannst Du in kurzer Zeit nach oben kommen.“
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
              <span className="font-semibold tracking-tight">
                EDV Dienstleister
              </span>
            </div>
            <p className="mt-4">
              „Der Google Ads Kurs war wirklich klasse. Ich weiß jetzt, welche
              Keyword-Einstellungen wichtig sind und wie viel Werbebudget ich
              einplanen muss – also was das Ganze kostet. Der Kurs ist komplett
              kostenlos gewesen. Danke an Jan Krösche für seine Zeit.“
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">Manuel S.</span>
                <span>Fachinformatiker</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8 bg-white rounded-xl">
            <div className="flex flex-col items-start gap-2">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-2 px-4 rounded-lg">
                Kursteilnehmer
              </span>
              <span className="font-semibold tracking-tight">Maschinenbau</span>
            </div>
            <p className="mt-4">
              „In unserem Familienbetrieb kümmere ich mich um Marketing und
              Vertriebsthemen. Ich habe mich aber bislang nie so richtig an
              Google Ads rangetraut. Der kostenlose Kurs von Jan Krösche war
              ideal, um einen Einstieg zu finden. Ich konnte auch direkt
              konkrete Fragen stellen.“
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">Steffan L.</span>
                <span>Maschinenbauer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row py-12 gap-8 lg:mt-32 lg:px-32">
        <div className="p-8 mx-4 flex-1">
          <h1 className="mt-4 text-center">
            Das lernst Du im kostenlosen{" "}
            <span className="text-custom-red">Google Ads Kurs </span> von Jan
            Krösche
          </h1>
          <InfoBtn content="Google Ads Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Akutelles Fachwissen rund um Google Ads
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Im kostenlosen Google Ads Kurs erhältst Du aktuelles Fachwissen und einen
              fundierten Überblick über die entscheidenden Bausteine wie
              Keywords und Anzeigentexte. Dabei stehen praktische Tipps im
              Vordergrund, die Du direkt auf Deine eigene Strategie anwenden
              kannst, um die technischen und inhaltlichen Grundlagen Deiner
              Seite zu festigen.
            </p>
            <p>
              Da der Kurs live per Teams stattfindet, kannst Du direkt Fragen an
              den Referenten stellen und profitierst von einem interaktiven
              Austausch. Der Google Ads Kurs ist dabei komplett kostenlos und Du
              bekommst alle verwendeten Folien im Anschluss an die Sitzung
              bequem per Mail zugeschickt.
            </p>
          </div>
        </div>
     <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 lg:p-8 rounded-lg">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein Google Ads Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der Google Ads Kurs auf einen Blick
              </span>
              <span className="font-light">
                Komme nach ganz oben in der Google Suche
              </span>
            </div>

            <h1 className="text-center mt-8 lg:mt-16">Google Ads Kurs</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der Kurs ist für Dich komplett kostenfrei. Wir nehmen uns eine
              Stunde Zeit – davon 45 Minuten für intensives Lernen und 15
              Minuten für Deine individuellen Fragen. Ob per Video-Call oder vor
              Ort in Bad Wörishofen: Du entscheidest, wie Du dabei sein
              möchtest.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {googleAdsBullets.map((e, index) => (
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
            <span className="text-custom-red"> kostenlosen </span>Google Ads Kurs mit
            Jan Krösche anmelden
          </h1>
          <InfoBtn content="Google Ads Kurs" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Lass uns über Deine Sichbarkeit sprechen
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Der kostenlose Google Ads Kurs ist komplett kostenlos, dauert insgesamt
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
              Ich freue mich auf alle Ads Interessierten und auf den Austausch
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
