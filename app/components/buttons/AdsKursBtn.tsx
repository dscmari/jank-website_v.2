import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function AdsKursBtn({ className }: Props) {
  return (
    <Link href={"/google-ads-berater/kostenloser-google-ads-kurs/"}
      className={`md:w-1/2 lg:w-full p-4 2xl:max-w-2/3 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
    >
      Kostenloser Google Ads Kurs
      <FiArrowRight color="white" />
    </Link>
  );
}
