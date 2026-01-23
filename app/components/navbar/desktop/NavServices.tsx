import { FiArrowRight } from "react-icons/fi";
import LinkSeoCheck from "../../links/LinkSeoCheck";
import LinkGeoCheck from "../../links/LinkGeoCheck";
import Link from "next/link";

const NavServices = () => {
  return (
    <div>
      <div className="flex gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl  mb-2 font-medium">Google Platz 1</h3>
          <Link href="/seo-berater/" className="text-neutral-400">
            SEO Berater für Google Rankings
          </Link>
          <LinkSeoCheck className="text-neutral-400" />
          <Link
            href="/seo-berater/kostenloser-seo-kurs/"
            className="text-neutral-400"
          >
            Kostenloser SEO Kurs
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl mb-2 font-medium">ChatGPT Platz 1</h3>
          <Link href="/geo-berater/" className="text-neutral-400">
            GEO Berater für KI Sichtbarkeit
          </Link>
          <Link href="/geo-berater/geo-konferenz/" className="text-neutral-400">
            GEO Konferenz im Allgäu am 8. Mai
          </Link>
          <Link href="/geo-berater/geo-tracker/" className="text-neutral-400">
            GEO Tracker
          </Link>
          <Link href="/geo-berater/geo-webinare/" className="text-neutral-400">
            GEO Webinare
          </Link>
          {/* <Link
            href="/geo-berater/geo-workshop-fuer-werbeagenturen/"
            className="text-neutral-400"
          >
            GEO Workshop für Werbeagenturen
          </Link> */}
          <Link
            href="/geo-berater/chatgpt-ads-berater/"
            className="text-neutral-400"
          >
            ChatGPT Ads Berater
          </Link>
          <Link
            href="/geo-berater/kostenloser-geo-kurs/"
            className="text-neutral-400"
          >
            Kostenloser GEO Kurs
          </Link>
          <LinkGeoCheck className="text-neutral-400" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Google Werbung</h3>
          <Link href="/google-ads-berater/" className="text-neutral-400">
            Google Ads Berater für Google-Klicks
          </Link>
          <Link href="/microsoft-ads-berater/" className="text-neutral-400">
            Microsoft Ads Berater
          </Link>
          <Link
            href="/google-ads-berater/kostenloser-google-ads-kurs"
            className="text-neutral-400"
          >
            Kostenloser Google Ads Kurs
          </Link>
        </div>
                <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">YouTube Werbung</h3>
          <Link href="/youtube-seo-berater/" className="text-neutral-400">
            YouTube SEO Berater
          </Link>
             <Link href="/youtube-ads-berater/" className="text-neutral-400">
            YouTube Ads Berater
          </Link>
        </div>
      </div>
      {/* <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button> */}
    </div>
  );
};

export default NavServices;
