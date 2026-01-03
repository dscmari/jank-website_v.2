import { FiArrowRight } from "react-icons/fi";
import LinkSeoCheck from "@/app/components/LinkSeoCheck";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function Videos() {
  return (
    <div className="">
      <div className="m-8 lg:m-0 lg:flex lg:px-32 lg:pt-32">
        <h1 className="mb-4 lg:mb-0 flex-2 lg:!text-3xl/10 tracking-wide">
          Jansen's Blog (Blog Name)
        </h1>
        <p className="flex-1 lg:max-w-96 lg:mr-12">
          In unserem Blog findest Du aktuelle Ratgeber, Podcast-Folgen und
          Erklärvideos rund um SEO, GEO und Google Ads.
        </p>
      </div>
      <div>
        <button className="mt-8 ml-8 lg:ml-32 px-4 py-2 lg:p-4 bg-custom-red text-custom-white rounded-4xl lg:rounded flex items-center gap-8 justify-between">
          <LinkSeoCheck />
          <FiArrowRight />
        </button>
      </div>
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-12 m-8 mt-24 lg:m-32">
        <div className="bg-custom-white">
          <img
            src="/images/portraits/39321-4000_02.jpg"
            alt=""
            className="h-96 object-cover"
          />
          <div className="mx-4 my-2 flex flex-col">
            <span className="underline font-bold text-lg">
              Jansen's Artikel
            </span>
            <p className="leading-5 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              unde accusamus, fuga nesciunt deleniti, magnam mollitia.
            </p>
            <div className="flex gap-2 pt-4 items-center">
              <span className="text-sm font-semibold">Zum Post</span>
              <LuSquareArrowOutUpRight />
            </div>
          </div>
        </div>
        <div className="bg-custom-white">
          <img
            src="/images/portraits/39321-4000_02.jpg"
            alt=""
            className="h-96 object-cover"
          />
          <div className="mx-4 my-2 flex flex-col">
            <span className="underline font-bold text-lg">
              Jansen's Artikel
            </span>
            <p className="leading-5 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              unde accusamus, fuga nesciunt deleniti, magnam mollitia.
            </p>
            <div className="flex gap-2 pt-4 items-center">
              <span className="text-sm font-semibold">Zum Post</span>
              <LuSquareArrowOutUpRight />
            </div>
          </div>
        </div>
        <div className="bg-custom-white">
          <img
            src="/images/portraits/39321-4000_02.jpg"
            alt=""
            className="h-96 object-cover"
          />
          <div className="mx-4 my-2 flex flex-col">
            <span className="underline font-bold text-lg">
              Jansen's Artikel
            </span>
            <p className="leading-5 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              unde accusamus, fuga nesciunt deleniti, magnam mollitia.
            </p>
            <div className="flex gap-2 pt-4 items-center">
              <span className="text-sm font-semibold">Zum Post</span>
              <LuSquareArrowOutUpRight />
            </div>
          </div>
        </div>
        <div className="bg-custom-white">
          <img
            src="/images/portraits/39321-4000_02.jpg"
            alt=""
            className="h-96 object-cover"
          />
          <div className="mx-4 my-2 flex flex-col">
            <span className="underline font-bold text-lg">
              Jansen's Artikel
            </span>
            <p className="leading-5 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              unde accusamus, fuga nesciunt deleniti, magnam mollitia.
            </p>
            <div className="flex gap-2 pt-4 items-center">
              <span className="text-sm font-semibold">Zum Post</span>
              <LuSquareArrowOutUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
