import { FiPhone, FiMail } from "react-icons/fi";
import workshops from "../content/workshopsContent";
import InfoBtn from "./buttons/InfoBtn";

type Props = {
  className?: string;
};

export default function Workshops({ className }: Props) {
  return (
    <section className={`px-4 pt-24 lg:p-32 bg-custom-white ${className}`}>
      <div className="">
        <div className="lg:hidden text-center">
          <h2>
            {" "}
            Wir geben unsere <span className="text-custom-red">Expertise </span>
            weiter und schulen Firmen aus der ganzen DACH-Region.
          </h2>
          <p>
            Suchmaschinenmarketing ist ein schnelllebiges Feld. Seit 2017 geben
            wir Firmen aus der gesamten DACH-Region Schulungen in den Bereichen
            SEO, Google Ads Kundengewinnung im Internet
          </p>
        </div>
        <h1 className="hidden lg:block pb-8 tracking-wide font-semibold text-center">
          Wir geben unsere <span className="text-custom-red">Expertise </span>
          weiter und schulen Firmen aus der ganzen DACH-Region.
          Suchmaschinenmarketing ist ein schnelllebiges Feld. Seit 2017 geben
          wir Firmen aus der gesamten DACH-Region Schulungen in den Bereichen{" "}
          <span className="text-red-500">SEO</span>,
          <span className="text-red-500"> Google Ads</span>,{" "}
          <span className="text-red-500"> Kundengewinnung im Internet</span>.
        </h1>
        <InfoBtn content="Workshops" className="mx-auto mt-4 mb-8 lg:mb-16" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 pt-12 max-w-7xl lg:mx-auto">
        {workshops.map((e, index) => (
          <div key={index} className="flex flex-col p-8 bg-white rounded-xl">
            <div className="flex flex-col items-start gap-2">
              <span className="text-white bg-custom-red font-semibold tracking-tight py-2 px-4 rounded-lg">
                Workshop
              </span>
              <span className="font-semibold tracking-tight">{e.keyword}</span>
            </div>
            <h2 className="text-xl font-semibold tracking-wide mt-8 mb-4">
              {e.title}
            </h2>
            <p>{e.text}</p>
          </div>
        ))}
        <div className="pb-12 lg:py-0 flex flex-col items-center lg:items-start gap-4 lg:flex-row lg:gap-8 text-custom-red p-2 mt-4 lg:mt-12">
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
      </div>
    </section>
  );
}
