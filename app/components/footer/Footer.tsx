import Link from "next/link";
import LinkSEOCheck from "../links/LinkSeoCheck";
import LinkGeoCheck from "../links/LinkGeoCheck";
import LinkAdsKurs from "../links/LinkAdsKurs";

export default function Footer() {
  return (
    <div className="mt-8 p-8 lg:p-16 bg-custom-black text-white grid grid-cols-1 gap-12 lg:grid-cols-4">
      <div className="flex flex-col items-center lg:items-start gap-2 mt-12 lg:mt-0">
        <div className="flex flex-col mb-4">
          <span>Jan Krösche & Team</span>
          <span>www.jankroesche.de</span>
        </div>

        <span>+49 176 55 10 93 83</span>
        <span>jan@jankroesche.de</span>
        <span>Obere Mühlstraße 6</span>
        <span>86825 Bad Wörishofen</span>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <LinkSEOCheck className="underline"/>
          <LinkGeoCheck className="underline"/>
          <LinkAdsKurs className="underline"/>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <a href="#" className="underline">
            Allgemeine Geschäftsbedingungen
          </a>
          <Link href={"/datenschutz/"} className="underline">
            Datenschutzerklärung
          </Link>

          <Link href={"/impressum/"} className="underline">
            Impressum
          </Link>
        </div>
      </div>

      <div className="lg:col-span-2">
        <h1>Jan Krösche & Team sind Deine Berater für SEO, GEO & Google Ads</h1>
        <p className="mb-2">
          Seit 2017 haben wir schon über 500 Firmen-Websites auf Platz 1 bei
          Google & ChatGPT katapultiert.{" "}
        </p>
        <p>
          In den letzten 3 Jahren konnten unsere Kunden über die gesteigerte
          Google-Präsenz über 23 Millionen Euro Auftragsvolumen erzielen.
        </p>
      </div>
    </div>
  );
}
