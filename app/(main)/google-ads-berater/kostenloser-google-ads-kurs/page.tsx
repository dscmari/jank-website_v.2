import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import KroescheWorkshopIntroLayout from "@/app/components/layouts/KroescheWorkshopIntroLayout";
import { googleAdsKurs } from "@/app/content/KroescheKurseContent";

export const metadata: Metadata = {
  title: "Kostenloser Google Ads Kurs | Google Werbung Kurs",
};

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

      <KroescheWorkshopIntroLayout workshop={googleAdsKurs} className="dark:pt-12 dark:lg:pt-0" />
      <section className="lg:hidden mt-24 p-4">
        <h1 className="text-center md:px-16">
          Mehr Sichtbarkeit und{" "}
          <span className="text-custom-red">mehr Kunden </span> mit gezielter
          Google Werbung
        </h1>
               <InfoBtn className="mx-auto dark mt-12" content="Google Ads Kurs" />
        <h2 className="mt-4 text-center">So dominierst Du die Google-Suche in Deiner Branche</h2>
        <div className="flex flex-col gap-4 mt-8">
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
          <div className="mt-12 lg:mt-0 xl:min-w-1/3">
          <Image
            src="/images/screenshots/ads-kurs.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Google Suche"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            "Gibt man bei Google „Anwalt München“ ein, erscheinen ganz oben die
            bezahlten Suchanzeigen – auch Google Ads genannt. Mit Google Ads
            kannst Du in kurzer Zeit nach oben kommen.“
          </p>
        </div>
        </div>
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-64 lg:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4319.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
            />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
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
          <InfoBtn content="Google Ads Kurs" className="mx-auto mt-12 dark:bg-black" />
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
      <section className="bg-custom-white mt-12 lg:m-0 px-4 lg:px-32 py-24 lg:py-32">
        <h1 className="text-center lg:text-start !mb-8 lg:!mb-12">
          Das sagen <span className="text-custom-red">zufriedene </span>
          Kursteilnehmer
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1 flex flex-col p-8 bg-white rounded-xl dark">
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
          <div className="lg:flex-1 flex flex-col p-8 bg-white rounded-xl dark">
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
      <KroescheWorkshopIntroLayout
        className="mt-24 lg:mt-0 dark:mt-0"
        workshop={googleAdsKurs}
      />
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-64 lg:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-3997.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
            />
   <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Hier kannst Du Dich zum{" "}
            <span className="text-custom-red"> kostenlosen </span>Google Ads
            Kurs mit Jan Krösche anmelden
          </h1>
          <InfoBtn content="Google Ads Kurs" className="mx-auto mt-12 dark:bg-black" />
          <h2 className="text-center mt-4">
            Lass uns über Deine Sichbarkeit sprechen
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Der kostenlose Google Ads Kurs ist komplett kostenlos, dauert
              insgesamt 60 Minuten und findet über Teams statt. Der Kurs wird
              allein mit Dir oder in kleinen Gruppen durchgeführt.
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
