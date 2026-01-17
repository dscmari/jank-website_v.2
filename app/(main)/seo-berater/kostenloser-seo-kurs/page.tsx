import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import KroescheWorkshopIntroLayout from "@/app/components/layouts/KroescheWorkshopIntroLayout";
import { seoKurs } from "@/app/content/KroescheKurseContent";
import Breadcrumbs from "@/app/components/Breadcrumps";

export const metadata: Metadata = {
  title: "Kostenloser SEO Kurs | SEO Seminar mit Jan Krösche",
};

export default function page() {
  return (
    <div className="dark:pt-12">
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
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

      <KroescheWorkshopIntroLayout workshop={seoKurs} />
      <section className="lg:hidden mt-12 p-4">
        <InfoBtn content="SEO Kurs" className="dark:bg-darkmode-blue" />
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
          <InfoBtn
            content="SEO Kurs"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
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
            Die <span className="text-custom-red">sichtbarsten</span> Firmen
            gewinnen die meisten Kunden
          </h1>
          <p>
            Du hast viel Geld in Deine Website gesteckt, es kommt aber einfach
            zu wenig rum? Dann könnte Google Ads für Dich eine gute Möglichkeit
            sein, um über Google an Neukunden ranzukommen.
          </p>
          <p className="py-4">
            Firmen, die bei Google und im Internet kaum Sichtbarkeit haben,
            werden von potentiellen Kunden nicht wahrgenommen. Potentielle
            Kunden wissen einfach nicht, dass es Dich überhaupt gibt.
          </p>
          <p>
            Im kostenlosen Google Ads Kurs lernst Du, wie Du für wichtige
            Keywords Anzeigen schalten kannst. Der Kurs richtet sich an
            Selbstständige, Gründer, Marketing- und Vertriebsverantwortliche
            sowie an Website-Verantwortliche im Unternehmen.
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
            alt="Screenshot einer Google Suche"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
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
          <div className="flex flex-col p-8 bg-white rounded-xl dark">
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
          <div className="flex flex-col p-8 bg-white rounded-xl dark">
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
      <KroescheWorkshopIntroLayout
        className="mt-24 lg:m-0"
        workshop={seoKurs}
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
