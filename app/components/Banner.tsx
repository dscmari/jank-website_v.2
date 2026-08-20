"use client"
import Link from "next/link"

type Props = {
    className?: string
}

export default function Banner({className}:Props) {
  return (
          <div className={`absolute bottom-48 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-8 w-5/6 sm:w-80 md:w-[30vw] md:h-[20vh] lg:w-[20vw] md:h-[20vh] xl:w-80 xl:h-28 p-2 sm:p-4 md:top-0 md:left-16 lg:top-10 lg:left-20 xl:left-auto xl:top-0 xl:right-8 xl:right-12 flex flex-col justify-center items-center text-center font-semibold rounded-xl bg-custom-red z-80 md:-rotate-12 xl:rotate-12 transition-transform duration-300 hover:scale-110 ${className}`}>
          <Link href={"/chatgpt-ads-agentur/"} className="!text-custom-white">
            Neu in Deutschland: Wir sind die erste{" "}
            <span className="underline underline-offset-2">
              ChatGPT Ads Spezial-Agentur
            </span>
          </Link>
        </div>
  )
}
