import { IoIosCheckmarkCircle } from "react-icons/io";
import LinkAdsKurs from "../links/LinkAdsKurs";
import { FiArrowRight } from "react-icons/fi";

type Box = {
  iconText: string;
  title: string;
  subtitle: string;
  text: string;
  services: string[];
  linkComponent: React.ReactNode;
};

type Props = {
  className?: string;
  boxes: Box[];
};

export default function FourBoxLayout({ className, boxes }: Props) {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 lg:justify-around">
        {boxes.map((e, index) => (
          <div
            key={index}
            className="bg-white grid justify-between lg:m-0 p-8 rounded-lg"
          >
            <div>
              {" "}
              <div className="flex flex-col items-start gap-2">
                <span className="text-white bg-custom-red font-semibold tracking-tight py-1 px-2 rounded-lg">
                  {e.iconText}
                </span>
                <span className="font-semibold tracking-tight">{e.title}</span>
                <span className="font-light">{e.subtitle}</span>
              </div>
              <div>
                <h1 className="text-center mt-12">{e.title}</h1>
                <p className="mt-4 mb-8 lg:mb-12 font-light text-base/5">
                  {e.text}
                </p>
              </div>
              <span className="font-semibold tracking-tight">Leistungen</span>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2 mt-2">
                  {e.services.map((service, index) => (
                      <div key={index} className="flex gap-4 lg:gap-2">
                        <div className="shrink-0">
                          <IoIosCheckmarkCircle
                            color="rgb(231,0,53)"
                            size={24}
                          />
                        </div>

                        <span>{service}</span>
                      </div>
                    ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-12">
              {index === 0 ? (
                <button className="mt-8 lg:text-xl p-4 w-full bg-custom-red text-custom-white rounded-lg flex items-center justify-between">
                  <LinkAdsKurs />
                  <FiArrowRight />
                </button>
              ) : (
                <div className="mt-8">
                  <p className="pb-8 text-base/5 font-light border-b-1 border-slate-700">
                    Wir sind keine Webdesigner und führen keine technischen
                    Änderungen durch. Natürlich passen wir die Strategie an
                    Deine Firma individuell an.
                  </p>
                  <span className="mt-4 block text-center text-base/5 font-light">
                    Preisanfrage unter
                  </span>
                  <span className="block text-center text-custom-red">
                    {" "}
                    jan@jankroesche.de
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
