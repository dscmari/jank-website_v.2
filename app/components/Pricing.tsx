import { IoIosCheckmarkCircle } from "react-icons/io";
import pricingBoxes from "../content/pricingBoxes";

type Props = {
  className?: string;
};

export default function Pricing({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 lg:justify-around">
        {pricingBoxes.map((e, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-between lg:flex-1 lg:m-0 p-8 rounded-lg"
          >
            <div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                  Paket {index + 1}
                </span>
                <span className="font-semibold tracking-tight">{e.title}</span>
                <span className="font-light">{e.subTitle}</span>
              </div>

              <h1 className="text-center mt-16">{e.title}</h1>
              <p className="mt-4 mb-8 font-light text-base/5">{e.introText}</p>
              <span className="font-semibold tracking-tight">Leistungen</span>
              <div key={index} className="flex flex-col gap-2 mt-2">
                {e.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <IoIosCheckmarkCircle color="rgb(231,0,53)" size={24} className="shrink-0"/>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="pb-8 text-base/5 font-light border-b-1 border-slate-700">
                Wir sind keine Webdesigner und führen keine technischen
                Änderungen durch. Natürlich passen wir die Strategie an Deine
                Firma individuell an.
              </p>
              <span className="mt-4 block text-center text-base/5 font-light">
                Preisanfrage unter
              </span>
              <span className="block text-center text-custom-red">
                {" "}
                jan@jankroesche.de
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-24 lg:gap-8 lg:justify-around"></div>
    </div>
  );
}
