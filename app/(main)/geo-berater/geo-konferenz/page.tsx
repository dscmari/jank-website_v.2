import Breadcrumbs from "@/app/components/Breadcrumps";
import KroescheKonferenzIntroLayout from "@/app/components/layouts/KroescheKonferenzIntroLayout";
import { geoKonferenz } from "@/app/content/KroescheKurseContent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GEO Konferenz im Allgäu 17.04.26 | GEO Seminar Bad Wörishofen",
};

export default function page() {
  return (
    <div>
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <section className="pt-12 lg:px-32 px-4 lg:pt-32 lg:pb-16 xl:max-w-3/4 2xl:max-w-2/3">
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
      </section>
      <section>
        <KroescheKonferenzIntroLayout
          workshop={geoKonferenz}
          className="dark:pt-12"
        />
      </section>
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
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
      <section className="md:px-8 lg:px-32">
        <div className="p-4 md:p-8 lg:p-16 mx-auto max-w-6xl bg-custom-white rounded-xl">
          <h1 className="text-center pt-12">
            Ablauf der GEO Konferenz am 17.04.2026
          </h1>
          <div className="flex flex-col gap-2 my-16 text-xl">
            <div className="flex items-center">
              <span className="font-semibold min-w-40">Datum:</span>
              <span>14.04.2026</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold min-w-40">Uhrzeit:</span>
              <span>9.00 - 16.00 Uhr</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold min-w-40">Ort:</span>
              <span>Tagungshotel Sonneck in Bad Wörishofen</span>
            </div>
          </div>
          <div className="flex flex-col md:text-xl">
            <div className="bg-slate-200 p-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                    01
                  </span>{" "}
                  <span className="font-semibold">
                    Begrüßung & Kennenlernen
                  </span>
                </div>
                <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                  9.00 - 9.15 Uhr
                </span>{" "}
              </div>
              <div className="flex flex-items gap-2 lg:gap-0 pt-2">
                <span className="lg:min-w-60">Redner:</span>{" "}
                <span>Jan Krösche</span>
              </div>
            </div>
            <div className="bg-slate-300 p-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                    02
                  </span>{" "}
                  <span className="font-semibold">
                    Status Quo im GEO – aktuelle Entwicklungen
                  </span>
                </div>
                <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                  9.15 - 10.30 Uhr
                </span>{" "}
              </div>
              <div className="flex flex-items gap-2 lg:gap-0 pt-2">
                <span className="lg:min-w-60">Redner:</span>{" "}
                <span>Jan Krösche</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-4xl"></span>{" "}
                  <span className="">15 Minuten Pause</span>
                </div>
                <span className=""></span>{" "}
              </div>
              <div className="flex flex-items pt-2">
                <span className="lg:min-w-60"></span> <span></span>
              </div>
            </div>
            <div className="bg-slate-200 p-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                    03
                  </span>{" "}
                  <span className="font-semibold">
                    Website bei ChatGPT & Co. sichtbar machen – Konkrete
                    Maßnahme
                  </span>
                </div>
                <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                  10.45 - 12.30 Uhr
                </span>{" "}
              </div>
              <div className="flex flex-items gap-2 lg:gap-0 pt-2">
                <span className="lg:min-w-60">Redner:</span>{" "}
                <span>Jan Krösche</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-4xl"></span>{" "}
                  <span className="">Mittagspause inkl. gemeinsames Essen</span>
                </div>
                <span className=""></span>{" "}
              </div>
              <div className="flex flex-items pt-2">
                <span className="lg:min-w-60"></span> <span></span>
              </div>
            </div>
            <div className="bg-slate-300 p-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                    04
                  </span>{" "}
                  <span className="font-semibold">
                    Gemeinsamer GEO Audit einer Website, um Optimierungen zu
                    identifizieren
                  </span>
                </div>
                <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                  14.00 - 15.00 Uhr
                </span>{" "}
              </div>
              <div className="flex flex-items gap-2 lg:gap-0 pt-2">
                <span className="lg:min-w-60">Redner:</span>{" "}
                <span>Bastian Huber</span>
              </div>
            </div>
            <div className="bg-slate-200 p-4">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                  <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                    05
                  </span>{" "}
                  <span className="font-semibold">
                    Diskussionsrunde zu KI- und GEO-Themen
                  </span>
                </div>
                <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                  15.00 - 16.00 Uhr
                </span>{" "}
              </div>
              <div className="flex flex-items gap-2 lg:gap-0 pt-2">
                <span className="lg:min-w-60">Redner:</span>{" "}
                <span>Bastian Huber & Jan Krösche</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <span className="lg:min-w-60 ">Ende der Veranstaltung</span>{" "}
                  <span className=""></span>
                </div>
                <span className=""></span>{" "}
              </div>
              <div className="flex flex-items pt-2">
                <span className="lg:min-w-60"></span> <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
