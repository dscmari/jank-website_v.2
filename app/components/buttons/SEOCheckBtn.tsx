
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  className?: string;
};

export default function SEOCheckBtn({ className }: Props) {
  return (
    <Link href={"/seo-berater/kostenloser-seo-check/"}
      className={`md:w-1/2 lg:w-full p-4 lg:max-w-2/3 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
    >
      Kostenloser SEO Check
      <FiArrowRight color="white" />
    </Link>
  );
}
