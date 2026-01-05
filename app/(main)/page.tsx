
import { LuNotebookText } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LinkSeoCheck from "../components/links/LinkSeoCheck";
import ATF from "../components/ATF";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Process from "../components/layouts/Process";
import WebsiteCheck from "../components/WebsiteCheck";
import { GiAirplaneDeparture } from "react-icons/gi";
import FourBoxLayout from "../components/layouts/FourBoxLayout";
import SEOCheckBtn from "../components/buttons/SEOCheckBtn";
import InfoBtn from "../components/buttons/InfoBtn";
import Workshops from "../components/Workshops";
import { colabCircles, processCircles } from "../content/processUi";
import atf from "../content/ATFContents";
import { standardFourBoxContent } from "../content/FourBoxLayoutContent";
import { Metadata } from "next";
import MiniTestimonals from "../components/MiniTestimonals";

export const metadata: Metadata = {
  title: "Platz 1 bei Google & ChatGPT | SEO – GEO – Ads Berater",
};

export default function Home() {
  return (
    <>
      <ATF
        title={atf.homeATF.title}
        subtitle={atf.homeATF.subtitle}
        text={atf.homeATF.text}
        LinkComponent={<LinkSeoCheck />}
        imgPathMobile="/images/portraits/39321-4133web.jpg"
        imgPathDesktop="/images/portraits/39321-4000_02.jpg"
      />
      <section className="bg-custom-white rounded-xl mx-4 mt-8 p-8 rounded-lg lg:hidden">
        <InfoBtn content="Dein Team" />
        <h2 className="mt-8">
          Über 500 Websites auf{" "}
          <span className="text-custom-red">Platz 1 bei Google</span> seit 2017
        </h2>
        <p className="pt-4 font-light">
          Jan Krösche & Team sind Deine SEO, GEO und ADS Spezialisten, damit Du
          bei Google und ChatGPT die sichtbarste Firma Deiner Branche wirst. Und
          endlich mehr Neukunden-Anfragen über die Website erhälst.
        </p>
        <SEOCheckBtn className="mt-12" />
      </section>
      <MiniTestimonals /> {/* lg:hidden */}
      <section className="mt-24 lg:hidden">
        <img
          src="/images/portraits/39321-3981.jpg"
          alt="Portrait Jan Krösche"
        />
        <p className="mx-4 mt-2 text-light text-center">
          Jan Krösche hat bis 2025 eine der größten Onlinemarketing-Agenturen in
          Deutschland aufgebaut und geleitet. Seit 2025 arbeitet er mit einem
          spezialisierten Team selbständig.
        </p>
      </section>
      <section>
        <div className="hidden lg:block max-w-2/3 mx-auto text-center mt-32">
          <h2 className="lg:!text-3xl/10 lg:tracking-wide ">
            {" "}
            Jan Krösche hat bis 2025 eine der{" "}
            <span className="text-custom-red">
              größten Onlinemarketing-Agenturen{" "}
            </span>
            in Deutschland aufgebaut und geleitet. Seit 2025 arbeitet er mit
            einem spezialisierten Team selbständig.
          </h2>
        </div>
        <InfoBtn content="Über uns" className="mt-24 lg:mt-16 mx-auto" />
        <h2 className="mt-4 text-center">
          Bewährte Prozesse, sichtbare Erfolge
        </h2>
      </section>
      <Process
        className="lg:pt-12 px-4 lg:px-32 lg:pb-48"
        circles={processCircles}
      />
      <MiniTestimonals /> {/* hidden lg:flex */}
      <Contact className="p-8 mt-24 lg:mt-0" />
      <Testimonials className="bg-custom-white py-24 lg:pb-48 " />
      <section className=" flex flex-col lg:flex-row gap-12 lg:p-32 lg:py-24 2xl:gap-32 2xl:justify-center ">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <img
              src="/images/portraits/39321-4133web.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
            />
            <p className="p-8 italic mx-auto text-center font-light">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="lg:!text-2xl lg:tracking-wide lg:font-semibold mb-4 lg:mb-8">
            Wir bringen Dich bei{" "}
            <span className="text-custom-red">Google & ChatGPT</span> ganz nach
            vorne
          </h1>
          <p className="font-light lg:font-normal">
            {" "}
            Deine Website wird im Netz nicht gefunden? Dein größter Konkurrent
            erscheint immer vor Dir? Das ist natürlich ärgerlich, weil Dir
            dadurch natürlich viele Anfragen entgehen und die Neukunden bei
            Deiner Konkurrenz landen. Genau auf diese Problemstellung haben wir
            uns spezialisiert.
          </p>
          <div className="flex flex-col lg:gap-4 lg:pl-4 pt-8">
            <div className="lg:hidden flex items-end gap-4">
              <HiMagnifyingGlass
                color="rgb(231,0,53)"
                size={48}
                className="max-w-8 lg:max-w-full lg:min-w-8"
              />
              <h2>Deine Spezialisten</h2>
            </div>
            <p className="lg:hidden font-light">
              {" "}
              Jan Krösche & Team sind Deine SEO, GEO und Ads Spezialisten, damit
              Du bei Google und ChatGPT die sichtbarste Firma Deiner Branche
              wirst. Und endlich mehr Neukunden-Anfragen über die Website
              erhälst
            </p>
            <div className="hidden lg:flex items-center gap-4">
              <HiMagnifyingGlass
                color="rgb(231,0,53)"
                size={48}
                className="min-w-8"
              />
              <p>
                {" "}
                Jan Krösche & Team sind Deine SEO, GEO und Ads Spezialisten,
                damit Du bei Google und ChatGPT die sichtbarste Firma Deiner
                Branche wirst. Und endlich mehr Neukunden-Anfragen über die
                Website erhälst
              </p>
            </div>
            <div className="lg:hidden mt-8 flex items-end gap-4">
              <GiAirplaneDeparture
                color="rgb(231,0,53)"
                size={48}
                className="max-w-8 lg:max-w-full lg:min-w-8"
              />
              <h2>Google & ChatGPT Platz 1</h2>
            </div>
            <p className="lg:hidden font-light">
              {" "}
              Seit 2017 haben wir schon über 500 Firmen auf Platz 1 bei Google
              und ChatGPT katapultiert
            </p>
            <div className="hidden lg:flex items-center gap-4">
              <GiAirplaneDeparture
                color="rgb(231,0,53)"
                size={24}
                className="min-w-8"
              />
              <p>
                {" "}
                Seit 2017 haben wir schon über 500 Firmen auf Platz 1 bei Google
                und ChatGPT katapultiert
              </p>
            </div>
            <div className="lg:hidden mt-8 flex items-end gap-4">
              <LuNotebookText
                color="rgb(231,0,53)"
                size={48}
                className="max-w-8 lg:max-w-full lg:min-w-8"
              />
              <h2>Wir unterstützen Dich</h2>
            </div>
            <p className="lg:hidden font-light">
              {" "}
              Selbständig Arbeitende verschiedenster Branchen profitieren von
              mehr Sichtbarkeit (Makler, Ärzte, IT-Dienstleister, Therapeuten,
              Handwerker, Hoteliers, Steuerberater, Designer)
            </p>
            <div className="hidden lg:flex items-center gap-4">
              <LuNotebookText
                color="rgb(231,0,53)"
                size={24}
                className="min-w-8"
              />
              <p>
                {" "}
                Selbständig Arbeitende verschiedenster Branchen profitieren von
                mehr Sichtbarkeit (Makler, Ärzte, IT-Dienstleister, Therapeuten,
                Handwerker, Hoteliers, Steuerberater, Designer)
              </p>
            </div>
            <div className="lg:hidden mt-8 flex items-end gap-4">
              <FaGears
                color="rgb(231,0,53)"
                size={48}
                className="max-w-8 lg:max-w-full lg:min-w-8"
              />
              <h2>Sichtbarkeit im Netz</h2>
            </div>
            <p className="lg:hidden font-light">
              {" "}
              Insbesondere für technischorientierte Firmen, die vorallem digital
              gefunden werden, ist die Sichtbarkeit essentiell, um
              Neukundenanfragen zu generieren (Maschinenbau, Software-Firmen,
              Hersteller, Ingenieure, Baufirmen, Kunststoffproduzenten)
            </p>
            <div className="hidden lg:flex items-center gap-4">
              <FaGears color="rgb(231,0,53)" size={24} className="min-w-8" />
              <p>
                {" "}
                Insbesondere für technischorientierte Firmen, die vorallem
                digital gefunden werden, ist die Sichtbarkeit essentiell, um
                Neukundenanfragen zu generieren (Maschinenbau, Software-Firmen,
                Hersteller, Ingenieure, Baufirmen, Kunststoffproduzenten)
              </p>
            </div>
          </div>
          <p className="pt-8 font-light lg:font-normal">
            Wir arbeiten ohne Branchenfokus und sind in Deutschland, Österreich,
            Norditalien & der Schweiz für unsere Kunden unterwegs.
          </p>
          <SEOCheckBtn className="mt-12" />
        </div>
      </section>
      <section>
        <h2 className="text-center lg:text-start px-4 lg:px-32 lg:mx-0 mt-24 lg:mt-16">
          Unsere 3 Preispakete
        </h2>
        <InfoBtn
          content="Angebot"
          className="mx-auto lg:mx-32 mt-4 mb-8 lg:mb-16"
        />
        <Pricing className="bg-custom-white px-4 pt-12 mt-24 lg:py-24 lg:px-8 2xl:px-32" />
      </section>
      <Workshops />
      <section className="mt-24 lg:mt-32">
        <div className="mx-4 lg:mx-0 lg:max-w-2/3 lg:mx-auto text-center">
          <h2 className="lg:!text-3xl/10 lg:tracking-wide ">
            Endlich{" "}
            <span className="text-custom-red">Platz 1 bei Google: </span>
            So läuft unsere Zusammenarbeit ab
          </h2>
        </div>
        <InfoBtn content="Kontakt" className="mx-auto mt-16 " />
        <h2 className="mt-4 text-center">Direkter Kontakt, keine Umwege</h2>
      </section>
      <Process
        className="pt-12 px-4 lg:px-32 lg:pb-48 "
        circles={colabCircles}
      />
      <div className="hidden lg:block">
        <Contact className="p-8 mt-24 lg:mt-0 lg:mx-32" />
      </div>
      <WebsiteCheck className="mt-32 lg:max-w-[1500px] lg:mx-auto" />
      <section className="pt-24 lg:pt-0 lg:mt-32 flex flex-col item-center bg-custom-white">
        <div className="px-4 lg:px-0 text-center lg:mt-32">
          <h2 className="lg:!text-3xl/10 lg:tracking-wide ">
            {" "}
            Keine Lust mehr, hinter Deinem{" "}
            <span className="text-custom-red">größten Wettbewerber</span>{" "}
            hinterherzulaufen?
          </h2>
        </div>
        <InfoBtn content="Unser Ziel" className="mx-auto mt-16 " />
        <h2 className="mt-4 text-center">Wir stärken deine Sichtbarkeit</h2>
      </section>
      <div className="bg-custom-white">
        <FourBoxLayout
          boxes={standardFourBoxContent}
          className="mx-4 lg:mx-0 max-w-7xl"
        />
      </div>
    </>
  );
}
