import ATF from "@/app/components/ATF";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import SEOCheckBtn from "@/app/components/buttons/SEOCheckBtn";
import { Metadata } from "next";
import atf from "../../content/ATFContents";
import MailBtn from "@/app/components/buttons/MailBtn";
import Image from "next/image";
import Contact from "@/app/components/Contact";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { instagramWerbungTwoBox } from "@/app/content/TwoBoxLayoutContent";

export const metadata: Metadata = {
  title: "Berater für Instagram Werbung | Instagram Ads ",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.beraterInstagramWerbung.title}
        subtitle={atf.beraterInstagramWerbung.subtitle}
        text={atf.beraterInstagramWerbung.text}
        button={<MailBtn className="" />}
        imgPathMobile="/images/portraits/39321-4133web.jpg"
        imgPathDesktop="/images/portraits/39321-4000_02.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Wir schalten Deine{" "}
            <span className="text-custom-red"> Instagram Werbung</span>, damit
            Du die
            <span className="text-custom-red"> Nummer 1 </span> wirst
          </h1>
          <p>
            Mit Werbeanzeigen auf Instagram wirst Du von potentiellen Neukunden
            dort gefunden, wo sie sich aufhalten: Im Internet und bei Social
            Media.
          </p>
          <p className="py-4">
            Firmen, die im Netz nicht präsent sind, verlieren Marktanteile und
            Umsatz.
          </p>
          <p>
            Wir helfen Dir, auf Instagram sichtbar zu sein und schalten Deine
            Werbeanzeigen. Immer mit dem Ziel, dass Du mehr Anfragen und
            Neukunden gewinnst.
          </p>
          <MailBtn className="mt-8 lg:max-w-2/3 2xl:w-full" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/instagram.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Werbung in Instagram"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Werbeanzeigen auf Instagram helfen Dir, besser von potentiellen
            Kunden gefunden werden zu können
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 dark:xl:pb-64 relative lg:bg-custom-white dark:lg:py-0">
        <div className="px-4 lg:px-0 xl:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Damit Du auf Instagram die
            <span className="text-custom-red">sichtbarste Firma</span> wirst!
          </h2>
        </div>
        <div className="lg:text-lg px-4 lg:px-0">
          <p>
            Wir schalten Deine Instagram Werbung, damit Dich Deine Kunden dort
            finden, wo sie Dich suchen. Wir richten Deine Instagram Kampagne so
            ein, dass sie perfekt zur richtigen Zielgruppe ausgespielt wird.
          </p>
        </div>
        <Contact className="p-4 lg:p-8 mt-12" />
      </section>
      <section className="flex flex-col xl:flex-row gap-12 mt-24 lg:mt-0 lg:p-32 2xl:gap-32 2xl:justify-center dark dark:lg:mt-32">
        <div className="xl:min-w-1/2 2xl:min-w-1/3 xl:relative">
          <div className="xl:absolute xl:-top-48">
            <Image
              src="/images/portraits/39321-4133web.jpg"
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
            Jan Krösche & Team: Deine Berater für
            <span className="text-custom-red">
              Instagram Werbung für Firmen
            </span>{" "}
            aus Deutschland, Österreich, Südtirol & der Schweiz
          </h1>
          <InfoBtn
            content="Instagram Ads Experten"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Wir beraten Dich nicht nur, sondern setzen Dir Deine Werbung auf
            Instagram komplett auf
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Wir richten die Instagram Kampagne so ein, dass die der richtigen
              Zielgruppe ausgespielt wird. Damit Du nicht nur mehr Neukunden
              gewinnst, sondern auch die richtigen Neukunden ansprechen kannst.
            </p>
            <p>
              Wir verstehen uns als Dienstleister, der sich um Dich und Deine
              Werbung kümmert. Wir versenden nicht einfach bloß nichtssagende
              Reportings per Mail, sondern machen Vorschläge, testen und setzen
              um. Immer in Abstimmung mit Dir, damit Du stets im Bilde bist, wie
              Deine Werbung funktioniert.
            </p>
            <MailBtn className="mt-8 lg:max-w-2/3 2xl:w-full" />
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
                  Wir verstehen uns als Dienstleister und kümmern uns persönlich um
                  Dich. Wir helfen Dir dabei, eine perfekte YouTube Ads Strategie zu
                  finden und aufzusetzen, damit Du auf der Plattform maximal sichtbar
                  wirst. Wir recherchieren die Themen, die Deine potentiellen Kunden
                  auf YouTube konsumieren und legen einen Plan fest, um bei YouTube
                  Sichtbarkeit zu gewinnen.
                </p>
                <TwoBoxLayout
                  boxes={instagramWerbungTwoBox}
                  className="mt-12 lg:mt-24"
                />
              </div>
            </section>
    </div>
  );
}
