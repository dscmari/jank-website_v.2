import InfoBtn from "../buttons/InfoBtn";
import GEOConferenceOverview from "../GEOConferenceOverview";

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
    dates: string[];
    closing: React.ReactNode;
  };
};

type Props = {
  workshop: Workshop;
  className?: string;
};

export default function KroescheWorkshopIntroLayout({
  className,
  workshop,
}: Props) {
  return (
    <div>
      <section
        className={`flex flex-col lg:flex-row gap-16 lg:px-32 lg:mt-24 ${className}`}
      >
        <div className="px-4 lg:p-8 flex-1">
          <div className="hidden lg:block">{workshop.introduction.title}
            </div>
          <InfoBtn
            content={workshop.introduction.infoBtnText}
            className="mx-auto mt-12 dark mb-8"
          />
          {workshop.introduction.subtitle}
          <div className="flex flex-col gap-4 mt-12">
            {workshop.introduction.textBoxOne}
            {workshop.introduction.textBoxTwo}
            {workshop.introduction.textBoxThree}
            {workshop.introduction.textBoxFour}
          </div>
        </div>
        <div className="flex-1 ">
          <GEOConferenceOverview conference={workshop} className="px-4" />
        </div>
      </section>
    </div>
  );
}
