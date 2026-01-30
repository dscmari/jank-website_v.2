import { submitGeoTracker } from "@/actions/submit-geo-tracker";
import Breadcrumbs from "@/app/components/Breadcrumps";
import GEOTrackerInstallBtn from "@/app/components/buttons/GEOTrackerInstallBtn";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import SixBoxLayout from "@/app/components/layouts/SixBoxLayout";
import PricingGEOTracker from "@/app/components/pricing/PricingGEOTracker";
import { geoTrackerPriceBoxes } from "@/app/content/pricingBoxesContent";
import { geoTrackerSixBoxContent } from "@/app/content/SixBoxLayoutContent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Krösche GEO Tracker | KI Sichtbarkeit messen",
};

export default function page() {
  const countries = [
    { code: "DE", name: "Deutschland" },
    { code: "AT", name: "Österreich" },
    { code: "CH", name: "Schweiz" },
    { code: "LU", name: "Luxemburg" },
    { code: "IT", name: "Italien" },
  ];
  return (
    <div>
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <div className="pt-12 lg:px-32 px-4 lg:pt-32 lg:pb-16 xl:max-w-3/4 2xl:max-w-2/3">
        <h1 className="text-center md:px-32 lg:px-0 lg:text-start 2xl:!text-5xl/14">
          Mit dem <span className="text-custom-red">Krösche GEO Tracker</span>{" "}
          misst Du Deine KI Sichtbarkeit bei ChatGPT & Co.
        </h1>
        <h2 className="hidden lg:block">
          Behalte die volle Kontrolle über Deine Markenpräsenz: Erfahre präzise,
          wie und wie oft Dein Unternehmen in den Antworten führender KI-Systeme
          empfohlen wird.
        </h2>
      </div>

      <section className="flex flex-col xl:flex-row xl:items-center px-4 lg:pt-8 lg:gap-12 lg:p-32 lg:mt-16 2xl:gap-32 2xl:justify-center">
        <div className="flex-1">
          <h1 className="text-center hidden lg:block ">
            Der <span className="text-custom-red">Krösche GEO Tracker</span>{" "}
            misst Deine Sichtbarkeit in den KI Tools
          </h1>
          <InfoBtn
            content="GEO Tracker"
            className="mx-auto mt-8 lg:mt-12 dark"
          />
          <h2 className="text-center mt-4">
            Behalte Deine Marke bei ChatGPT & Co. im Blick
          </h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Der Krösche GEO Tracker zählt weltweit zu den besten und
              günstigsten Tools, um die Sichtbarkeit einer Website auf allen
              wichtigen KI-Systemen wie ChatGPT, Gemini, Perplexity und Copilot
              zu messen.
            </p>
            <p>
              Mit dem Krösche GEO Tracker siehst Du immer, ob Du für relevante
              Suchanfragen (= Prompts) in den Antworten der KI-Tools erscheinst
              oder nicht. Schon ab 30 Euro im Monat.
            </p>
            <p>
              Die Einrichtung erfolgt innerhalb von 24 Stunden und der GEO
              Tracker ist monatlich kündbar.
            </p>
          </div>
          <GEOTrackerInstallBtn className="mt-16 p-4 md:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/geo-tracker.png"
            style={{ width: "600px" }}
            alt="Screenshot von Statistiken zu Prompts"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center dark:text-custom-white">
            Du siehst auf einen Blick, ob Du in den KI Antworten aller wichtigen
            KI-Systemen genannt wirst oder nicht.
          </p>
        </div>
      </section>

      <section className="flex flex-col 2xl:flex-row 2xl:flex-row-reverse 2xl:items-center px-4 pt-24 lg:pt-8 lg:gap-12 lg:p-32 lg:mt-16 2xl:gap-32 2xl:justify-center">
        <div className="flex-1">
          <h1 className="text-center">
            Wie gut ist meine Website eigentlich{" "}
            <span className="text-custom-red">in der KI</span>?
          </h1>
          <InfoBtn
            content="GEO Tracker"
            className="mx-auto mt-8 lg:mt-12 dark"
          />
          <h2 className="text-center mt-4">
            Sichere Dir Deinen Platz in den KI Antworten
          </h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Keine Firma wird es sich leisten können, nicht in der KI genannt
              zu werden! Mit dem Krösche GEO Tracker bekommst Du im
              2-Wochen-Takt einen Bericht per E-Mail zugeschickt, der Dir genau
              aufzeigt, ob Du bei ChatGPT, Gemini und anderen KI-Tools gefunden
              wirst:
            </p>
            <p>
              Die Einrichtung erfolgt innerhalb von 24 Stunden und der GEO
              Tracker ist monatlich kündbar.
            </p>
          </div>
          <GEOTrackerInstallBtn className="mt-16 p-4 md:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/geo-tracker_2.png"
            style={{ width: "600px" }}
            alt="Screenshot von Statistiken zu Prompts"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Du siehst auf einen Blick, ob Du in den KI Antworten aller wichtigen
            KI-Systemen genannt wirst oder nicht.
          </p>
        </div>
      </section>

      <section className="bg-custom-white flex flex-col lg:flex-row lg:items-center gap-12 mt-24 px-4 lg:p-32 2xl:gap-32 2xl:justify-center dark">
        <div className="pt-24 lg:pt-0 flex-1 lg:px-0">
          <h1 className="text-center md:px-16 lg:px-0">
            Der <span className="text-custom-red">Krösche GEO Tracker</span> -
            die beste Datenquelle, um Deine KI Sichtbarkeit zu messen
          </h1>
          <InfoBtn
            content="GEO Tracker"
            className="mx-auto mt-8 lg:mt-12 dark:bg-black"
          />
          <h2 className="text-center mt-4">
            Sichere Dir Deinen Platz in den KI Antworten
          </h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Bislang schafft es kein GEO Tracker, zu einem vernünftigen Preis
              die Sichtbarkeit von Websites in KI-Tools zu messen. Wir haben top
              Entwickler gefunden, der einen technischen Weg herausgefunden hat,
              um die Daten korrekt und kostengünstig tracken zu können. Daraus
              ist der Krösche GEO Tracker entstanden.
            </p>
            <p>
              Damit Du immer sehen kannst, wie gut Du in den KI-Antworten von
              ChatGPT, Gemini, Copilot und Perplexity stehst. Der Krösche GEO
              Tracker ist bereits bei über 100 Firmen im Einsatz –
              weltweit!{" "}
            </p>
            <p>
              Die Einrichtung erfolgt innerhalb von 24 Stunden und der GEO
              Tracker ist monatlich kündbar.
            </p>
          </div>
          <GEOTrackerInstallBtn className="mt-16 p-4 md:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="flex-1 lg:min-w-1/2 2xl:min-w-1/3 ">
          <div className="mt-24 lg:mt-12 xl:min-w-1/3">
            <Image
              src="/images/screenshots/geo-tracker_3.png"
              style={{ width: "600px" }}
              alt="Screenshot eines Prompts"
              height={300}
              width={500}
              className="mx-auto"
            />
            <p className="lg:hidden p-8 italic mx-auto text-center text-sm font-light">
              Firmen und Anbieter, die in den KI Antworten erscheinen, werden
              von potentiellen Kunden gefunden.
            </p>
            <p className="hidden lg:block p-8 italic mx-auto text-center text-sm font-light">
              Firmen und Anbieter, die in den KI Antworten erscheinen, <br />{" "}
              werden von potentiellen Kunden gefunden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-custom-white px-4 lg:px-32 py-24 lg:pb-8">
        <h2 className="md:text-center lg:!my-12">
          Was macht der Krösche GEO Tracker genau?
        </h2>
        <SixBoxLayout boxes={geoTrackerSixBoxContent} />
      </section>

      <section className="flex flex-col 2xl:flex-row 2xl:flex-row-reverse 2xl:items-center px-4 pt-24 lg:gap-12 lg:p-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1">
          <h1 className="text-center">
            Der Krösche GEO Tracker ist bereits bei über{" "}
            <span className="text-custom-red">100 Firmen</span> im Einsatz
          </h1>
          <InfoBtn content="Erfahrung" className="mx-auto mt-8 lg:mt-12 dark" />
          <h2 className="text-center mt-4">Profitiere von unserer Expertise</h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Google Rankings sind weiterhin wichtig. KI Tools wie ChatGPT & Co.
              werden aber in Zukunft in unserer Gesellschaft nicht mehr
              wegzudenken sein. Aus diesem Grund ist es jetzt schon wichtig,
              sich in der KI zu positionieren. Um Neukunden zu gewinnen. Bereits
              über 100 Unternehmen nutzen den Krösche GEO Tracker.
            </p>
            <p>
              Die Einrichtung erfolgt innerhalb von 24 Stunden und der GEO
              Tracker ist monatlich kündbar.
            </p>
          </div>
          <GEOTrackerInstallBtn className="mt-16 p-4 md:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/geo-tracker_4.png"
            style={{ width: "600px" }}
            alt="Screenshot von Statistiken zu Prompts"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Du siehst auf einen Blick, ob Du in den KI Antworten aller wichtigen
            KI-Systemen genannt wirst oder nicht.
          </p>
        </div>
      </section>

      <section className="bg-custom-white flex flex-col xl:flex-row xl:items-center gap-12 mt-24 lg:mt-0 px-4 py-24 lg:p-32 2xl:gap-32 2xl:justify-center dark">
        <div className="flex-1">
          <h1 className="text-center">
            Was sind <span className="text-custom-red">Prompts </span> und warum
            sollte man sie tracken?
          </h1>
          <InfoBtn
            content="Prompts"
            className="mx-auto mt-8 lg:mt-12 dark:bg-black"
          />
          <h2 className="text-center mt-4">Anweisungen an KI Systeme</h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Ein Prompt ist eine Eingabe oder Anweisung, die du einem KI-System
              gibst, damit es weiß, was es tun soll. Einfach gesagt: Ein Prompt
              ist das, was du schreibst, um eine Antwort, einen Text, ein Bild
              oder eine Aktion auszulösen.
            </p>
            <p>Beispiele</p>
            <ol className="pl-8 list-disc flex-col gap-4">
              <li>„Wer ist der beste Makler in Nürnberg?“</li>
              <li>„Suche einen top Zahnarzt in Berlin für mich.“</li>
              <li>„Ich suche einen Anbieter für Wärmebildkameras“</li>
              <li>„Ich suche den besten Physio in München.“</li>
            </ol>
            <p>
              Jeden Tag werden Hunderte Millionen Prompts von uns Menschen
              getätigt. Für Firmen folgt daraus: Je häufiger man in den
              KI-Antworten erscheint, desto höher ist die eigene Sichtbarkeit
              und die Wahrscheinlichkeit, neue Kunden zu gewinnen.
            </p>
            <p>
              Die Einrichtung erfolgt innerhalb von 24 Stunden und der GEO
              Tracker ist monatlich kündbar.
            </p>
          </div>
          <GEOTrackerInstallBtn className="mt-16 p-4 md:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="flex-1 lg:min-w-1/2 2xl:min-w-1/3 ">
          <div className="mt-24 lg:mt-12 xl:min-w-1/3">
            <Image
              src="/images/screenshots/geo-tracker_5.png"
              style={{ width: "600px" }}
              alt="Screenshot von einem Prompt"
              height={300}
              width={500}
              className="mx-auto"
            />
            <p className="lg:hidden p-8 italic mx-auto text-center text-sm font-light">
              Menschen suchen bei ChatGPT, indem sie mit dem Chatfeld
              interagieren. Das, was sie dort eingeben, nennt man „Prompt“ (also
              Suchphrase / Keyword etc.)
            </p>
            <p className="hidden lg:block p-8 italic mx-auto text-center text-sm font-light">
              Menschen suchen bei ChatGPT, indem sie mit dem Chatfeld
              interagieren. <br /> Das, was sie dort eingeben, nennt man
              „Prompt“ (also Suchphrase / Keyword etc.)
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:items-center gap-12 lg:mt-0 px-4 pt-24 lg:p-32 2xl:gap-32 2xl:justify-center ">
        <div className="flex-1">
          <h1 className="text-center">
            Was versteht man unter <span className="text-custom-red">GEO</span>?
          </h1>
          <InfoBtn content="GEO" className="mx-auto mt-8 lg:mt-12 dark" />
          <h2 className="text-center mt-4">
            Optimierung der Website für KI-Systeme
          </h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Unter GEO versteht man Generative Engine Optimization – also die
              Optimierung der Website, um in KI-Systeme angezeigt zu werden. Je
              besser eine Website optimiert ist, desto häufiger wird sie
              angezeigt. Und desto mehr Neukunden können gewonnen werden.
            </p>
            <p>
              GEO ist DIE Marketingdisziplin der Zukunft. Firmen, die in den KI
              Systemen nicht erscheinen, werden Marktanteile verlieren, da sie
              weniger Neukunden bekommen als der Wettbewerb.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:min-w-1/2 2xl:min-w-1/3 ">
          <div className="mt-12 xl:min-w-1/3">
            <Image
              src="/images/screenshots/geo-tracker_6.png"
              style={{ width: "600px" }}
              alt="Screenshot von einem Prompt"
              height={300}
              width={500}
              className="mx-auto"
            />
            <p className="lg:hidden p-8 italic mx-auto text-center text-sm font-light">
              Unter GEO versteht man die Optimierung einer Firmen-Website, um
              sie in den KI-Antworten von ChatGPT, Gemini & Co. für bestimmte
              Prompts anzeigen zu lassen.
            </p>
            <p className="hidden 2xl:block p-8 italic mx-auto text-center text-sm font-light">
              Unter GEO versteht man die Optimierung einer Firmen-Website, um{" "}
              <br />
              sie in den KI Antworten von ChatGPT, Gemini & Co. für bestimmte
              Prompts anzeigen zu lassen.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col 2xl:flex-row 2xl:flex-row-reverse 2xl:items-center px-4 pt-24 lg:gap-12 lg:p-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1">
          <h1 className="text-center">
            Der <span className="text-custom-red">Krösche GEO Tracker</span> ist
            die ideale Grundlage
          </h1>
          <InfoBtn content="Basis" className="mx-auto mt-8 lg:mt-12 dark" />
          <h2 className="text-center mt-4">
            Überlick über Deine Sichtbarkeit im Netz
          </h2>
          <div className="flex flex-col gap-4 font-light mt-8">
            <p>
              Der Krösche GEO Tracker liefert Dir das Fundament für alle
              digitalen Marketingentscheidungen der Zukunft. Anstatt Dich auf
              Vermutungen zu verlassen, erhältst Du eine glasklare Analyse
              Deiner aktuellen Positionierung in der KI-Landschaft. Nur wer
              seine Ausgangslage kennt, kann seine Inhalte gezielt so
              optimieren, dass sie von ChatGPT, Gemini und Co. als
              vertrauenswürdige Antwortquelle ausgewählt werden.
            </p>
            <p>
              Die Einrichtung erfolgt innerhalb von 24 Stunden und der GEO
              Tracker ist monatlich kündbar.
            </p>
          </div>
          <GEOTrackerInstallBtn className="mt-16 p-4 lg:w-2/3" />
        </div>
        <div className="mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/geo-tracker_4.png"
            style={{ width: "600px" }}
            alt="Screenshot von Statistiken zu Prompts"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Du siehst auf einen Blick, ob Du in den KI Antworten aller wichtigen
            KI-Systemen genannt wirst oder nicht.
          </p>
        </div>
      </section>

      <section className="bg-custom-white dark">
        <div className="mt-24 lg:mt-0 pt-24 lg:px-32 px-4 lg:pt-32 lg:pb-16 lg:max-w-2/3">
          <h1 className="">
            Pricing: Das kostet der Krösche{" "}
            <span className="text-custom-red">Krösche GEO Tracker</span>
          </h1>
          <p>
            Der Krösche GEO Tracker ist mit Abstand das günstigste Tool auf dem
            Markt. Wie wir das schaffen? Wir haben eine technische Möglichkeit
            gefunden, die Daten kostengünstig (und korrekt) zu erheben. Zudem
            verzichten wir auf technischen Schnickschnack und konzentrieren uns
            auf das, was Dir wichtig ist. Schnell und einfach zu sehen, wie gut
            Du bei ChatGPT & Co. für Deine Prompts rankst.
          </p>
          <GEOTrackerInstallBtn className="mt-16 p-4 md:w-2/3 mx-auto lg:mx-0" />
        </div>
        <div className="pt-24 lg:pb-32 bg-custom-white dark:bg-black">
          <PricingGEOTracker
            pricingBoxes={geoTrackerPriceBoxes}
            className="px-4 lg:px-32 "
          />
        </div>
      </section>

      <section
        id="geo-tracker-install-section"
        className="pt-24 lg:px-32 pb-24 bg-custom-white"
      >
        <div className="px-4 lg:px-0">
          <h1 className="lg:text-center">
            Jetzt Krösche <span className="text-custom-red">GEO Tracker</span>{" "}
            bestellen und KI Sichtbarkeit messen
          </h1>
          <p className="lg:text-center">
            Die Einrichtung des Krösche GEO Trackers ist simpel und geht
            schnell. Du wählst ganz einfach eines der 3 Pakete aus und schickst
            uns Deine Prompts mit. Falls Du nicht weißt, welche Prompts zu
            tracken möchtest, schauen wir uns Deine Seite an und richten alles
            ein.{" "}
          </p>
        </div>
        <form
          action={submitGeoTracker}
          className="mt-12 lg:mt-24 max-w-4xl mx-auto bg-white p-8 pb-12 rounded-xl dark"
        >
          <div className="flex-1">
            <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
              GEO Tracker
            </span>
            <p className="mt-12">
              <span className="font-bold">Ja</span>, ich möchte den Krösche GEO
              Tracker bestellen. Der Tracker kann jederzeit zum Monatsende
              gekündigt werden.
            </p>
            <p className="mt-8">
              Wie viele Prompts sollen wir für Dich tracken?
            </p>
            <div className="mt-4 flex flex-col lg:flex-row gap-2 lg:gap-12 lg:gap-4">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="promptNr"
                  value="10"
                  id="10"
                  required
                />
                <label htmlFor="10">10 Prompts</label>
              </div>

              <div className="flex gap-4">
                <input
                  type="radio"
                  name="promptNr"
                  value="20"
                  id="20"
                  required
                />
                <label htmlFor="20">20 Prompts</label>
              </div>

              <div className="flex gap-4">
                <input
                  type="radio"
                  name="promptNr"
                  value="30"
                  id="30"
                  required
                />
                <label htmlFor="30">30 Prompts</label>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="promptsText">
              Gib hier die Prompts ein, die wir für Dich tracken sollen:
            </label>
            <textarea
              name="promptsText"
              id=""
              className="border border-slate-200 dark:border-none h-40 w-full p-4 mt-4 dark:bg-slate-800"
              placeholder="Deine Prompts...."
            ></textarea>
          </div>
          <p className="mt-12">Rechnungsanschrift</p>
          <div className="flex flex-col mt-4">
            <div className="rechnungsForm flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 lg:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="company" className="w-40">
                    Firma*
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="lg:lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="anrede" className="w-40">
                    Anrede*
                  </label>
                  <select
                    name="anrede"
                    id="anrede"
                    required
                    className="lg:w-60 h-10 rounded-lg bg-slate-200 p-2 rounded-lg"
                  >
                    <option value="male">Herr</option>
                    <option value="female">Frau</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="w-40">
                    Vorname*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName" className="w-40">
                    Nachname*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="street" className="w-40">
                    Strasse*
                  </label>
                  <input
                    type="text"
                    name="street"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="plz" className="w-40">
                    PLZ*
                  </label>
                  <input
                    type="text"
                    name="plz"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="city" className="w-40">
                    Ort*
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="country" className="w-40">
                    Land*
                  </label>
                  <select
                    id="country"
                    name="country"
                    defaultValue="DE"
                    required
                    className="lg:w-60 bg-slate-200 rounded-lg h-10 p-2"
                  >
                    <option value="">Bitte wählen...</option>
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="w-40">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="invoiceEmail" className="w-40">
                    Email für Rechnung
                  </label>
                  <input
                    type="email"
                    name="invoiceEemail"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="usstID" className="w-40">
                    UmsatzsteuerID*
                  </label>
                  <input
                    type="text"
                    name="usstID"
                    className="lg:w-60 bg-slate-200 p-2 rounded-lg"
                  />
                </div>
              </div>
            </div>
            <button
              className={`mt-12 px-12 py-2 bg-custom-red text-white rounded-lg text-center max-w-sm mx-auto`}
            >
              GEO Tracker bestellen
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
