import Image from "next/image";

type Props = {
  className?: string;
};

export default function Timetable({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="p-4 md:p-8 lg:p-16 mx-auto max-w-5xl rounded-xl bg-white dark">
        <div className="flex justify-between">
          <Image
            src="/images/jank_logo.jpg"
            alt="Logo Jan Kroesche"
            style={{ width: "100px" }}
            width={200}
            height={200}
          />
          <Image
            src="/images/logo_hotel_sonneck.png"
            alt="Logo Ringhotel Sonneck Bad Wörishofen"
            style={{ width: "100px" }}
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-center pt-24">
          Ablauf der GEO Konferenz am 17. April 2026
        </h1>
        <div className="flex flex-col gap-4 lg:gap-2 my-16 text-xl">
          <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center">
            <span className="font-semibold lg:min-w-40">Datum:</span>
            <span>17.04.2026</span>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center">
            <span className="font-semibold lg:min-w-40">Uhrzeit:</span>
            <span>9.00 - 16.00 Uhr</span>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center">
            <span className="font-semibold lg:min-w-40">Ort:</span>
            <span>Tagungshotel Sonneck in Bad Wörishofen</span>
          </div>
        </div>
        <div className="flex flex-col dark:text-darkmode-blue">
          <div className="bg-slate-200 p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                  01
                </span>{" "}
                <span className="font-semibold">Begrüßung & Kennenlernen</span>
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
                <span className="dark:text-custom-white">15 Minuten Pause</span>
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
                  Website bei ChatGPT & Co. sichtbar machen – Konkrete Maßnahme
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
                <span className="dark:text-custom-white">Mittagspause inkl. gemeinsames Essen</span>
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
    </div>
  );
}
