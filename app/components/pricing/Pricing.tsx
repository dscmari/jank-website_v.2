import { IoIosCheckmarkCircle } from "react-icons/io";

type PricingBox = {
  icon: string;
  title: string;
  subTitle: string;
  introText: string;
  services: string[];
  closingText: string;
  outroText?: React.ReactNode;
  contactText?: string;
}

type Props = {
  className?: string;
  pricingBoxes: PricingBox[]
};

export default function Pricing({ className, pricingBoxes }: Props) {
  return (
    <section className={`${className}`}>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 xl:justify-around">
        {pricingBoxes.map((e, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-between xl:flex-1 xl:m-0 p-8 rounded-lg dark"
          >
            <div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                  {e.icon}
                </span>
                <span className="font-semibold tracking-tight">{e.title}</span>
                <span className="font-light">{e.subTitle}</span>
              </div>

              <h1 className="text-center mt-16">{e.title}</h1>
              <p className="mt-4 mb-8 font-light text-sm">{e.introText}</p>
              <span className="font-semibold tracking-tight">Leistungen</span>
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2">
                {e.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <IoIosCheckmarkCircle color="rgb(231,0,53)" size={24} className="shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="pb-8 text-sm font-light border-b-1 border-black/20">
                {e.closingText}
              </p>
              <div>
                <span className="mt-4 block text-center font-light">
                    {e.contactText ? e.contactText : "Preisanfrage unter"}
                </span>
                <span className="block text-center text-custom-red">
                  {" "}
                  jan@jankroesche.de
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
