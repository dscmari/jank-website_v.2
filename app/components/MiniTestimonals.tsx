import Image from "next/image";
import SEOCheckBtn from "./buttons/SEOCheckBtn";
import InfoBtn from "./buttons/InfoBtn";

type Props = {
  className?: string;
};

export default function MiniTestimonals({ className }: Props) {
  return (
    <div className={`${className}`}>
      <section className="lg:hidden mt-12 p-8 mx-4 bg-custom-white  rounded-xl">
        <InfoBtn content="Erfolge" />
        <h2 className="mt-4">Was bringt es mir bei Google oben zu stehen?</h2>
        <div className="mt-8 flex flex-col items-start gap-2 ">
          <h3 className="font-semibold">Bauindustrie</h3>
          <p>
            Wir haben durch die gesteigerte Google Sichtbarkeit zu mehr als 500
            zusätzlichen Anfragen über die Website beigetragen. Das
            Auftragsvolumen lag bei mehr als 8 Millionen Euro. Allein über
            Google!
          </p>
        </div>
        <div className="mt-8 flex flex-col items-start gap-2">
          <h3 className="font-semibold">Informationstechnologie</h3>
          <p>
            Durch unsere Arbeit werden jede Woche mindestens zwei neue Kunden
            durch die Google Rankings gewonnen. Mit einem durchschnittlichem
            Auftragswert von 7.000 Euro.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-start gap-2">
          <h3 className="font-semibold">Werbemittelgeschäft</h3>
          <p>
            Mithilfe unserer Optimierung, wurden letztes Jahr neun große
            Firmenkunden allein über ChatGPT neu gewonnen: Das gesamte
            Auftragsvolumen lag über 200.000 Euro.
          </p>
        </div>
        <SEOCheckBtn className="mt-12" />
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-32 lg:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center ">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-3997.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
            />
            <p className="p-8 italic mx-auto text-center font-light">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Was bringt es mir bei{" "}
            <span className="text-custom-red">Google</span> oben zu stehen?
          </h1>
          <InfoBtn content="Erfolge" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Unterschiedliche Branchen, echte Ergebnisse
          </h2>
          <div className="mt-8 flex flex-col items-start gap-2 ">
            <h3 className="font-semibold">Bauindustrie</h3>
            <p>
              Wir haben durch die gesteigerte Google Sichtbarkeit zu mehr als
              500 zusätzlichen Anfragen über die Website beigetragen. Das
              Auftragsvolumen lag bei mehr als 8 Millionen Euro. Allein über
              Google!
            </p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-2">
            <h3 className="font-semibold">Informationstechnologie</h3>
            <p>
              Durch unsere Arbeit werden jede Woche mindestens zwei neue Kunden
              durch die Google Rankings gewonnen. Mit einem durchschnittlichem
              Auftragswert von 7.000 Euro.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-2">
            <h3 className="font-semibold">Werbemittelgeschäft</h3>
            <p>
              Mithilfe unserer Optimierung, wurden letztes Jahr neun große
              Firmenkunden allein über ChatGPT neu gewonnen: Das gesamte
              Auftragsvolumen lag über 200.000 Euro.
            </p>
          </div>
          <SEOCheckBtn className="mt-12" />
        </div>
      </section>
    </div>
  );
}
