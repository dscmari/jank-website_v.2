import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function GEOKursBtn({ className }: Props) {
  return (
    <Link href={"/geo-berater/kostenloser-geo-kurs/"}
      className={`md:w-1/2 lg:w-full p-4 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
    >
      Kostenloser GEO Kurs
      <FiArrowRight color="white" />
    </Link>
  );
}