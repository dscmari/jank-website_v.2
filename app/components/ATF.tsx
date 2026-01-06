import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Breadcrumbs from "./Breadcrumps";

type Props = {
  title?: React.ReactNode;
  subtitle?: string;
  text?: string;
  LinkComponent?: React.ReactNode;
  imgPathMobile: string;
  imgPathDesktop: string;
};

export default function ATF({
  title,
  subtitle,
  text,
  LinkComponent,
  imgPathMobile,
  imgPathDesktop,
}: Props) {
  return (
    <div>
      <div className="lg:hidden">
        <Image
          src={imgPathMobile}
          width={500}
          height={500}
          alt="Portrait von Jan Kroesche"
        />
        {/* <Breadcrumbs className="lg:hidden pl-4 pt-4" /> */}
        <h1 className="!text-3xl p-4 text-center">{title}</h1>
      </div>
      <div
        className="hidden lg:block h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imgPathDesktop})` }}
      >
        <div className="p-8 rounded text-custom-white max-w-2/5 absolute top-1/2 -translate-y-1/2 left-1/8">
          <h1 className="mb-8 !text-5xl/14 tracking-wide">{title}</h1>
          <h2>{subtitle}</h2>
          <p>{text}</p>
          <button className="mt-16 p-4 bg-custom-red text-custom-white rounded w-2/3 flex items-center justify-between">
            {LinkComponent}
            <FiArrowRight />
          </button>
        </div>
      </div>
      {/* <Breadcrumbs className="hidden lg:block mt-12 mx-8 font-semibold" /> */}
    </div>
  );
}
