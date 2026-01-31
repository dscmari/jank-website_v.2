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
            width={200}
            height={200}
            className="w-[100px] lg:w-[200px]"
          />
          <Image
            src="/images/logo_hotel_sonneck.png"
            alt="Logo Ringhotel Sonneck Bad Wörishofen"
            width={200}
            height={200}
            className="w-[100px] lg:w-[200px]"
          />
        </div>
        <h1 className="lg:text-center pt-24 lg:pt-32">
          Ablauf der GEO Konferenz am 8. Mai 2026
        </h1>
        <div className="flex flex-col gap-4 lg:gap-2 my-16 text-xl">
          <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center">
            <span className="font-semibold lg:min-w-40">Datum:</span>
            <span>08.05.2026</span>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center">
            <span className="font-semibold lg:min-w-40">Uhrzeit:</span>
            <span>10.00 - 16.00 Uhr</span>
          </div>
          <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row ">
            <span className="font-semibold lg:min-w-40">Ort:</span>
            <div className="flex flex-col">
              <span>Tagungshotel Sonneck in Bad Wörishofen</span>
              <span> Tannenbaum 1, 86825 Bad Wörishofen</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col dark:text-darkmode-blue">
          <div className="bg-slate-200 p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                  
                </span>{" "}
                <span className="font-semibold">Begrüßung & Kennenlernen</span>
              </div>
              <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                10.00 Uhr
              </span>{" "}
            </div>
          </div>
          <div className="bg-slate-300 p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                  01
                </span>{" "}
                <span className="font-semibold">
                  Marketingpotenzial GEO: Mehr Umsatz durch KI Sichtbarkeit?!
                </span>
              </div>
              <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                10.15 - 10.45 Uhr
              </span>{" "}
            </div>
            <div className="flex flex-items gap-2 lg:gap-0 pt-2">
              <span className="lg:min-w-60">Referent</span>{" "}
              <span>Jan Krösche</span>
            </div>
          </div>
          {/* <div className="p-4">
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
          </div> */}
          <div className="bg-slate-200 p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                  02
                </span>{" "}
                <span className="font-semibold">
                  GEO in der Umsetzung: Inhalte der Firmenwebsite bei ChatGPT sichtbar machen
                </span>
              </div>
              <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                11.00 - 11.30 Uhr
              </span>{" "}
            </div>
            <div className="flex flex-items gap-2 lg:gap-0 pt-2">
              <span className="lg:min-w-60">Referent</span>{" "}
              <span>Bastian Huber</span>
            </div>
          </div>
          <div className="bg-slate-300 p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                  03
                </span>{" "}
                <span className="font-semibold">
                  KI Ads / ChatGPT Ads: Anzeigenschaltung in der KI zur Neukundengewinnung
                </span>
              </div>
              <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                11.45 - 12.15 Uhr
              </span>{" "}
            </div>
            <div className="flex flex-items gap-2 lg:gap-0 pt-2">
              <span className="lg:min-w-60">Referentinnen</span>{" "}
              <span>Lisa Bachmann & Jessica Feneberg</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-4xl"></span>{" "}
                <span className="dark:text-white">Mittagspause inkl. gemeinsames Essen im Hotel</span>
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
                  04
                </span>{" "}
                <span className="font-semibold">
                  ChatGPT Shopping: Produkte über KI Systeme verkaufen
                </span>
              </div>
              <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                14.00 - 14.30 Uhr
              </span>{" "}
            </div>
            <div className="flex flex-items gap-2 lg:gap-0 pt-2">
              <span className="lg:min-w-60">Referent</span>{" "}
              <span>Jan Krösche</span>
            </div>
          </div>
          <div className="bg-slate-300 p-4">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0">
                <span className="lg:min-w-60 text-neutral-400 font-bold text-xl lg:text-4xl">
                  05
                </span>{" "}
                <span className="font-semibold">
                  Erfahrungsaustausch und Diskussion
                </span>
              </div>
              <span className="pt-2 lg:pt-0 min-w-48 w-full lg:w-auto text-left lg:text-right">
                14.45 - 15.45 Uhr
              </span>{" "}
            </div>
            <div className="flex flex-items gap-2 lg:gap-0 pt-2">
              <span className="lg:min-w-60">Moderation</span>{" "}
              <span>Christa Holzenkamp</span>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <span className="lg:min-w-60 ">Ende der Veranstaltung um 16.00 Uhr</span>{" "}
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
