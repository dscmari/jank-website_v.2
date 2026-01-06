
import { FiArrowRight } from "react-icons/fi";
import LinkGeoCheck from "../links/LinkGeoCheck";

type Props = {
  className?: string;
};

export default function GEOCheckBtn({ className }: Props) {
  return (
    <button
      className={`px-4 py-2 bg-custom-red text-lg text-white rounded-xl flex items-center justify-between ${className}`}
    >
      <LinkGeoCheck />
      <FiArrowRight color="white" />
    </button>
  );
}
