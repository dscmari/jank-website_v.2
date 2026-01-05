import Image from "next/image";
import ATF from "@/app/components/ATF";
import { Metadata } from "next";
import atf from "../../content/ATFContents";
import LinkAdsKurs from "@/app/components/links/LinkAdsKurs";
import { FiArrowRight } from "react-icons/fi";
import Contact from "@/app/components/Contact";
import TwoBoxLayout from "@/app/components/layouts/TwoBoxLayout";
import { adsBerater } from "@/app/content/TwoBoxLayoutContent";
import SixBoxLayout from "@/app/components/layouts/SixBoxLayout";
import { adsBeraterSixBox } from "@/app/content/SixBoxLayoutContent";
import references from "@/app/content/referencesList";
import FiveStarRating from "@/app/components/FiveStarRating";
import { GoDiamond } from "react-icons/go";

export const metadata: Metadata = {
  title: "Google Ads Berater Jan Krösche | Experte für Google Werbung",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.adsBeraterATF.title}
        subtitle={atf.adsBeraterATF.subtitle}
        text={atf.adsBeraterATF.text}
        LinkComponent={<LinkAdsKurs />}
        imgPathMobile={"/images/portraits/39321-4190.jpg"}
        imgPathDesktop={"/images/portraits/39321-4211_02.jpg"}
      />
      <section className="flex flex-col 2xl:flex-row 2xl:items-center px-4 pt-8 lg:gap-12 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Mit unserer{" "}
            <span className="text-custom-red">Google Ads Beratung</span> wirst
            schon nach kurzer Zeit bei Google sichtbar
          </h2>
          <p>
            Du brauchst endlich mehr Klicks auf Deiner Seite, damit mehr
            Anfragen reinkommen und Du mehr Neukunden gewinnen kannst? Dann
            könnte Google Ads eine Lösung Deines Problems sein.
          </p>
          <p className="py-4">
            Google Werbeanzeigen zählen im deutschsprachigen Raum zu den besten
            und wichtigsten Marketingkanälen. Sowohl für große als auch für
            kleine Unternehmen. Schon mit „kleinem“ Werbebudget kann man über
            Google Ads die richtigen Nutzer (= potentielle Kunden) auf die Seite
            bringen.
          </p>
          <p>
            Wir stehen Unternehmen aus Deutschland, Österreich, Südtirol und der
            Schweiz als Google Ads Berater zur Seite. Wir helfen Dir, die Nummer
            1 auf Google zu werden und mehr Neukundenumsatz zu machen.
          </p>
          <button className="mt-4 lg:mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-1/3 2xl:w-2/3 flex items-center justify-between">
            <LinkAdsKurs />
            <FiArrowRight />
          </button>
        </div>
        <div className="mt-12 lg:mt-0 xl:min-w-1/3">
          <Image
            src="/images/screenshots/ads-beraters_.png"
            style={{ width: "600px" }}
            alt="Screenshot einer Google Ads Werbung"
            height={300}
            width={500}
          />
          <p className="lg:hidden p-8 italic 2xl:mx-auto text-center lg:text-start 2xl:text-center">
            „Mit der richtigen Google Werbung stehst Du schon in kurzer Zeit
            ganz oben in der Google Suche!“
          </p>
          <p className="hidden lg:block p-8 italic 2xl:mx-auto text-center lg:text-start 2xl:text-center">
            „Mit der richtigen Google Werbung stehst Du schon in kurzer <br />{" "}
            Zeit ganz oben in der Google Suche!“
          </p>
        </div>
      </section>
      <section className="pt-24 lg:p-32 lg:pb-48 relative lg:bg-custom-white">
        <div className="px-4 lg:px-0 lg:max-w-2/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Du kannst es Dir nicht mehr leisten, dass{" "}
            <span className="text-custom-red">keine Neukunden </span>
            reinkommen? In Zeiten wirtschaftlicher Unsicherheit ist ein
            verlässlicher Strom an Neugeschäft unerlässlich.
          </h2>
        </div>
        <div className="lg:text-lg px-4 lg:px-0">
          <p>
            Viele Unternehmen stehen unter Druck. Die „fetten“ Jahre sind
            vorbei. Gehälter stagnieren, Investitionen werden gestoppt oder gar
            zurückgefahren. Wir sehen einen massiven Stellenabbau. Auch wenn die
            Kuchen in vielen Märkten derzeit kleiner werden (oder zumindest die
            Aussichten trübe sind), kannst Du dennoch dagegensteuern und Dein
            Geschäft voranbringen. Denn dort, wo andere sparen, investierst Du
            in Werbung und ins Neukundengeschäft. Du sorgst also dafür, dass
            frisches Geld reinkommt und Du so durch die schwierigen Jahre
            kommst. Mit Google Ads hast Du die Möglichkeit, schon nach kurzer
            Zeit mehr Umsatz zu machen.
          </p>
        </div>
        <Contact className="p-4 lg:p-8 mt-12" />
      </section>
      <section className="mt-24 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:p-32 lg:py-24 2xl:gap-32 2xl:justify-center ">
        <div className="min-w-1/2 2xl:min-w-1/3 relative">
          <div className="lg:absolute -top-48">
            <Image
              src="/images/portraits/39321-4133web.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={500}
              width={300}
            />
            <p className="text-center p-8 italic mx-auto text-lg">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:m-0 flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3">
          <h2 className="lg:!text-3xl/10 tracking-wide font-semibold">
            Jan Krösche & Team: Deine Google Ads Berater für{" "}
            <span className="text-custom-red">
              mehr Google Klicks & mehr Neukundenumsatz
            </span>
          </h2>
          <p>
            Wer bei Google unsichtbar ist, tut sich im Neukundengeschäft schwer.
            Wir haben schon über 1.000 Firmen beraten und hinsichtlich der
            Google Sichtbarkeit analysiert. Es Bild ist dabei ganz klar: Firmen,
            die bei Google Top Positionen haben und für wichtige Suchphrasen
            oben stehen, bekommen mehr Anfragen und machen mehr Umsatz.
          </p>
          <p>
            Der Werbekanal „Google“ ist einfach wahnsinnig stark darin,
            Werbeanzeigen effizient auszuspielen. Wenn Du beispielsweise ein
            Makler in Freiburg bist, dann möchtest Du natürlich für Suchbegriffe
            wie „Makler Freiburg“, „Haus verkaufen Freiburg“ usw. gut gefunden
            werden. Neben SEO hast Du mit Google Ads die Möglichkeit, schnell
            nach oben zu kommen.
          </p>
          <p>
            Als Google Ads Berater helfen wir Firmen, die Reichweite bei Google
            zu steigern und mehr Neukunden zu gewinnen.
          </p>
          <button className="mt-8 lg:mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-2/3 flex items-center justify-between">
            <LinkAdsKurs />
            <FiArrowRight />
          </button>
        </div>
      </section>
      <section className="mt-24 lg:mt-32 py-12 lg:py-24 px-4 lg:px-32 bg-custom-white">
        <div className="lg:max-w-2/3">
          <h1 className="text-start tracking-wide">
            Persönliche
            <span className="text-custom-red">
              {" "}
              Google Ads Dienstleistung
            </span>{" "}
            aus einer Hand
          </h1>
        </div>
        <p>
          Wer schon einmal im Google Ads System eingeloggt war, weiß wie komplex
          das Werbetool sein kann. Was für die Industrie die SAP-Software ist,
          ist für Werbeleute das Google Ads System. Es gibt unzählige
          Einstellungsmöglichkeiten: Zum einen ist das genial, weil man die
          Google Werbeanzeigen sehr genau ausspielen kann. Zum anderen ist es
          für den Werbetreibenden furchtbar anstrengend und nahezu unmöglich,
          alles richtig einzustellen. Aus diesem Grund gibt es uns. Wir sind
          Dein Google Ads Dienstleister und persönlich für Dich und Deine Firma
          da.
        </p>
        <TwoBoxLayout boxes={adsBerater} className="mt-12 lg:mt-24" />
      </section>
      <section className="pt-24 pb-12 lg:pt-16 px-4 lg:px-32 bg-custom-white">
        <h1 className="lg:text-center lg:tracking-wide">
          So bringen wir Dich bei{" "}
          <span className="text-custom-red">Google</span> ganz nach oben
        </h1>
        <SixBoxLayout boxes={adsBeraterSixBox} className="" />
      </section>
      <section className="px-4 pt-24 pb-12 lg:pb-32 lg:px-32 bg-custom-white">
        <h1 className="text-start tracking-wide mb-4">
          Seit 2017 haben wir schon über
          <span className="text-custom-red"> 500 Firmen </span>
          geholfen
        </h1>
        <p>
          Seit 2017 ist Jan Krösche als SEO und Google Ads Berater und
          Kundenbetreuer in Deutschland, Österreich, Südtirol und der Schweiz
          „unterwegs“. In dieser Zeit haben wir schon über 500 Firmen geholfen,
          bei Google oben zu stehen. Google Werbung ist unsere „Westentasche“,
          mit der wir uns auskennen. Durch unsere Google Optimierungen haben
          unsere Kunden über 23 Millionen Euro Auftragsvolumen seit 2022
          generiert. Google Ads ist daher nicht nice to have, sondern ein
          Umsatzbringer.{" "}
        </p>
        <div className="pt-4 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch">
          {references.slice(0, 4).map((s: any, index: number) => (
            <section key={index} className="flex flex-col">
              <div className="h-full bg-white p-8 rounded-xl">
                <FiveStarRating />
                <h2 className="mt-8">{s.title}</h2>
                <p>{s.text}</p>
                <div className="flex flex-col gap-4 my-8">
                  <div className="flex items-center gap-4">
                    <GoDiamond
                      color="rgb(231,0,53)"
                      className="h-4 flex-shrink-0"
                    />
                    <span>
                      <span className="font-semibold">Google: </span>
                      {s.googleResults}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <GoDiamond
                      color="rgb(231,0,53)"
                      className="h-4 flex-shrink-0"
                    />
                    <span>
                      <span className="font-semibold">{s.preAIresults} </span>
                      {s.aiResults}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <GoDiamond
                      color="rgb(231,0,53)"
                      className="h-4 flex-shrink-0"
                    />
                    <span>
                      <span className="font-semibold">Firma: </span>
                      {s.company}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="flex flex-col 2xl:flex-row 2xl:items-center gap-12 px-4 pt-24 lg:p-32 lg:py-32 2xl:gap-32 2xl:justify-center">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="lg:tracking-wide">
            Noch unsicher? Dann schau Dir den{" "}
            <span className="text-custom-red">
              kostenloser Google Ads Kurs{" "}
            </span>{" "}
            von Jan Krösche an
          </h1>
          <p>
            {" "}
            Du bist Dir unsicher, ob Google Ads der richtige Werbekanal für Dich
            ist. Das ist vollkommen natürlich. Schließlich möchtest Du ja kein
            Geld „verbrennen“, sondern Geld mit Deiner Firma verdienen.
          </p>
          <p>
            Aus diesem Grund biete ich Dir bei mir einen kostenlosen Google Ads
            Kurs an. Ich zeige Dir anhand eines echten Kundenprojekts, wie
            Google Ads abläuft, was Du erwarten kannst, welche
            Werbeeinstellungen es gibt und wie viel Budget Du einplanen musst.
            Du erhältst im Kurs einen Überblick rund um das ganze Thema.
          </p>
          <p>
            Warum ich das kostenlos mache? Weil ich weiß, wie schwierig die
            Entscheidung ist, bei Google Geld für Werbung auszugeben. Daher
            möchte ich einen entspannten „Rahmen“ schaffen, damit Du Dir das
            Ganze ohne Druck anschauen kannst und so viele Fragen stellen
            kannst, wie Du möchtest. Dann hast Du später eine bessere
            Entscheidungsgrundlage.
          </p>
          <button className="mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-2/3 flex items-center justify-between">
            <LinkAdsKurs />
            <FiArrowRight />
          </button>
        </div>
        <div className="min-w-1/2 2xl:min-w-1/3 relative">
          <Image
            src="/images/screenshots/ads-berater_3.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
            height={300}
            width={500}
          />
          <p className="lg:hidden p-8 text-center">
            „Wir halten die Zahlen Deiner Google Ads Kampagne im Blick und
            optimieren sie laufend weiter“
          </p>
          <p className="hidden lg:block p-8 2xl:mx-auto lg:text-start 2xl:text-center">
            „Wir halten die Zahlen Deiner Google Ads Kampagne im <br />
            Blick und optimieren sie laufend weiter“
          </p>
        </div>
      </section>
      <section className="mt-24 lg:px-32">
        <div className="px-4 lg:px-0 lg:text-center">
          <h1 className="lg:tracking-wide">
            Es ärgert Dich, dass Du{" "}
            <span className="text-custom-red"> bei Google nicht oben </span>{" "}
            stehst?
          </h1>
          <p>
            Du gibst immer wieder bei Google ein Keyword ein, aber erscheinst
            einfach nicht ganz oben? Immer sind es dieselben Wettbewerber, die
            vor Dir ranken und in der Google Suche erscheinen? Obwohl die
            Wettbewerber eigentlich eine schlechtere Website haben und das
            schlechtere Produkt? Dann haben Dir Deine Wettbewerber eine Sache
            voraus: Sie haben es verstanden, sich perfekt bei Google über Google
            Ads und SEO zu positionieren. Als Google Ads Berater helfen wir Dir,
            den Abstand zu den Konkurrenten zu verringern und endlich die Nummer
            1 bei Google zu werden.
          </p>
        </div>
        <div className="lg:max-w-2/3 px-4 lg:px-0 mt-12"></div>
      </section>
      <section className="mx-4 lg:mt-24 lg:mx-32 lg:mt-32">
        <div className="lg:max-w-2/3">
          <h1 className="lg:tracking-wide">
            Was bringen <span className="text-custom-red">Google Ads</span>{" "}
            Werbeanzeigen eigentlich?
          </h1>
        </div>
        <p>
          Firmen, die bei Google ganz oben stehen, gewinnen die meisten
          Neukunden. Google Ads hat daher nur einen Zweck: Dein Geschäft durch
          eine gezielte Neukundengewinnung massiv voranzubringen. Im Gegensatz
          zu klassischer Werbung erreichst Du hier keine Streuverluste, sondern
          sprichst Nutzer genau in dem Moment an, in dem sie bereits eine
          Kaufabsicht haben. Das macht Google Ads zum schnellsten und
          messbarsten Kanal für Dein Unternehmenswachstum.
        </p>
      </section>
      <section className="lg:bg-custom-white lg:mt-48 lg:flex gap-12 lg:p-32 lg:pb-48 xl:pb-80 2xl:gap-32 2xl:justify-center ">
        <div className="mt-12 lg:m-0 min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute -top-48">
            <Image
              src="/images/portraits/39321-4194.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={500}
              width={300}
            />
            <p className="p-8 px-24 text-center">
              "Wir sind für Dich erreichbar und kümmern uns persönlich um deine
              Sichtbarkeit"
            </p>
          </div>
        </div>
        <div className="mx-4 lg:m-0 flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3">
          <h1 className="tracking-wide text-center lg:text-start mb-4 lg:mb-0">
            Dein <span className="text-custom-red">Google Ads Berater </span>{" "}
            kümmert sich persönlich um Dich
          </h1>
          <p>
            Bei uns bist Du nicht irgendeine Nummer. Vom ersten
            Kennenlern-Termin an bekommst Du bei uns einen Google Ads Berater,
            der sich mit Dir, Deiner Firma und Deinem Webprojekt
            auseinandersetzt und sich persönlich um Dich kümmert. Je nach
            Fahrtstrecke kommen wir Dich auch gern in Deiner Firma persönlich
            besuchen, um Dich kennenzulernen.
          </p>
          <p>
            Natürlich arbeiten wir leistungsorientiert. Wir zeigen Dir in
            regelmäßigen Abständen, wo wir stehen und wie sich die Performance
            Deiner Google Ads Kampagne verbessert hat. Wir halten Dich immer auf
            dem Laufenden und stehen Dir persönlich zur Seite.
          </p>
          <button className="mt-12 p-4 bg-custom-red text-custom-white rounded-lg lg:w-2/3 flex items-center justify-between">
            <LinkAdsKurs />
            <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
