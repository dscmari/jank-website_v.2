import ATF from "@/app/components/ATF";
import { Metadata } from "next";
import atf from "@/app/content/ATFContents";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import Contact from "@/app/components/Contact";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { youtubeAdsBeraterTwoBox } from "@/app/content/TwoBoxLayoutContent";
import MailBtn from "@/app/components/buttons/MailBtn";

export const metadata: Metadata = {
  title: "YouTube Ads Berater Jan Krösche | YouTube Werbung schalten",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.youtubeAdsBeraterATF.title}
        subtitle={atf.youtubeAdsBeraterATF.subtitle}
        text={atf.youtubeAdsBeraterATF.text}
        button={<MailBtn />}
        imgPathMobile="/images/portraits/39321-4190.jpg"
        imgPathDesktop="/images/portraits/39321-4127_01.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 md:px-16 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Wir promoten Deine Videos auf{" "}
            <span className="text-custom-red">YouTube</span>: Damit Du die Nr. 1
            wirst
          </h1>
          <p>
            Mit YouTube Ads kannst Du Deine Firma und Deine Videos auf YouTube
            bewerben, um mehr Neukunden zu erreichen.
          </p>
          <p className="py-4">
            Unserer Erfahrung nach zählen YouTube Ads zu den meist unterschätzen
            Marketingkanälen im deutschsprachigen Raum. Die „View-Preise“ sind
            meist immer noch sehr gering. Das Potenzial ist riesig.
          </p>
          <p>
            Unserer Erfahrung nach zählen YouTube Ads zu den meist unterschätzen
            Marketingkanälen im deutschsprachigen Raum. Die „View-Preise“ sind
            meist immer noch sehr gering. Das Potenzial ist riesig.
          </p>
          <a
            href="mailto:max.mustermann@ihre-domain.de"
            className="flex gap-4 items-center bg-custom-red text-white p-4 lg:max-w-2/3 mt-8 rounded-xl"
          >
            <FiMail />
            <span className="font-semibold tracking-wider">
              jan@jankroesche.de
            </span>
          </a>
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/youtube-seo-berater.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Suche bei YouTube"
            height={400}
            width={600}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Mit YouTube Ads werden Deine Videos häufig ausgespielt. Damit Dich
            Deine Kunden finden
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 dark:xl:pb-64 relative lg:bg-custom-white dark:lg:py-0">
        <div className="px-4 lg:px-0 xl:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Du willst bei YouTube gefunden werden und so zum{" "}
            <span className="text-custom-red">sichtbarsten Anbieter</span> der
            Branche in deiner Region werden?
          </h2>
        </div>
        <div className="lg:text-lg px-4 lg:px-0">
          <p>
            Wir schalten Deine YouTube Ads, damit Dich Deine Kunden dort finden,
            wo sie Dich suchen. Wir richten die YouTube Kampagne so ein, dass
            sie perfekt zur richtigen Zielgruppe ausgespielt wird.
          </p>
        </div>
        <Contact className="p-4 lg:p-8 mt-12" />
      </section>
      <section className="flex flex-col xl:flex-row gap-12 mt-24 lg:mt-0 lg:p-32 2xl:gap-32 2xl:justify-center dark dark:lg:mt-32">
        <div className="xl:min-w-1/2 2xl:min-w-1/3 xl:relative">
          <div className="xl:absolute xl:-top-48">
            <Image
              src="/images/portraits/39321-3997.jpg"
              style={{ width: "500px" }}
              alt="Portrait von Jan Krösche"
              height={750}
              width={500}
              className="object-contain mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="text-center">
            Jan Krösche & Team: Deine{" "}
            <span className="text-custom-red">YouTube Ads Berater</span> aus
            Deutschland, Österreich, Südtirol & der Schweiz
          </h1>
          <InfoBtn
            content="YouTube Ads Experten"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Wir machen Unternehmen bei YouTube sichtbar
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Viele Firmen setzen mehr Fokus auf Videoproduktion. Doch was
              bringt ein Video, wenn es von niemandem gefunden werden kann?
            </p>
            <p>
              Genau hier kommen unsere YouTube Ads Berater ins Spiel. Wir
              kümmern uns darum, dass Deine Videos perfekt ausgespielt werden
              und maximale Reichweite generieren.
            </p>
            <p>
              Wer erstellt die Videos? Wir sind keine Videoproduzenten und
              kümmern uns ausschließlich um die Ads Deiner Videos. Wir
              unterstützen Dich aber dabei, den richtigen Partner für Deine
              Videos zu finden oder helfen Dir dabei, dass Du die Videos einfach
              selbst drehst.
            </p>
            <a
              href="mailto:max.mustermann@ihre-domain.de"
              className="flex gap-4 items-center lg:max-w-2/3 bg-custom-red text-white p-4 mt-8 rounded-xl mb-8"
            >
              <FiMail />
              <span className="font-semibold tracking-wider">
                jan@jankroesche.de
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="mt-24 px-4 py-24 xl:m-0 xl:p-32 relative bg-custom-white dark:pt-0 dark:xl:pt-32">
        <div className="lg:max-w-2/3">
          <h1>
            Persönliche
            <span className="text-custom-red"> YouTube Ads Beratung</span> aus
            einer Hand
          </h1>
        </div>
        <div className="lg:text-lg">
          <p>
Wir verstehen uns als Dienstleister und kümmern uns persönlich um Dich. Wir helfen Dir dabei, eine perfekte YouTube Ads Strategie zu finden und aufzusetzen, damit Du auf der Plattform maximal sichtbar wirst. Wir recherchieren die Themen, die Deine potentiellen Kunden auf YouTube konsumieren und legen einen Plan fest, um bei YouTube Sichtbarkeit zu gewinnen.
          </p>
          <TwoBoxLayout
            boxes={youtubeAdsBeraterTwoBox}
            className="mt-12 lg:mt-24"
          />
        </div>
      </section>
    </div>
  );
}
