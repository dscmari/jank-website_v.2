import FiveStarRating from "@/app/components/FiveStarRating";
import Image from "next/image";
import { GoDiamond } from "react-icons/go";
import sections from "../../content/referencesList";

export default function page() {
  return (
    <div className="mx-4 lg:mx-32 lg:mt-32">
      <div className="lg:max-w-2/3 lg:mb-8">
        <h1 className="!text-5xl/14"> Unsere Referenzen</h1>
        <h2>
          {" "}
          Seit 2017 haben wir schon{" "}
          <span className="text-custom-red">
            über 500 Firmen-Websites auf Platz 1
          </span>{" "}
          bei Google und in die ChatGPT-Antworten katapultiert
        </h2>
      </div>

      <div className="flex flex-col gap-24 lg:gap-32 mt-12 lg:mt-24">
        {sections.map((s, index) => (
          <section
            key={index}
            className="flex flex-col 2xl:flex-row items-center lg:gap-12 bg-custom-white p-8 lg:p-12 rounded-xl"
          >
            <div className="flex-1 flex flex-col ">
              <div className="flex flex-col items-start gap-2">
                <span className="text-white bg-custom-red font-semibold tracking-tight py-2 px-4 rounded-lg">
                  Referenz
                </span>
                <span className="font-semibold tracking-tight">
                  {s.company}
                </span>
              </div>
              <h2 className="text-xl font-semibold tracking-wide mt-8 mb-4">
                {s.title}
              </h2>
              <p>{s.text}</p>
              <div className="flex flex-col gap-4 mt-8 lg:mt-12 lg:pl-4 lg:text-xl font-semibold">
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>{s.googleResults}</span>
                </div>
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>{s.aiResults}</span>
                </div>
              </div>
              <p className="mt-8 lg:mt-12">{s.subtext}</p>
            </div>
            <div className="mt-12 lg:mt-0 xl:min-w-1/3">
              {s.image && (
                <Image
                  src={s.image}
                  style={{ width: "600px" }}
                  alt="Screenshot einer ChatGPT Suche"
                  height={300}
                  width={500}
                />
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
