import { submitWebinar } from "@/actions/submit-webinar";
import Breadcrumbs from "@/app/components/Breadcrumps";
import InfoBtn from "@/app/components/buttons/InfoBtn";
import { Metadata } from "next";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const metadata: Metadata = {
  title: "GEO Webinare | GEO vom Experten lernen",
};

export default function page() {
  return (
    <section className="bg-custom-white pb-32">
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <div className="pt-12 lg:px-32 px-4 xl:pr-0 lg:pt-32 lg:pb-16 xl:max-w-2/3">
        <h1 className="lg:!text-5xl/14">
          Aktuelle <span className="text-custom-red">GEO </span> Webinare
        </h1>
      </div>
      <div className="flex flex-col items-center xl:flex-row justify-center gap-16 lg:gap-32 px-4 lg:px-32 mt-24">
        <div className="bg-white max-w-xl rounded-lg dark">
          <div className="relative">
            <Image
              src="/images/portraits/39321-4211_02.jpg"
              width={600}
              height={400}
              alt="Portrait von Jan Kroesche"
            />
            <div className="absolute top-1/2 -translate-y-1/2 max-w-1/2 left-1/8">
              <h2 className="text-custom-white !mb-6">
                Sichtbarkeits-Boost auf ChatGPT
              </h2>
              <p className="bg-custom-red inline py-1 px-4 text-custom-white rounded-lg font-semibold">
                GEO Webinar
              </p>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-center mt-8">
              Sichtbarkeits-Boost auf ChatGPT
            </h1>
            <InfoBtn
              content="GEO Webinar"
              className="mx-auto mt-8 dark:bg-black"
            />
            <p className="font-light text-sm/5 mt-8">
              Im kostenlosen Webinar lernst Du, wie Du die Reichweite Deiner
              Firma bei ChatGPT steigern kannst. Damit Dich Deine Kunden dort
              finden, wo sie suchen. Sichere Dir jetzt Deinen Wissensvorsprung,
              bevor Deine Konkurrenz den Algorithmus für sich entdeckt.
            </p>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex items-start gap-4">
                <IoIosCheckmarkCircle
                  color="rgb(231,0,53)"
                  size={24}
                  className="shrink-0"
                />
                <span>Kostenloses Webinar per Teams</span>
              </div>
              <div className="flex items-start gap-4">
                <IoIosCheckmarkCircle
                  color="rgb(231,0,53)"
                  size={24}
                  className="shrink-0"
                />
                <span>12.03.2026 von 09 bis 10 Uhr</span>
              </div>
            </div>
            <p className="mt-8 mb-8 font-light text-sm/5">
              Jetzt Platz reservieren und Du erhältst Du eine Teams-Einladung
              per Mail.
            </p>
            <form className="mt-4" action={submitWebinar}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="webinar">Webinar</label>
                  <input
                    name="webinar"
                    value="Sichtbarkeits-Boost auf ChatGPT"
                    readOnly
                    type="text"
                    className="font-semibold text-xl"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName">Vorname</label>
                  <input
                    name="firstName"
                    required
                    type="text"
                    className="rounded-lg border border-neutral-400 py-1 px-4"
                    placeholder="Vorname"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName">Nachname</label>
                  <input
                    name="lastName"
                    required
                    type="text"
                    className="rounded-lg border border-neutral-400 py-1 px-4"
                    placeholder="Nachname"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email Adresse</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="rounded-lg border border-neutral-400 py-1 px-4"
                    placeholder="max@musternann.de"
                  />
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <input required type="checkbox" className="min-w-6" />
                  <p className="font-light text-xs/3">
                    Ich stimme zu, dass meine Angaben aus diesem Formular zur
                    Beantwortung meiner Anfrage erhoben und verarbeitet werden.
                    Mehr Informationen in der Datenschutzerklärung. Die habe ich
                    gelesen und akzeptiert.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 bg-custom-red text-custom-white py-2 px-4 w-full rounded-lg cursor-pointer"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>

        {/* <div className="bg-white max-w-xl rounded-lg dark">
          <div className="relative">
            <Image
              src="/images/portraits/39321-4127_01.jpg"
              width={600}
              height={400}
              alt="Portrait von Jan Kroesche"
            />
            <div className="absolute top-1/2 -translate-y-1/2 max-w-2/3 left-1/8">
              <h2 className="text-custom-white !mb-6">
                Wie funktionieren KI Suchmaschinen?
              </h2>
              <p className="bg-custom-red inline py-1 px-4 text-custom-white rounded-lg font-semibold">
                GEO Webinar
              </p>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-center mt-8">
              Wie funktionieren KI Suchmaschinen?
            </h1>
            <InfoBtn
              content="GEO Webinar"
              className="mx-auto mt-8 dark:bg-black"
            />
            <p className="font-light text-sm/5 mt-8">
              Im kostenlosen GEO Webinar lernst Du, wie KI Suchmaschinen
              funktionieren. Zudem lernst Du die Grundlagen, wie Du Deine
              Website bei ChatGPT, Gemini & Co. sichtbarer machen kannst. Damit
              Du langfristig mehr Anfragen über Deine Seite bekommst.
            </p>
            <div className="flex flex-col gap-2 mt-8">
              <div className="flex items-start gap-4">
                <IoIosCheckmarkCircle
                  color="rgb(231,0,53)"
                  size={24}
                  className="shrink-0"
                />
                <span>Kostenloses Webinar per Teams</span>
              </div>
              <div className="flex items-start gap-4">
                <IoIosCheckmarkCircle
                  color="rgb(231,0,53)"
                  size={24}
                  className="shrink-0"
                />
                <span>12.02.2026 von 09 bis 10 Uhr</span>
              </div>
            </div>
            <p className="mt-8 mb-8 font-light text-sm/5">
              Jetzt Platz reservieren und Du erhältst Du eine Teams-Einladung
              per Mail.
            </p>
            <form className="mt-4" action={submitWebinar}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="webinar">Webinar</label>
                  <input
                    name="webinar"
                    value="Wie funktionieren KI Suchmaschinen?"
                    readOnly
                    type="text"
                    className="font-semibold text-xl"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName">Vorname</label>
                  <input
                    name="firstName"
                    required
                    type="text"
                    className="rounded-lg border border-neutral-400 py-1 px-4"
                    placeholder="Vorname"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName">Nachname</label>
                  <input
                    name="lastName"
                    required
                    type="text"
                    className="rounded-lg border border-neutral-400 py-1 px-4"
                    placeholder="Nachname"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email Adresse</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="rounded-lg border border-neutral-400 py-1 px-4"
                    placeholder="max@musternann.de"
                  />
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <input required type="checkbox" className="min-w-6" />
                  <p className="font-light text-xs/3">
                    Ich stimme zu, dass meine Angaben aus diesem Formular zur
                    Beantwortung meiner Anfrage erhoben und verarbeitet werden.
                    Mehr Informationen in der Datenschutzerklärung. Die habe ich
                    gelesen und akzeptiert.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 bg-custom-red text-custom-white py-2 px-4 w-full rounded-lg cursor-pointer"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
}
