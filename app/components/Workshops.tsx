import { FiPhone, FiMail } from "react-icons/fi";

type Props = {
  className?: string;
};

export default function Workshops({ className }: Props) {
  return (
    <section className={`px-4 pt-24 lg:p-32 bg-custom-white ${className}`}>
      <div className="">
        <div className="lg:hidden">
          <h2>
            {" "}
            Wir geben unsere <span className="text-custom-red">Expertise </span>
            weiter und schulen Firmen aus der ganzen DACH-Region.
            Suchmaschinenmarketing ist ein schnelllebiges Feld.{" "}
          </h2>
          <h2>
            Seit 2017 geben wir Firmen aus der gesamten DACH-Region Schulungen
            in den Bereichen <span className="text-red-500">SEO</span>,
            <span className="text-red-500"> Google Ads</span>,{" "}
            <span className="text-red-500"> Kundengewinnung im Internet</span>.
          </h2>
        </div>
        <p className="hidden lg:block pb-8 lg:text-3xl/10 tracking-wide font-semibold">
          Wir geben unsere <span className="text-custom-red">Expertise </span>
          weiter und schulen Firmen aus der ganzen DACH-Region.
          Suchmaschinenmarketing ist ein schnelllebiges Feld. Seit 2017 geben
          wir Firmen aus der gesamten DACH-Region Schulungen in den Bereichen{" "}
          <span className="text-red-500">SEO</span>,
          <span className="text-red-500"> Google Ads</span>,{" "}
          <span className="text-red-500"> Kundengewinnung im Internet</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 pt-12 max-w-7xl lg:mx-auto">
        <div className="flex flex-col p-8 bg-white rounded-xl">
          <h3 className="text-xl font-semibold tracking-wide mb-4">
            Workshop für die Bauer AG aus Schrobenhausen
          </h3>
          <p className="">
            Für das Marketing- und PR-Team der Bauer AG haben wir einen Workshop
            durchgeführt zum Thema Suchmaschinenoptimierung. Ziel des Workshops
            war es, das Wissen zu vermitteln, wie Inhalte auf der Website
            eingebunden werden können, um die Reichweite und die Rankings bei
            Google zu erhöhen
          </p>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl">
          <h3 className="text-xl font-semibold tracking-wide mb-4">
            Workshop für die Software-Firma rocom
          </h3>
          <p className="">
            Für die Software-Firma rocom haben wir einen SEO Workshop vor Ort
            gehalten. Ziel war es, den Mitarbeitenden einen Überblick zu den SEO
            Grundlagen zu vermitteln: Title Tags, Backlinks,
            Überschriftenstruktur etc..
          </p>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl">
          <h3 className="text-xl font-semibold tracking-wide mb-4">
            Workshop für das Hotel Bayerischer Hof in München
          </h3>
          <p className="">
            Für das renommierte Hotel Bayerischer Hof haben wir einen Workshop
            zum Thema Suchmaschinenmarketing durchgeführt. Dabei haben wir uns
            im Vorfeld die Website des Hotels angeschaut und konkrete
            Verbesserungen ausgearbeitet und im Workshop vorgeführt und erklärt.
          </p>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-xl">
          <h3 className="text-xl font-semibold tracking-wide mb-4">
            Workshop für den Hersteller BH Sens zur ChatGPT-Optimierung
          </h3>
          <p className="">
            Für die Hersteller Firma BH Sens haben wir einen KI SEO Workshop
            durchgeführt. Ziel war es, den Marketingverantwortlichen der Firma
            zu zeigen, wie man mit der Website bei ChatGPT besser gefunden
            werden kann und in den Antworten zitiert wird.
          </p>
        </div>
      </div>
      <div className="py-12 lg:py-0 flex flex-col items-center lg:items-start gap-4 lg:flex-row lg:gap-8 text-custom-red p-2 mt-4 lg:mt-12">
        <div className="flex gap-2 items-center">
          <FiPhone color="rgb(231,0,53)" />
          <span className="text-xl font-semibold">+49 176 55109383</span>
        </div>
        <div className="flex gap-2 items-center">
          <FiMail color="rgb(231,0,53)" />
          <a
            href="mailto:max.mustermann@ihre-domain.de"
            className="text-xl font-semibold underline"
          >
            jan@jankroesche.de
          </a>
        </div>
      </div>
    </section>
  );
}
