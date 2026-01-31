"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Breadcrumbs from "./Breadcrumps";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  title?: React.ReactNode;
  subtitle?: string;
  text?: string;
  button: React.ReactNode;
  imgPathMobile: string;
  imgPathDesktop: string;
};

export default function ATF({
  title,
  subtitle,
  text,
  button,
  imgPathMobile,
  imgPathDesktop,
}: Props) {
  const routePath = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    routePath === "/" ? setIsHome(true) : setIsHome(false)
  }, [routePath]);

  return (
    <div>
      <div className="md:hidden">
        <Image
          src={imgPathMobile}
          width={500}
          height={500}
          alt="Portrait von Jan Kroesche"
          className="mx-auto"
          priority
        />
        {/* <Breadcrumbs className="lg:hidden pl-4 pt-4" /> */}
        <h1 className="!text-3xl p-4 text-center">{title}</h1>
      </div>
      <div
        className="hidden md:block h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imgPathDesktop})` }}
      >
        <div className="p-8 rounded text-white max-w-4/5 xl:max-w-2/5 absolute top-1/2 -translate-y-1/2 left-1/8">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-5xl/14">{title}</h1>
          <h2>{subtitle}</h2>
          <p className="mb-8">{text}</p>
          {button}
        </div>
      </div>
      {!isHome && (
        <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      )}
    </div>
  );
}
