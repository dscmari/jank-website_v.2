import testimonals from "../content/testimonialsList";
import FiveStarRating from "./FiveStarRating";

type Props = {
  className?: string;
};

export default function Testimonials({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 max-w-7xl lg:mx-auto">
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
    </div>
  );
}
