import { FiArrowRight } from "react-icons/fi";
import LinkGeoCheck from "../links/LinkGeoCheck";
import LinkAdsKurs from "../links/LinkAdsKurs";

type Props = {
  className?: string;
};

export default function AdsKursBtn({ className }: Props) {
  return (
    <button
      className={`md:w-1/2 md:mx-auto lg:mx-0 lg:w-full lg:max-w-2/3 p-4 bg-custom-red text-lg text-white rounded-xl flex items-center justify-between ${className}`}
    >
      <LinkAdsKurs/>
      <FiArrowRight color="white" />
    </button>
  );
}
