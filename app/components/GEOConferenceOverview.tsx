import { GoDiamond } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Workshop = {
  introduction: {
    title: React.ReactNode;
    infoBtnText: string;
    subtitle: React.ReactNode;
    textBoxOne: React.ReactNode;
    textBoxTwo: React.ReactNode;
    textBoxThree: React.ReactNode;
    textBoxFour?: React.ReactNode;
  };
  content: {
    iconText: React.ReactNode;
    title: string;
    subtitle: React.ReactNode;
    text: React.ReactNode;
    bullets: string[];
    dates:string[]
    closing: React.ReactNode;
  };
};

type Props = {
  className?: string;
  conference: Workshop
};

export default function GEOConferenceOverview({ className, conference }: Props) {
  return (
    <div className={`${className}`}>
      <div className="bg-custom-white flex flex-col justify-between px-4 p-4 md:p-8 rounded-xl dark">
        <div>
          <div className="flex flex-col items-start gap-2">
            {conference.content.iconText}
            <span className="font-semibold tracking-tight">
              Die {conference.content.title} auf einen Blick
            </span>
            {conference.content.subtitle}
          </div>
          <h1 className="text-center mt-16 !mb-8">
            {conference.content.title}
          </h1>
          <span className="font-semibold tracking-tight">Tagungsinhalte</span>
          <div className="flex flex-col gap-2 mt-2 mb-8">
            {conference.content.bullets.map((e, index) => (
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

          <span className="font-semibold tracking-tight">Eckdaten</span>
          <div className="flex flex-col gap-2 mt-2">
            {conference.content.dates.map((e, index) => (
              <div key={index} className="flex items-start gap-2">
                <GoDiamond
                  color="rgb(231,0,53)"
                  size={16}
                  className="shrink-0 mt-1"
                />
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <span className="pt-8 border-t-1 border-slate-700 mt-4 block text-center text-base/5 font-light">
            Anmeldung zur Konferenz per Mail unter
          </span>
          <span className="block text-center text-custom-red">
            {" "}
            jan@jankroesche.de
          </span>
        </div>
      </div>
    </div>
  );
}
