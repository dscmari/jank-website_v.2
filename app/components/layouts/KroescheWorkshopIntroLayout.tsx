import { IoIosCheckmarkCircle } from "react-icons/io";
import InfoBtn from "../buttons/InfoBtn";

//TODO Workshop Component fertig stellen und in geo kurs, ads kurs, seo kurs und agenturen workshops integrieren

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
    closing: React.ReactNode;
  };
};

type Props = {
  workshop: Workshop;
  className?: string;
};

export default function KroescheWorkshopIntroLayout({ className, workshop }: Props) {
  return (
    <div>
      <section className={`flex flex-col lg:flex-row gap-8 lg:px-32 lg:mt-24 ${className}`}>
        <div className="px-4 lg:p-8 flex-1">
          {workshop.introduction.title}
          <InfoBtn
            content={workshop.introduction.infoBtnText}
            className="mx-auto mt-12 dark"
          />
          {workshop.introduction.subtitle}
          <div className="flex flex-col gap-4 mt-12">
            {workshop.introduction.textBoxOne}
            {workshop.introduction.textBoxTwo}
            {workshop.introduction.textBoxThree}
            {workshop.introduction.textBoxFour}
          </div>
        </div>
        <div className="flex-1 bg-custom-white flex flex-col justify-between py-12 lg:pt-0 px-4 lg:p-8 mt-12 md:mx-4 lg:m-0 rounded-xl dark">
          <div>
            <div className="flex flex-col items-start gap-2 pt-8">
              {workshop.content.iconText}
              <span className="font-semibold tracking-tight">
                Der {workshop.content.title} auf einen Blick
              </span>
              {workshop.content.subtitle}
            </div>
            <h1 className="text-center mt-8 lg:mt-16">
              {workshop.content.title}
            </h1>
            {workshop.content.text}
            <span className="font-semibold tracking-tight">Leistungen</span>
            <div className="flex flex-col gap-2 mt-2">
              {workshop.content.bullets.map((e, index) => (
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
            {workshop.content.closing}
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
