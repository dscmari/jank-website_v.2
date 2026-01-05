import Image from "next/image";
import StaticForms from "./StaticForms";
import InfoBtn from "./buttons/InfoBtn";

type Props = {
  isGeo?: boolean;
  className?: string;
};

export default function WebsiteCheck({ isGeo, className }: Props) {
  return (
    <section
      className={`bg-custom-red lg:bg-white text-custom-white lg:text-custom-black p-8 pt-12 ${className}`}
    >
      <div className="lg:flex lg:gap-16">
        <div className="hidden lg:block max-w-[640px] relative">
          <img
            src="/images/portraits/portrait_turned_side.jpg"
            alt=""
            className="w-full rounded-tr-4xl rounded-b-4xl"
          />
          <div className="absolute w-3/4 text-custom-white left-16 bottom-0 -translate-y-1/4 leading-8 font-semibold">
            <Image
              src="/images/logo_white_bg_transparent.png"
              alt="Jan Krösche Logo"
              style={{ width: "100px" }}
              width={400}
              height={200}
            />
            <p>
              "Wir haben schon über 1.000 SEO-Analysen seit 2017 durchgeführt.
              Wir haben alle Fehler gesehen, die man im SEO machen kann. Von
              dieser Erfahrung profitierst Du."
            </p>
          </div>
        </div>
        <div className="lg:max-w-1/2">
        <InfoBtn content={"Website Check"} className="lg:mt-8 hidden lg:block"/>
          <div className="lg:flex lg:flex-col 2xl:justify-center lg:py-8 ">
            <h1 className="mb-4 lg:mb-0 font-semibold tracking-tight lg:text-custom-red">
              {isGeo ? "Kostenloser KI GEO Check" : "Kostenloser Website Check"}
            </h1>
            {isGeo ? (
              <p className="lg:font-semibold">
                Du willst bei ChatGPT, Gemini und Copilot in den Antworten
                erscheinen und mehr Anfragen generieren? Ich schaue mir Deine
                Website an und schicke Dir GEO Optimierungsvorschläge als Datei
                per Mail zu. Komplett kostenlos.
              </p>
            ) : (
              <p className="lg:font-semibold">
                Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr
                Anfragen generieren? Ich schaue mir Deine Website an und schicke
                Dir Optimierungsvorschläge als Datei per Mail zu. Komplett
                kostenlos.
              </p>
            )}
            <StaticForms />
          </div>
        </div>
      </div>
    </section>
  );
}
