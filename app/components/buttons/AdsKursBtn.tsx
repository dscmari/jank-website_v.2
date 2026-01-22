import { FiArrowRight } from "react-icons/fi";
import LinkGeoCheck from "../links/LinkGeoCheck";
import LinkAdsKurs from "../links/LinkAdsKurs";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function AdsKursBtn({ className }: Props) {
  return (
    <Link href={"/google-ads-berater/kostenloser-google-ads-kurs/"}
      className={`md:w-1/2 md:mx-auto lg:mx-0 lg:w-full p-4 lg:max-w-2/3 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
    >
      Kostenloser SEO Check
      <FiArrowRight color="white" />
    </Link>
  );
}
