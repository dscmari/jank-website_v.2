import ATF from "@/app/components/ATF";
import { Metadata } from "next";
import atf from "../../content/ATFContents";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import GEOCheckBtn from "@/app/components/buttons/GEOCheckBtn";
import Contact from "@/app/components/Contact";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { msAdsBeraterTwoBox } from "@/app/content/TwoBoxLayoutContent";

export const metadata: Metadata = {
  title: "Microsoft Ads Berater Jan Krösche | Bing Ads schalten",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.msAdsBeraterATF.title}
        subtitle={atf.msAdsBeraterATF.subtitle}
        text={atf.msAdsBeraterATF.text}
        LinkComponent={
          <div className="flex gap-4 items-center">
            <FiMail />
            <a href="mailto:max.mustermann@ihre-domain.de">
              jan@jankroesche.de
            </a>
          </div>
        }
        imgPathMobile="/images/portraits/39321-4133web.jpg"
        imgPathDesktop="/images/portraits/39321-4000_02.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Mit unserer <span className="text-custom-red">GEO Beratung</span>{" "}
            wirst Du bei ChatGPT, Gemini & Co. am häufigsten zitiert
          </h1>
          <p>
            Unter „GEO“ versteht man die Optimierung für generative
            Suchmaschinen. Einfach ausgedrückt: Man optimiert Firmen-Websites
            dahingehend, dass sie extrem häufig bei ChatGPT, Gemini, Copilot und
            anderen KI-Chatsystemen auftauchen.
          </p>
          <p className="py-4">
            Unseren Kunden „Schwabinger Wahrheit“ – ein Hotel in München –
            optimieren wir seit 2022 mit dem Ziel, in der KI sichtbarer zu sein.
            Für die Suchphrase (= Prompt) „Bestes Familienhotel in Schwabing“
            erscheint die Hotel-Website unseres Kunden auf Platz 1 in der
            Antwort. Genau so funktioniert die Kundengewinnung von Morgen.{" "}
          </p>
          <p>
            Wir stehen Unternehmen aus Deutschland, Österreich, Südtirol und der
            Schweiz als GEO Berater zur Seite. Wir helfen Dir, die Nummer 1 in
            der KI zu werden.
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
            src="/images/screenshots/ms-ads-berater.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
            height={300}
            width={500}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Microsoft Ads sind ideal, wenn Du Dein Firmenkundengeschäft
            ankurbeln möchtest
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 xl:pb-64 relative lg:bg-custom-white dark:lg:py-0">
        <div className="px-4 lg:px-0 xl:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Du willst bei Bing sofort ganz oben erscheinen und so zum{" "}
            <span className="text-custom-red">sichtbarsten Anbieter</span> der
            Branche in deiner Region werden?
          </h2>
        </div>
        <div className="lg:text-lg px-4 lg:px-0">
          <p>
            Mit Microsoft Ads sorgen wir dafür, dass Ihre Firma in der
            Bing-Suche immer ganz oben steht, sobald jemand nach Ihren
            Leistungen sucht. Wir wählen gemeinsam genau die Begriffe (Keywords)
            aus, die Ihre potenziellen Kunden tagtäglich in die Suchzeile
            eintippen, damit Sie keine teure Werbung an die falschen Leute
            verschwenden, sondern genau dort sichtbar sind, wo die
            Kaufentscheidung fällt. So landen die Besucher nicht irgendwo im
            Netz, sondern direkt auf Ihrer Website.
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
            <span className="text-custom-red">Microsoft Ads Berater</span> aus
            Deutschland, Österreich, Südtirol & der Schweiz
          </h1>
          <InfoBtn
            content="Microsoft Ads Experten"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Wir machen Unternehmen bei KI Suchmaschinen sichtbar
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Dabei haben wir unser Profil so geschärft, dass wir uns nicht nur
              auf die Suchmaschine Google konzentrieren, sondern die Algorithmen
              von Bing, ChatGPT, YouTube, Copilot & Co. verinnerlicht haben, um
              unsere Kunden maximal sichtbar machen zu können.
            </p>
            <p>
              Unser Ziel ist es, Dich und Deine Firmenwebsite bei Bing von
              Microsoft auffindbar zu machen. Wir schalten Microsoft Ads
              Kampagnen für Firmen aus Deutschland, Österreich, Südtirol und der
              Schweiz.
            </p>
            <p>
              Zu unseren Kunden zählen Selbstständige wie Zahnärzte, Handwerker,
              Makler, Anwälte, Eventagenturen, Hoteliers und technische Firmen
              wie Hersteller Maschinenbauer, Software-Unternehmen und
              IT-Dienstleister. Wir betreuen Firmen aus Deutschland, Österreich,
              Südtirol und der Schweiz.
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
         <section className="mt-24 px-4 py-24 xl:m-0 xl:p-32 relative bg-custom-white dark:pt-0">
              <div className="lg:max-w-2/3">
                <h1>
                  Persönliche
                  <span className="text-custom-red"> Microsoft Ads Beratung</span> aus
                  einer Hand
                </h1>
              </div>
              <div className="lg:text-lg">
                <p>
                  Wir verstehen uns als Dienstleister. Daher betreuen wir alle unsere
                  Kunden persönlich. Bei uns gibt es kein „Ticket-System“ oder
                  kilometerlange SEO-Reportings. Wir sind erreichbar, stimmen uns
                  regelmäßig mit Dir ab und zeigen Dir die Fortschritte Deiner Google
                  Rankings. Neben der fachlichen Expertise wird bei uns der
                  Kundenservice groß geschrieben.
                </p>
                <TwoBoxLayout boxes={msAdsBeraterTwoBox} className="mt-12 lg:mt-24" />
              </div>
            </section>
    </div>
  );
}
