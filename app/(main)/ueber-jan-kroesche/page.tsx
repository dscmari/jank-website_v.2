import Breadcrumbs from "@/app/components/Breadcrumps";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import MailBtn from "@/app/components/buttons/MailBtn";
import SEOCheckBtn from "@/app/components/buttons/SEOCheckBtn";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über Jan Krösche | Experte für SEO, GEO, Google Ads & ChatGPT Ads",
};

export default function page() {
  return (
    <div>
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <section className="grid lg:grid-cols-2 gap-12  pt-8 sm:pt-16 lg:pt-32">
        <div className="px-4 sm:px-16 xl:px-32">
          <h1 className="lg:!text-5xl/14 text-center lg:text-start"> Jan Krösche</h1>
          <h2 className="text-center lg:text-start">
            Experte für <span className="text-custom-red">SEO</span>,{" "}
            <span className="text-custom-red">GEO</span>,{" "}
            <span className="text-custom-red">Google Ads </span>
            und <span className="text-custom-red">ChatGPT Ads</span>
          </h2>
          <InfoBtn
            content="Über Mich"
            className="mt-12 mx-auto lg:mx-0 dark:bg-darkmode-blue"
          />

          <div className="flex flex-col gap-4">
            <h2 className="mt-12">Wer ist Jan Krösche?</h2>
            <p>
              Jan Krösche berät seit 2017 Unternehmen aus Deutschland,
              Österreich, Schweiz und Norditalien in den Bereichen SEO, GEO,
              Google Ads und ChatGPT Ads.
            </p>
            <p>
              Dabei hilft Jan Krösche seinen Kunden, bei Google, ChatGPT, Bing,
              Copilot und Claude besser gefunden zu werden und eine hohe
              Sichtbarkeit im Internet zu erreichen.
            </p>
            <p>
              Jan Krösche hat bereits über 500 Firmen beraten und betreut. Zu
              seinen Kunden zählen Firmen wie Handwerker, Industriebetriebe,
              Ärzte, Therapeuten, Software-Unternehmen, IT-Dienstleister, Hotels
              und Eventagenturen.
            </p>
          </div>
          <div className="flex flex-col lg:hidden xl:flex gap-4">
            <h2 className=" mt-8">
              Hoher Spezialisierungsgrad im SEO, GEO, Google Ads und ChatGPT Ads
            </h2>
            <p>
              Ein Mix aus Agentur und Freelancer: Das Beratungsunternehmen von
              Jan Krösche ist auf wenige Marketingkanäle hochspezialisiert: SEO,
              GEO, Google Ads und ChatGPT Ads sind das Kerngeschäft. Technische
              Umsetzungen und andere Werbemaßnahmen werden mit einem großen
              Partner-Netzwerk abgedeckt.
            </p>
            <p>
              Jan Krösche hat bis 2025 eine der größten
              Onlinemarketing-Agenturen in Süddeutschland als Geschäftsführer
              geleitet. Dabei verantwortete er ein Team von knapp 40
              Mitarbeitenden und einem Umsatz in Millionenhöhe. Seit 2026
              arbeitet Jan Krösche mit seinem Experten-Team selbständig.
            </p>
          </div>
        </div>
        <div className="min-w-1/2 mx-auto">
          <div className="">
            <Image
              src="/images/portraits/39321-4133web.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="flex flex-col hidden lg:flex xl:hidden gap-4 col-span-2 px-4 sm:px-16 xl:px-32">
          <h2 className="mt-8 lg:mt-0">
            Hoher Spezialisierungsgrad im SEO, GEO, Google Ads und ChatGPT Ads
          </h2>
          <p>
            Ein Mix aus Agentur und Freelancer: Das Beratungsunternehmen von Jan
            Krösche ist auf wenige Marketingkanäle hochspezialisiert: SEO, GEO,
            Google Ads und ChatGPT Ads sind das Kerngeschäft. Technische
            Umsetzungen und andere Werbemaßnahmen werden mit einem großen
            Partner-Netzwerk abgedeckt.
          </p>
          <p>
            Jan Krösche hat bis 2025 eine der größten Onlinemarketing-Agenturen
            in Süddeutschland als Geschäftsführer geleitet. Dabei verantwortete
            er ein Team von knapp 40 Mitarbeitenden und einem Umsatz in
            Millionenhöhe. Seit 2026 arbeitet Jan Krösche mit seinem
            Experten-Team selbständig.
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row gap-12 lg:mt-64 lg:bg-custom-white pt-24 lg:pb-32 xl:pb-48 2xl:pb-64 2xl:gap-32 2xl:justify-center dark">
        <div className="lg:min-w-1/2 2xl:min-w-1/3 lg:relative">
          <div className="lg:absolute lg:-top-48">
            <Image
              src="/images/portraits/39321-4194.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={400}
              className="mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="px-4 sm:px-16 lg:px-4 xl:pr-32 2xl:max-w-1/3">
          <h1 className="text-center">
            Erste Agentur für{" "}
            <span className="text-custom-red">ChatGPT Ads</span> in Deutschland
          </h1>
          <InfoBtn
            content="Nr. 1 im DACH-Raum"
            className="mx-auto mt-12 dark:bg-darkmode-blue"
          />
          <h2 className="text-center mt-4">Werbung in der Ära der KI-Suche</h2>
          <div className="flex flex-col gap-4 mt-12">
            <p>
              Bereits zur Firmengründung 2026 hat sich Jan Krösche neben SEO,
              GEO und Google Ads mit dem neuen Marketingtrend aus den USA
              intensiv beschäftigt: ChatGPT Ads.
            </p>
            <p>
              Damit ist das Beratungsunternehmen von Jan Krösche ist die erste
              Agentur für ChatGPT Ads in Deutschland, Österreich und der
              Schweiz.
            </p>
            <p>
              Als Berater und Pionier bei ChatGPT Ads hilft Jan Krösche Firmen
              dabei, effiziente Werbung bei ChatGPT und anderen KI-Systemen wie
              Gemini, Copilot und Claude zu schalten.
            </p>
            <p>
              Mit zunehmender Beliebtheit der KI-Systeme werden neue
              Werbemaßnahmen wie GEO (Generative Engine Optimization) und GEA
              (Generative Engine Advertising) im Marketing für Firmen eine
              zunehmende Rolle spielen
            </p>
            <p>
              Als erste ChatGPT Ads Agentur steht Jan Krösche seinen Kunden
              daher als Pionier und Experte zur Seite, um die richtige
              Werbestrategie auf ChatGPT zu wählen und starke Ergebnisse zu
              erzielen.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row lg:items-center px-4 sm:px-16 lg:px-32 pt-24 lg:gap-12 lg:pt-32 xl:pt-48 2xl:gap-32">
        <div className="flex-1 flex flex-col">
          <h1 className="text-center lg:text-start">Huber & Krösche: Der <span className="text-custom-red">GEO Podcast</span> </h1>
          <p>
            In regemäßigen Abständen veröffentlichen die beiden KI-SEO Experten
            Bastian Huber & Jan Krösche einen Podcast.
          </p>
          <p>
            In „Huber & Krösche: Der GEO Podcast“ dreht sich alles um
            KI-Sichtbarkeit, GEO, ChatGPT Ads, Kundengewinnung im Internet, SEO
            und Google Ads
          </p>
          <span className="mt-4 font-light text-sm dark:text-custom-white">Links zum Podcast</span>
          <a
            href="https://www.youtube.com/@jankroesche"
            target="_blank"
            className="mt-4 underline underline-offset-2 font-semibold dark:text-custom-white"
          >
            Jan Krösche bei YouTube
          </a>
          <a
            href="https://open.spotify.com/show/4d5VQHbtxZGoaWLlp1zCaY"
            target="_blank"
            className="mt-4 underline underline-offset-2 font-semibold dark:text-custom-white"
          >
            Huber & Krösche: Der GEO Podcast bei Spotify
          </a>
        </div>
        <div className="mt-24 lg:mt-12 xl:min-w-1/3">
          <Image
            src="/images/podcast.png"
            style={{ width: "400px" }}
            alt="Cover der Zeitschrift Website Boosting"
            height={600}
            width={400}
            className="mx-auto"
          />
          <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
            Website Boosting
          </p>
        </div>
      </section>
      <section className="mt-24 lg:mt-48 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:p-32 lg:pb-48  2xl:gap-32 2xl:justify-center xl:bg-custom-white dark xl:min-h-[800px]">
        <div className="min-w-1/2 2xl:min-w-1/3 relative hidden xl:block">
          <div className="lg:absolute -top-48">
            <Image
              src="/images/portraits/39321-4319.jpg"
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
              height={800}
              width={600}
              className="mx-auto"
            />
            <p className="text-sm font-light p-8 max-w-xl mx-auto text-center">
              "Ganz vorne bei ChatGPT"
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 px-4 sm:px-16 lg:px-0 dark:!bg-black dark:lg:!bg-darkmode-blue">
          <div className="flex flex-col">
            <h1>
              Jan Krösche publiziert in{" "}
              <span className="text-custom-red">Fachzeitschriften</span> und
              hält <span className="text-custom-red">Vorträge</span>
            </h1>
            <p>
              Als Experte für Google-Sichtbarkeit und KI-Sichtbarkeit ist Jan
              Krösche in der Branche bekannt. Er veröffentlicht regelmäßig in
              der Onlinemarketing-Fachzeitschrift „Website Boosting“ von Mario
              Fischer:
            </p>
            <span className="mt-4 font-light text-sm">Artikel</span>
            <a
              href="https://www.websiteboosting.com/magazin/88/helpful-content-in-der-praxis-die-nuetzlichsten-websites-gewinnen.html"
              target="_blank"
              className="mt-4 underline underline-offset-2 font-semibold"
            >
              Helpful Content in der Praxis - die nützlichsten Websites gewinnen
            </a>
            <a
              href="   https://www.websiteboosting.com/magazin/81/seo-die-blue-ocean-strategie.html"
              target="_blank"
              className="mt-4 underline underline-offset-2 font-semibold"
            >
              SEO - Die Blue Ocean Strategie
            </a>
          </div>
          <div className="flex flex-col gap-4 dark:pb-24 dark:lg:pb-0">
            <h1>
              Jan Krösche ist der Veranstalter der ersten{" "}
              <span className="text-custom-red">GEO Konferenz</span> in
              Süddeutschland
            </h1>
            <p>
              Zusammen mit Bastian Huber von der Conversionschmiede hat Jan
              Krösche die erste GEO Konferenz in Süddeutschland veranstaltet.
            </p>
            <p>
              Das GEO Event fand am 08. Mai 2026 in Bad Wörishofen statt. Zu den
              Teilnehmenden zählten Agenturen, Onlinemarketing-Profis,
              KI-Experten, Marketingleiter von Industriefirmen und
              Firmeninhaber.
            </p>
            <p>
              Auf der GEO-Fachtagung gab es Diskussionsrunden und Vorträge zu
              Themen wie KI-Sichtbarkeit, Generative Engine Optimization,
              ChatGPT Ads, KI Ads, Google-Sichtbarkeit, Agentic Shopping etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
