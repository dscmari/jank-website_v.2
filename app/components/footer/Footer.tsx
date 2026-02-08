import Link from "next/link";
import LinkSEOCheck from "../links/LinkSeoCheck";
import LinkGeoCheck from "../links/LinkGeoCheck";
import LinkAdsKurs from "../links/LinkAdsKurs";

export default function Footer() {
  return (
    <footer>
      <div className="p-8 lg:p-16 bg-custom-black text-white grid grid-cols-1 gap-12 lg:grid-cols-4">
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
            <LinkSEOCheck className="underline" />
            <LinkGeoCheck className="underline" />
            <LinkAdsKurs className="underline" />
            <Link className="underline" target="_blank" href={"https://www.youtube.com/@jankroesche"}>Jan Krösche auf YouTube</Link>
            <Link className="underline" target="_blank" href={"https://open.spotify.com/show/4d5VQHbtxZGoaWLlp1zCaY"}>Huber & Krösche: GEO Podcast</Link>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Link href={"/agb/"} className="underline">
              Allgemeine Geschäftsbedingungen
            </Link>
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
        </div>

      </div>
      <div className="border-t border-gray-800 px-8 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2026 Jan Krösche & Team</span>
        <span>
          Design & Entwicklung von{" "}
          <a href="https://namaste-websites.de" className="hover:text-white transition-colors underline">
            Marian Nökel
          </a>
        </span>
      </div>
    </footer>


  );
}
