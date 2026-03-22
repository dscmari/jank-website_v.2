import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function SEOKursBtn({ className }: Props) {
  return (
    <Link href={"/seo-berater/kostenloser-seo-kurs/"}
      className={`md:w-1/2 lg:w-full p-4 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
    >
      Kostenloser SEO Kurs
      <FiArrowRight color="white" />
    </Link>
  );
}