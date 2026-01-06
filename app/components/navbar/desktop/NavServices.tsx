import { FiArrowRight } from "react-icons/fi";
import LinkSeoCheck from "../../links/LinkSeoCheck";
import LinkGeoCheck from "../../links/LinkGeoCheck";
import Link from "next/link";

const NavServices = () => {
  return (
    <div>
      <div className="flex gap-16 p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl  mb-2 font-medium">Google Platz 1</h3>
          <a href="#" className="mb-1 block font-light">
            SEO Berater für Google Rankings
          </a>
          <LinkSeoCheck className="font-light" />
          <Link
            href="/seo-berater/kostenloser-seo-kurs/"
            className="font-light"
          >
            Kostenloser SEO Kurs
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl mb-2 font-medium">ChatGPT Platz 1</h3>
          <div className="font-light">
            <Link href="/geo-berater/">GEO Berater für KI Sichtbarkeit</Link>
          </div>
          <a href="#" className="block font-light">
            GEO Tracker
          </a>
          <div className="font-light">
            <Link href="/geo-berater/kostenloser-geo-kurs/">
              Kostenloser GEO Kurs
            </Link>
          </div>
          <div className="font-light">
            <LinkGeoCheck />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Google Werbung</h3>
          <div className="font-light">
            <Link href="/google-ads-berater/">
              Google Ads Berater für Google-Klicks
            </Link>
          </div>

          <a href="#" className="block font-light">
            Kostenloser Google-Ads-Kurs
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

export default NavServices;
