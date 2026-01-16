import { Metadata } from "next";
import Image from "next/image";
import KroescheWorkshopIntroLayout from "@/app/components/layouts/KroescheWorkshopIntroLayout";
import { geoWorkshopFuerAgenturen } from "@/app/content/KroescheKurseContent";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import { GoDiamond } from "react-icons/go";
import SixBoxLayout from "@/app/components/layouts/SixBoxLayout";
import { geoWorkshopAgenturenSixBoxContent } from "@/app/content/SixBoxLayoutContent";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const metadata: Metadata = {
  title: "GEO Workshop für Werbeagenturen | GEO Seminar",
};

export default function page() {
  const geoWorkshopAgenturenBullets = [
    "Fundierter Wissensaufbau: Erlerne die Grundlagen der Marketingdisziplin GEO, um Dein Portfolio zukunftssicher zu erweitern",
    "Souveräne Kundenberatung: Wir schulen Dich und Deine Mitarbeiter darin, komplexe Kundenfragen zu KI-Antworten professionell und überzeugend zu beantworten",
    "Falls Ihr vorab Fragen hast oder die Themeninhalte anpassen möchtet, vereinbaren wir gern eine Vorbesprechung unter jan@jankroesche.de",
    "Unbegrenzte Teilnehmerzahl",
  ];

  return (
    <div>
      <div className="hidden lg:block lg:px-32 px-4 lg:pt-32 lg:pb-16 xl:pr-0 xl:max-w-2/3">
        <h1 className="!text-5xl/14">
          GEO Workshop für{" "}
          <span className="text-custom-red"> Werbeagenturen</span>
        </h1>
        <h2> Damit Du mit Deinen Kunden auf Augenhöhe kommunizieren kannst!</h2>
        <h2>
          KI Systeme wie ChatGPT und Gemini sind schon jetzt täglicher Begleiter
          und werden auch im Marketing- und Unternehmenskontext immer wichtiger.
        </h2>
      </div>
      <KroescheWorkshopIntroLayout workshop={geoWorkshopFuerAgenturen} className="dark:pt-12" />
      <section className="lg:hidden mt-24 p-4">
        <InfoBtn content="GEO Workshop" className="mx-auto dark" />
        <h1 className="mt-8">
          Du hast das Gefühl, den<span className="text-custom-red"> KI </span>{" "}
          und <span className="text-custom-red"> GEO </span> Entwicklungen nicht
          mehr hinterherzukommen?
        </h1>
        <h2>Mit GEO Expertise Kunden halten und Agentur-Wachstum sichern</h2>
        <div className="flex flex-col gap-4">
          <p>
            Die Fragen Deiner Kunden werden komplexer rund um KI? Dein Kopf
            raucht regelmäßig, weil Du Dir bei der Beratung Deiner Kunden oft
            nicht sicher bist? Und auch nicht weißt, wie Du alle Deine
            Mitarbeiter schnellstmöglich „KI-fit“ machen kannst? Du hast Angst,
            Deine Kunden an andere Agenturen und Dienstleister zu verlieren?
          </p>
          <p>
            Ich sag´s Dir ganz ehrlich: Ich kenne diese Gedanken, weil ich sie
            selbst in den letzten Jahren als Agenturleiter hatte. So geht es
            aktuell sehr vielen Werbeagenturen. Ich arbeite mit über 50
            Agenturen aus Deutschland, Österreich und Schweiz zusammen und
            tausche mich täglich mit Agenturleitern aus. Es ist keine leichte
            Zeit in der Werbe- und Kommunikationsbranche. Die Agenturinsolvenzen
            sind so hoch wie seit 2008 nicht mehr.
          </p>
          <p>
            Hinzu kommen täglich unangenehme Kundenfragen, die das eigene
            Geschäft existenziell bedrohen.
          </p>
          <div className="dark:text-custom-white">
            <div className="flex items-center gap-4">
              <GoDiamond color="rgb(231,0,53)" size={12} className="shrink-0" />
              <span>
                „Die KI schreibt doch Texte – warum soll ich das über Euch
                machen?“
              </span>
            </div>
            <div className="flex items-center gap-4">
              <GoDiamond color="rgb(231,0,53)" size={12} className="shrink-0" />
              <span>
                „Websites werden sowieso aussterben – warum noch daran
                arbeiten?“
              </span>
            </div>
            <div className="flex items-center gap-4">
              <GoDiamond color="rgb(231,0,53)" size={12} className="shrink-0" />
              <span>
                „Wieso wird meine Website nicht bei ChatGPT gefunden?“
              </span>
            </div>
            <div className="flex items-center gap-4">
              <GoDiamond color="rgb(231,0,53)" size={12} className="shrink-0" />
              <span>„Ersetzt GEO das klassische SEO?“</span>
            </div>
            <div className="flex items-center gap-4">
              <GoDiamond color="rgb(231,0,53)" size={12} className="shrink-0" />
              <span>„Wie steigere ich meine Sichtbarkeit bei ChatGPT?“</span>
            </div>
            <div className="flex items-center gap-4">
              <GoDiamond color="rgb(231,0,53)" size={12} className="shrink-0" />
              <span>
                „Bilder lasse ich doch jetzt mit Banana Pro entwerfen“
              </span>
            </div>
          </div>
          <p>
            Im GEO Workshop befähigen wir Dich mit einem frischen Wissensstand,
            auf Kundenfragen und Themen wie diese eingehen zu können. Damit Du
            Deine Kunden weiterhin souverän beraten kannst und Deine Kunden
            nicht zu anderen Agenturen abwandern.
          </p>
        </div>
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-64 lg:bg-custom-white px-32 pt-24 pb-32 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4190.jpg"
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
            Du hast das Gefühl, den<span className="text-custom-red"> KI </span>{" "}
            und <span className="text-custom-red"> GEO </span> Entwicklungen
            nicht mehr hinterherzukommen?
          </h1>
          <InfoBtn content="GEO Workshop" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Mit GEO-Expertise Kunden halten und Agentur-Wachstum sichern
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Die Fragen Deiner Kunden werden komplexer rund um KI? Dein Kopf
              raucht regelmäßig, weil Du Dir bei der Beratung Deiner Kunden oft
              nicht sicher bist? Und auch nicht weißt, wie Du alle Deine
              Mitarbeiter schnellstmöglich „KI-fit“ machen kannst? Du hast
              Angst, Deine Kunden an andere Agenturen und Dienstleister zu
              verlieren?
            </p>
            <p>
              Ich sag´s Dir ganz ehrlich: Ich kenne diese Gedanken, weil ich sie
              selbst in den letzten Jahren als Agenturleiter hatte. So geht es
              aktuell sehr vielen Werbeagenturen. Ich arbeite mit über 50
              Agenturen aus Deutschland, Österreich und Schweiz zusammen und
              tausche mich täglich mit Agenturleitern aus. Es ist keine leichte
              Zeit in der Werbe- und Kommunikationsbranche. Die
              Agenturinsolvenzen sind so hoch wie seit 2008 nicht mehr.
            </p>
            <p>
              Hinzu kommen täglich unangenehme Kundenfragen, die das eigene
              Geschäft existenziell bedrohen.
            </p>
            <div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={12}
                  className="shrink-0"
                />
                <span>
                  „Die KI schreibt doch Texte – warum soll ich das über Euch
                  machen?“
                </span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={12}
                  className="shrink-0"
                />
                <span>
                  „Websites werden sowieso aussterben – warum noch daran
                  arbeiten?“
                </span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={12}
                  className="shrink-0"
                />
                <span>
                  „Wieso wird meine Website nicht bei ChatGPT gefunden?“
                </span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={12}
                  className="shrink-0"
                />
                <span>„Ersetzt GEO das klassische SEO?“</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={12}
                  className="shrink-0"
                />
                <span>„Wie steigere ich meine Sichtbarkeit bei ChatGPT?“</span>
              </div>
              <div className="flex items-center gap-4">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={12}
                  className="shrink-0"
                />
                <span>
                  „Bilder lasse ich doch jetzt mit Banana Pro entwerfen“
                </span>
              </div>
            </div>
            <p>
              Im GEO Workshop befähigen wir Dich mit einem frischen
              Wissensstand, auf Kundenfragen und Themen wie diese eingehen zu
              können. Damit Du Deine Kunden weiterhin souverän beraten kannst
              und Deine Kunden nicht zu anderen Agenturen abwandern.
            </p>
          </div>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
      </section>
      <section className="mt-24 lg:pt-24 lg:pb-24 lg:mt-0 px-4 lg:px-32 bg-custom-white">
        <h1 className="!mb-8 lg:!mb-4 text-center lg:text-start lg:max-w-2/3">
          Das lernst Du im <span className="text-custom-red">GEO</span> Workshop
        </h1>
        <h2 className="lg:max-w-2/3">
          Unser Ziel ist es, dass Du und Deine Mitarbeiter Deine Kunden nicht
          verlierst und auf GEO-Fragen souverän eingehen kannst
        </h2>
        <div className="flex flex-col gap-4 lg:gap-2">
          <p>
            In den letzten Jahren habe ich eine der größten Onlinemarketing
            Agenturen in Süddeutschland geleitet. Mit 50 Mitarbeitenden haben
            wir 300 Bestandskunden aus Deutschland, Österreich und der Schweiz
            betreut.{" "}
          </p>
          <p>
            Ich kenne das tägliche Geschäft mit den Kunden und weiß, welche
            Fragen rund um KI und GEO kommen. Dieses Praxis-Wissen gebe ich im
            GEO Workshop an Dich und Deine Mitarbeitenden weiter.{" "}
          </p>
          <p>
            Wir können die Themen und den Ablauf des GEO Workshops an Deine
            Bedürfnisse individuell anpassen.{" "}
          </p>
        </div>
       
      </section>
       <SixBoxLayout boxes={geoWorkshopAgenturenSixBoxContent} className="mt-24 lg:mt-0 px-4 md:px-8 lg:px-0" />

      <section className="xl:hidden mt-12 p-4">
        <h1 className="mt-8 text-center">Über den Workshop Leiter Jan Krösche</h1>
            <InfoBtn content="GEO Workshop" className="mx-auto mt-12 mb-4 dark" />
        <h2 className="text-center">
          {" "}
          Seit 2017 bin ich als SEO, Ads und GEO Dienstleister und Kundenberater
          tätig.
        </h2>
        <div className="flex flex-col gap-4 mt-12">
          <p>
            In den letzten Jahren habe ich eine der größten Onlinemarketing
            Agenturen in Süddeutschland geleitet. Mit ca. 50 festangestellten
            Mitarbeitenden betreuten wir einen Kundenstamm von über 300 Firmen
            aus dem deutschsprachigen Raum.
          </p>
          <p>
            Ich veröffentliche regelmäßig Fachartikel im Magazin „Website
            Boosting“ und halte Vorträge beim Verband Deutscher Ingenieure.
            Zudem berate ich derzeit Firmen in den drei Bereichen SEO, GEO und
            Ads und schule Firmen und Agenturen, um ihr Wissen aufzufrischen.
          </p>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
      </section>
      <section className="hidden xl:flex gap-12 lg:mt-32 px-32 pt-24 pb-32 2xl:gap-32 2xl:justify-center dark">
        <div className="xl:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4319.jpg"
              style={{ width: "400px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
              className="mx-auto"
            />
               <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">Über den Workshop Leiter Jan Krösche</h1>
          <InfoBtn content="Erfahrung" className="mx-auto mt-12 dark:bg-black" />
          <h2 className="text-center mt-4">
            Seit 2017 bin ich als SEO, Ads und GEO Dienstleister und
            Kundenberater tätig.
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              In den letzten Jahren habe ich eine der größten Onlinemarketing
              Agenturen in Süddeutschland geleitet. Mit ca. 50 festangestellten
              Mitarbeitenden betreuten wir einen Kundenstamm von über 300 Firmen
              aus dem deutschsprachigen Raum.
            </p>
            <p>
              Ich veröffentliche regelmäßig Fachartikel im Magazin „Website
              Boosting“ und halte Vorträge beim Verband Deutscher Ingenieure.
              Zudem berate ich derzeit Firmen in den drei Bereichen SEO, GEO und
              Ads und schule Firmen und Agenturen, um ihr Wissen aufzufrischen.
            </p>
          </div>
          <p className="mt-4">
            Kursanmeldung per Mail unter{" "}
            <span className="text-custom-red">jan@jankroesche.de</span>{" "}
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 lg:px-32 mt-24 lg:mt-32">
        <div className="px-4 lg:p-8 flex-1">
          <h1 className="mt-4 text-center">
            {" "}
            Es können so viele Mitarbeitende teilnehmen, wie Du möchtest
          </h1>
          <InfoBtn content="Gleicher Preis" className="mx-auto mt-12 dark" />
          <h2 className="mt-4 text-center">
            Maßgeschneidertes Expertenwissen für Agenturen und Teams
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Du möchtest gleich mehrere Mitarbeitende oder gar eine ganze
              Abteilung schulen lassen? Kein Problem. Wir gestalten den GEO
              Workshop so, dass es für Euch passt.{" "}
            </p>
            <p>
              Natürlich erhältst Du alle Folien im Nachgang des GEO Workshops.
              Es ist auch möglich, den Workshop über Teams aufzunehmen, damit Du
              die Inhalte jederzeit wieder abrufen kannst.{" "}
            </p>
            <p>
              Der GEO Workshop findet in der Regel digital per Teams statt. Wir
              können den Workshop, nach Absprache, auch bei Dir in der Agentur
              oder in einem externen Tagungsraum durchführen.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 md:mx-4 lg:mx-0 lg:p-8 rounded-xl dark">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                Dein GEO Kurs
              </span>
              <span className="font-semibold tracking-tight">
                Der GEO Workshop auf einen Blick
              </span>
              <span className="font-light">
                Mach Deine Agentur bereit für das KI-Zeitalter
              </span>
            </div>
            <h1 className="text-center mt-8 lg:mt-16">GEO Workshop</h1>
            <p className="mt-4 mb-8 font-light text-base/5">
              Der GEO Workshop findet digital über Microsoft Teams statt und
              umfasst einen Zeitraum von 4,5 Stunden (jeweils von 08:30 bis
              13:00 Uhr). Auf Wunsch kann die Durchführung flexibel angepasst
              werden: Gerne kommen wir für den Workshop direkt zu Ihnen ins Haus
              oder organisieren einen externen Tagungsraum. Die Kursgebühr
              beläuft sich auf 1.900 Euro netto.
            </p>
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {geoWorkshopAgenturenBullets.map((e, index) => (
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
              Bonus: Wir analysieren im GEO Workshop eine Kundenwebsite von
              Euch, damit Du das Erarbeitete direkt beim Kunden anwenden kannst
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
