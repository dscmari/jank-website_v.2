import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import KroescheWorkshopIntroLayout from "@/app/components/layouts/KroescheWorkshopIntroLayout";
import { geoKurs } from "@/app/content/KroescheKurseContent";
import Breadcrumbs from "@/app/components/Breadcrumps";

export const metadata: Metadata = {
  title: "Kostenloser GEO Kurs | GEO Schulung & GEO Seminar",
};

export default function page() {
  return (
    <div>
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <div className="hidden lg:block lg:px-32 xl:pr-0 px-4 lg:pt-32 lg:pb-16 xl:max-w-2/3">
        <h1 className="!text-5xl/14">
          Kostenloser <span className="text-custom-red">GEO </span> Kurs
        </h1>
        <h2>
          Im kostenlosen GEO Kurs zeigt Dir der GEO Experte Jan Krösche, wie Du
          Deine Website in die KI-Antworten von ChatGPT, Gemini & Co. bekommst
          und auch in Zukunft mit Deiner Firma sichtbar bist. Damit Dein
          Geschäft für die Zukunft gewappnet ist.
        </h2>
      </div>

      <KroescheWorkshopIntroLayout workshop={geoKurs} className="dark:pt-12" />
      <section className="lg:hidden mt-12 p-4">
        <h1 className="mt-8 text-center md:px-16">
          Im GEO Kurs lernst Du, wie Deine Website in den{" "}
          <span className="text-custom-red">KI-Antworten </span> zitiert wird
        </h1>
        <InfoBtn content="GEO Kurs" className="mt-12 mx-auto dark" />
        <h2 className="mt-4 text-center">
          Verpasse nicht den Anschluss an die neue Suche
        </h2>
        <div className="flex flex-col gap-4 mt-4">
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
      <section className="hidden xl:flex flex-col xl:flex-row gap-12 mt-64 xl:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 xl:relative">
          <div className="xl:absolute xl:-top-48">
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
          <InfoBtn content="GEO Kurs" className="mx-auto mt-12 dark:bg-black" />
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
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-24 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
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
            Referent Jan Krösche arbeitet seit 2017 als SEO & GEO Berater. Seit
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
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            "Das Hotel Schwabinger Wahrheit erscheint in der KI Antwort von
            ChatGPT ganz oben. Durch geziete GEO-Umsetzungen haben wir das für
            unseren Kunden erreicht.“
          </p>
        </div>
      </section>
      <section className="bg-custom-white mt-24 lg:mt-0 px-4 lg:px-32 pt-32 dark:pt-0">
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
          <div className="lg:flex-1 flex flex-col p-8 bg-white rounded-xl dark">
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
      <KroescheWorkshopIntroLayout
        workshop={geoKurs}
        className="mt-24 lg:mt-48"
      />
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
          <InfoBtn content="GEO Kurs" className="mx-auto mt-12 dark:bg-black" />
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
