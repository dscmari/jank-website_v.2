
import { FiArrowRight } from "react-icons/fi";
import LinkGeoCheck from "../links/LinkGeoCheck";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function GEOCheckBtn({ className }: Props) {
  return (
    <Link href={"/geo-berater/kostenloser-geo-check/"}
      className={`md:w-1/2 md:mx-auto lg:mx-0 lg:w-full p-4 lg:max-w-2/3 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
    >
      Kostenloser GEO Check
      <FiArrowRight color="white" />
    </Link>
  );
}
