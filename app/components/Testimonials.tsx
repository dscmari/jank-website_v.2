import testimonals from "../content/testimonialsList";
import InfoBtn from "./buttons/InfoBtn";
import FiveStarRating from "./FiveStarRating";

type Props = {
  className?: string;
};

export default function Testimonials({ className }: Props) {
  return (
    <section className={`px-4 py-8 dark lg:px-8 lg:py-32 ${className}`}>
      <h1 className="!text-3xl text-center">
        Wir haben über 500 Firmenwebsites{" "}
        <span className="text-custom-red"> auf Platz 1</span> optimiert
      </h1>{" "}
      <InfoBtn content="Erfolgsgeschichten" className="mx-auto mt-24 lg:mt-16"/>
      <h2 className="mt-4 text-center">
          Messbarer Erfolg und nachhaltiges Wachstum durch SEO & SEA
        </h2>
      <div className="pt-8 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 max-w-7xl lg:mx-auto">
        {" "}
        {testimonals.map((e, index) => (
          <div key={index} className="bg-white p-8 rounded-xl">
            <FiveStarRating />
            <h2 className="mt-4">{e.title}</h2>
            <p>{e.text}</p>
            <div className="mt-4">
              {e.keywords.map((keyword, index) => (
                <p key={index}>
                  <span className="italic">{keyword}</span>
                  <span>: Platz 1 bei Google</span>
                </p>
              ))}
            </div>
            <p className="mt-4">{e.voice}</p>
            <div className="flex items-center gap-4 mt-4">
              <img
                src="/images/suit_avatar.svg"
                alt="Neutraler Avatar"
                style={{ width: "40px" }}
              />
              <div className="pt-2">
                <span className="font-semibold block">{e.name}</span>
                <span>{e.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
