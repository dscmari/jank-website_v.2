"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiArrowRight, FiChevronDown, FiMail, FiPhone } from "react-icons/fi";
import LinkSeoCheck from "../links/LinkSeoCheck";
import { SlClose } from "react-icons/sl";
import { AnimatePresence, motion } from "framer-motion";
import LinkGeoCheck from "../links/LinkGeoCheck";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`min-h-screen max-h-full overflow-y-auto left-full z-100 fixed top-0 w-full bg-white flex flex-col transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? "-translate-x-full" : ""}
                      `}
      >
        <div>
          <div
            className="flex items-center justify-between p-4 dark:bg-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Link href="/">
              {" "}
              <Image
                src="/images/logo_transparent.png"
                alt="Jan Krösche Logo"
                width={300}
                height={300}
                style={{ width: "200px" }}
                className="ml-4"
              />
            </Link>
            <SlClose size={32} className="mr-4" />
          </div>
          {/* <Breadcrumbs /> */}
        </div>

        <div className="">
          <ol>
            <div
              className={`pt-4 rounded-t flex items-center justify-between ${
                isSelected
                  ? "border-t border-slate-200 px-8"
                  : "mx-8 border-b-2 border-slate-200"
              }`}
              onClick={() => setIsSelected((prev) => !prev)}
            >
              <span className="font-semibold pb-2">Leistungen</span>
              <FiChevronDown
                className={`transition-transform size-6 ${
                  isSelected ? "rotate-180 text-custom-red" : ""
                }`}
              />
            </div>
            <div className="flex flex-col font-semibold ">
              <AnimatePresence>
                {isSelected && (
                  <motion.ol
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`pl-8 pb-8 flex flex-col gap-4 !font-medium  ${
                      isSelected ? "" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-1 mr-8">
                      <h3 className="font-semibold mt-2">Google Platz 1</h3>
                      <a
                        href="#"
                        className="block pb-1 text-neutral-400 border-b-2 border-slate-200"
                      >
                        SEO Berater für Google Rankings
                      </a>
                      <div
                        className="pb-1 text-neutral-400 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <LinkSeoCheck />
                      </div>
                      <div
                        className="pb-1 text-neutral-400 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <Link href="/seo-berater/kostenloser-seo-kurs/">
                          Kostenloser SEO Kurs
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mr-8">
                      <h3 className="font-semibold mt-2">ChatGPT Platz 1</h3>

                      <div
                        className="pb-1 text-neutral-400 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <Link href="/geo-berater/">
                          GEO Berater für KI Sichtbarkeit
                        </Link>
                      </div>
                      <a
                        href="#"
                        className="block pb-1 text-neutral-400 border-b-2 border-slate-200"
                      >
                        GEO Tracker
                      </a>
                      <div
                        className="pb-1 text-neutral-400 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <Link href="/geo-berater/kostenloser-geo-kurs/">
                          Kostenloser GEO Kurs
                        </Link>
                      </div>
                      <div
                        className="pb-1 text-neutral-400 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <LinkGeoCheck />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mr-8">
                      <h3 className="font-semibold mt-2">Google Werbung</h3>
                      <div
                        className="pb-1 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <Link
                          href="/google-ads-berater/"
                          className="text-neutral-400 "
                        >
                          Google Ads Berater für Google-Klicks
                        </Link>
                      </div>
                      <div
                        className="pb-1 border-b-2 border-slate-200"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                      >
                        <Link
                          href="/google-ads-berater/kostenloser-google-ads-kurs/"
                          className="text-neutral-400 "
                        >
                          Kostenloser Google Ads Kurs
                        </Link>
                      </div>
                    </div>
                  </motion.ol>
                )}
              </AnimatePresence>

              <Link
                href={"/preise"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="pt-6 pb-2 mx-8 border-b-2 border-slate-200"
              >
                Preispakete
              </Link>
              <Link
                href={"/referenzen"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="pt-4 pb-2 mx-8 border-b-2 border-slate-200"
              >
                Referenzen
              </Link>
              <Link
                href={"/videos"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="pt-4 pb-2 mx-8 border-b-2 border-slate-200"
              >
                Videos
              </Link>
              <Link
                href={"#"}
                className="pt-4 pb-2 mx-8 border-b-2 border-slate-200"
              >
                GEO Tracker
              </Link>
            </div>
          </ol>
          <div className="pt-8 pl-8 flex items-center gap-4">
            <FiPhone />
            <span>+49 176 55109383</span>
          </div>
          <div className="mt-4 pl-8 flex items-center gap-4">
            <FiMail />
            <span>jan@jankroesche.de</span>
          </div>
          <div className="mx-8 my-12">
            <button
              className="px-4 py-4 bg-custom-red text-custom-white w-full flex items-center justify-between tracking-wider rounded"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <LinkSeoCheck />
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 dark:bg-white">
        <Link href={"/"}>
          <Image
            src="/images/logo_transparent.png"
            alt="Jan Krösche Logo"
            width={300}
            height={300}
            style={{ width: "200px" }}
            className="ml-4"
          />
        </Link>
        <div className="flex items-center gap-4 z-10">
          <div
            className="burgermenu"
            id="burger-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
