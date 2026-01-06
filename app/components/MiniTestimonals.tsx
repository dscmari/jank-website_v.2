import Image from "next/image";
import SEOCheckBtn from "./buttons/SEOCheckBtn";
import InfoBtn from "./buttons/InfoBtn";

type Props = {
  className?: string;
};

export default function MiniTestimonals({ className }: Props) {
  return (
    <div className={`${className}`}>
      <section className="lg:hidden mt-12 p-8 mx-4 bg-custom-whiterounded-xl">
        <InfoBtn content="Erfolge" />
        <h1 className="mt-4">
          Hey Jan, was bringt es mir denn, bei Google oben zu stehen?
        </h1>
        <h2>
          Taten sprechen bekanntlich lauter als Worte. Drei Beispiele von meinen
          betreuten Kunden:
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            Eine Firma aus der Baubranche konnte durch die gesteigerte Google
            Sichtbarkeit über 500 Anfragen über die Website generieren.
            Auftragsvolumen mehr als 8 Millionen Euro. Allein über Google!
          </p>
          <p>
            Eine Firma aus dem IT-Bereich gewinnt jede Woche mehr als zwei neue
            Kunden durch die Google Rankings. Mit durchschnittlichem
            Auftragswert von 7.000 Euro.
          </p>
          <p>
            Eine Firma aus dem Werbemittel-Bereich hat letztes Jahr 9 neue große
            Firmenkunden allein über ChatGPT gewonnen: Gesamt-Auftragsvolumen
            von über 200.000 Euro.
          </p>
          <p>
            Du siehst: Google Rankings sind kein Selbstzweck, sondern ein
            Treiber für Neukunden und Umsatz.
          </p>
        </div>
        <SEOCheckBtn className="mt-12" />
      </section>
      <section className="hidden lg:flex flex-col lg:flex-row gap-12 mt-64 lg:bg-custom-white px-32 pt-24 pb-48 2xl:gap-32 2xl:justify-center ">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4194.jpg"
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
            Hey Jan, was bringt es mir denn, bei{" "}
            <span className="text-custom-red">Google</span> oben zu stehen?
          </h1>
          <InfoBtn content="Erfolge" className="mx-auto mt-12" />
          <h2 className="text-center mt-4">
            Taten sprechen bekanntlich lauter als Worte. Drei Beispiele von
            meinen betreuten Kunden:
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Eine Firma aus der Baubranche konnte durch die gesteigerte Google
              Sichtbarkeit über 500 Anfragen über die Website generieren.
              Auftragsvolumen mehr als 8 Millionen Euro. Allein über Google!
            </p>
            <p>
              Eine Firma aus dem IT-Bereich gewinnt jede Woche mehr als zwei
              neue Kunden durch die Google Rankings. Mit durchschnittlichem
              Auftragswert von 7.000 Euro.
            </p>
            <p>
              Eine Firma aus dem Werbemittel-Bereich hat letztes Jahr 9 neue
              große Firmenkunden allein über ChatGPT gewonnen:
              Gesamt-Auftragsvolumen von über 200.000 Euro.
            </p>
            <p>
              Du siehst: Google Rankings sind kein Selbstzweck, sondern ein
              Treiber für Neukunden und Umsatz.
            </p>
          </div>
          <SEOCheckBtn className="mt-12" />
        </div>
      </section>
    </div>
  );
}
