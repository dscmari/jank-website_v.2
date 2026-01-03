import Image from "next/image";
import Rating from "./Rating";

type Props = {
  className?: string;
};

export default function Testimonials({ className }: Props) {
  return (
    <section className={`px-4 py-8 dark lg:px-8 lg:py-32 ${className}`}>
      <h1 className="text-center lg:!text-2xl tracking-wide">
        Wir haben über 500 Firmenwebsites{" "}
        <span className="text-custom-red"> auf Platz 1</span>{" "}
        optimiert
      </h1>
      <div className="pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl lg:mx-auto">
        <div className="lg:bg-white p-8 rounded-xl shadow-lg">
          <Rating />
          <h2 className="mt-4">Schwabinger Wahrheit Hotel in München</h2>
          <p>
            Für das Hotel „Schwabinger Wahrheit“ führen wir seit mehreren Jahren
            Website-Optimierungen (SEO) durch, um die Präsenz auf Google zu
            steigern und mehr Hotelgäste zu gewinnen.
          </p>
          <div className="mt-4">
            <p>
              <span className="italic">Familienhotel Schwabing</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">Hotel mit Spa Schwabing</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">Wochenendhotel Schwabing</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
          </div>
          <p className="mt-4">
            „Wir haben mit Jan Krösche einen idealen Partner im SEO gefunden. Er
            gibt uns immer neue Vorschläge, wie wir unsere Website verbessern
            können, um bei Google zu immer mehr Schlagworten sichtbar zu sein.“
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/images/suit_avatar.svg"
              alt="Neutraler Avatar"
              style={{ width: "40px" }}
            />
            <div className="pt-2">
              <span className="font-semibold block">Christoph Grödl</span>
              <span>Hotelleiter</span>
            </div>
          </div>
        </div>
        <div className="lg:bg-white p-8 rounded-xl shadow-lg">
          <Rating />
          <h2 className="mt-4">
            IT Dienstleister Kramer Systems GmbH aus Landsberg
          </h2>
          <p>
            Für den IT-Dienstleister Kramer Systems ist es wichtig, in der
            Region gut auffindbar zu sein, um neue Firmen als Kunden zu
            gewinnen. Wir optimieren die Website daher für die ganze Region.
          </p>
          <div className="mt-4">
            <p>
              <span className="italic">IT Dienstleister Landsberg</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">
                Telefonanlage Einrichtung Landsberg
              </span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">IT Dienstleister Kaufbeuren</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
          </div>
          <p className="mt-4">
            „Wir arbeiten mit Herrn Krösche schon seit 2018 zusammen. Seitdem
            sind wir in der Region der meistgefundene IT-Dienstleister in der
            ganzen Region. Die Website ist für unsere Neukundengeschäft nicht
            mehr wegzudenken.“
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/images/suit_avatar.svg"
              alt="Neutraler Avatar"
              style={{ width: "40px" }}
            />
            <div className="pt-2">
              <span className="font-semibold block">Günter Kramer</span>
              <span>Inhaber</span>
            </div>
          </div>
        </div>
        <div className="lg:bg-white p-8 rounded-xl shadow-lg">
          <Rating />
          <h2 className="mt-4">
            Kunststoff-Firma Gregor Hofbauer GmbH aus Türkheim
          </h2>
          <p>
            Die Gregor Hofbauer GmbH ist Kunststoffproduzent aus Bayern. Ziel
            der Website und der Google-Optimierung ist die Steigerung der
            Anfragen von Geschäftskunden.
          </p>
          <div className="mt-4">
            <p>
              <span className="italic">Kunststoffkoffer Hersteller</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">Schutzkoffer Hersteller</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">Transportkoffer Produzent</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
          </div>
          <p className="mt-4">
            „Herr Krösche gibt uns jeden Monat neue SEO-Vorschläge und zeigt
            uns, welche Keywords von unseren Kunden gesucht werden. Genau darauf
            konzentrieren wir uns dann, um den Markt zu treffen und die
            richtigen Anfragen über die Seite zu bekommen.“
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/images/suit_avatar.svg"
              alt="Neutraler Avatar"
              style={{ width: "40px" }}
            />
            <div className="pt-2">
              <span className="font-semibold block">Helmut Schmalix</span>
              <span>Vertriebsleiter</span>
            </div>
          </div>
        </div>
        <div className="lg:bg-white p-8 rounded-xl shadow-lg">
          <Rating />
          <h2 className="mt-4 bg-green-500">//TODO 4. Testimonial einfügen</h2>
          <p>
            Die Gregor Hofbauer GmbH ist Kunststoffproduzent aus Bayern. Ziel
            der Website und der Google-Optimierung ist die Steigerung der
            Anfragen von Geschäftskunden.
          </p>
          <div className="mt-4">
            <p>
              <span className="italic">Kunststoffkoffer Hersteller</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">Schutzkoffer Hersteller</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
            <p>
              <span className="italic">Transportkoffer Produzent</span>
              <span className="text-sm">: Platz 1 bei Google</span>
            </p>
          </div>
          <p className="mt-4">
            „Herr Krösche gibt uns jeden Monat neue SEO-Vorschläge und zeigt
            uns, welche Keywords von unseren Kunden gesucht werden. Genau darauf
            konzentrieren wir uns dann, um den Markt zu treffen und die
            richtigen Anfragen über die Seite zu bekommen.“
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Image
              src="/images/suit_avatar.svg"
              alt="Neutraler Avatar"
              style={{ width: "40px" }}
              width={100}
              height={100}
            />
            <div className="pt-2">
              <span className="font-semibold block">Helmut Schmalix</span>
              <span>Vertriebsleiter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
