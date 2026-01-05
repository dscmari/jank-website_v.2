import { GoDiamond } from "react-icons/go";
import sections from "../../content/referencesList";
import { BsFillStarFill } from "react-icons/bs";
import FiveStarRating from "@/app/components/FiveStarRating";

export default function page() {
  return (
    <div className="mb-32 lg:m-32">
      <div className="m-8 lg:m-0 lg:max-w-2/3 lg:mb-8">
        <h1 className="lg:pb-8 tracking-wide font-semibold">
          {" "}
          Referenzen: Seit 2017 haben wir schon{" "}
          <span className="text-custom-red">
            über 500 Firmen-Websites auf Platz 1
          </span>{" "}
          bei Google und in die ChatGPT-Antworten katapultiert
        </h1>
      </div>
      <div className="mx-8 lg:m-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {sections.map((s, index) => (
          <section key={index} className="flex flex-col pt-8">
            <div className="h-full bg-custom-white p-4 lg:p-8 rounded shadow-lg">
              <FiveStarRating />
              <h2 className="mt-8">{s.title}</h2>
              <p>{s.text}</p>
              <div className="flex flex-col gap-4 my-8">
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>
                    <span className="font-semibold">Google: </span>
                    {s.googleResults}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>
                    <span className="font-semibold">{s.preAIresults} </span>
                    {s.aiResults}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <GoDiamond
                    color="rgb(231,0,53)"
                    className="h-4 flex-shrink-0"
                  />
                  <span>
                    <span className="font-semibold">Firma: </span>
                    {s.company}
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
