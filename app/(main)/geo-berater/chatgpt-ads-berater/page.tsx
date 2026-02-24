import ATF from "@/app/components/ATF";
import atf from "../../../content/ATFContents";
import { Metadata } from "next";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import Contact from "@/app/components/Contact";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { chatGPTAdsBeraterTwoBox } from "@/app/content/TwoBoxLayoutContent";
import MailBtn from "@/app/components/buttons/MailBtn";

export const metadata: Metadata = {
  title: "ChatGPT Ads Berater Jan Krösche | Werbung auf ChatGPT",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.chatGPTAdsBeraterATF.title}
        subtitle={atf.chatGPTAdsBeraterATF.subtitle}
        text={atf.chatGPTAdsBeraterATF.text}
        button={<MailBtn />}
        imgPathMobile="/images/portraits/39321-4194.jpg"
        imgPathDesktop="/images/portraits/39321-4118_01.jpg"
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 md:px-16 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h1>
            Mit <span className="text-custom-red">ChatGPT Ads</span> wirst Du
            die Nr. 1 bei ChatGPT und anderen KI Systemen
          </h1>
          <p>
            KI Suchmaschinen wie ChatGPT, Gemini, Perplexity und Copilot werden
            bedeutender. Die Zugriffszahlen wachsen konstant.
          </p>
          <p className="py-4">
            Kein Wunder, dass ChatGPT Ads zu einem wichtigen Werkzeug werden, um
            die Firmen-Sichtbarkeit in der KI zu steigern.
          </p>
          <p className="pb-4">
            Mit gezielten ChatGPT Ads wirst Du genau für die Phrasen (= Prompts)
            ausgespielt, die Deine potentiellen Kunden in der KI suchen. Die
            erreichst die passende Zielgruppen und generierst mehr Anfragen und
            mehr Neukunden.
          </p>
          <p>
            Wir setzen Deine ChatGPT Werbung auf, damit Du in der KI sichtbarer
            bist.
          </p>
          <MailBtn className="mt-8 lg:max-w-2/3 2xl:w-full" />
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/screenshots/chatgpt-ads-berater.png"
            style={{ width: "600px" }}
            alt="Screenshot einer ChatGPT Suche"
            height={400}
            width={600}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Menschen interagieren zunehmend mit KI Systemen. Mit ChatGPT macht
            man sich und sein Angebot sichtbar
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 dark:xl:pb-64 relative lg:bg-custom-white dark:lg:py-0">
        <div className="px-4 lg:px-0 xl:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Du willst bei ChatGPT zitiert werden und so zum{" "}
            <span className="text-custom-red">sichtbarsten Anbieter</span> der
            Branche in deiner Region werden?
          </h2>
        </div>
        <div className="lg:text-lg px-4 lg:px-0">
          <p>
            Was bringt Dir eine Website, wenn sie niemand sieht? Viele
            Unternehmen scheitern nicht daran, weil die Qualität nicht
            ausreicht. Sie scheitern daran, dass sie kaum Bekanntheit und
            Reichweite haben. Was bringt das beste Angebot, wenn es niemand
            kennt? Mit ChatGPT Ads bringst Du Dich genau dort ins Spiel, wo
            Deine potentiellen Kunden unterwegs sind!
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
            <span className="text-custom-red">ChatGPT Ads Berater</span> für
            Deutschland, Österreich, Südtirol & der Schweiz
          </h1>
          <InfoBtn
            content="Microsoft Ads Experten"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">
            Wir machen Unternehmen bei ChatGPT sichtbar
          </h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Dabei haben wir unser Profil so geschärft, dass wir uns nicht nur
              auf die Suchmaschine Google konzentrieren, sondern die Algorithmen
              von Bing, ChatGPT, YouTube, Copilot & Co. verinnerlicht haben, um
              unsere Kunden maximal sichtbar machen zu können.
            </p>
            <p>
              Unser Ziel ist es, Dich und Deine Firmenwebsite bei ChatGPT von
              OpenAI auffindbar zu machen. Wir schalten ChatGPT Ads Kampagnen
              für Firmen aus Deutschland, Österreich, Südtirol und der Schweiz.
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
      <section className="mt-24 px-4 py-24 xl:m-0 xl:p-32 relative bg-custom-white dark:pt-0 dark:xl:pt-32">
        <div className="lg:max-w-2/3">
          <h1>
            Persönliche
            <span className="text-custom-red">ChatGPT Ads Beratung </span> aus
            einer Hand
          </h1>
        </div>
        <div className="lg:text-lg">
          <p>
            Sei der erste in Deinem Markt, der Werbeanzeigen auf ChatGPT
            schaltet! Der Werbekanal ist neu und wird kaum genutzt. Das ist
            Deine Chance, um günstige Werbeplätze zu „ergattern“ und Dich gut zu
            positionieren. Damit Du mehr Anfragen generierst.
          </p>
          <TwoBoxLayout
            boxes={chatGPTAdsBeraterTwoBox}
            className="mt-12 lg:mt-24"
          />
        </div>
      </section>
    </div>
  );
}
