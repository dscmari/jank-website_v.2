import { FiChevronDown } from "react-icons/fi"

type Props = {
    className?: string,
}

export default function FourBoxLayout({ className }: Props) {
    const faqs = [
        {
            id: "faq-1",
            question: "Wann brauche ich einen SEO Berater?",
            answer: "Als SEO Berater helfen wir Dir, wenn Du Deine Website und Deine Firma vertriebstechnisch besser aufstellen möchtest. Beim SEO geht es zwar darum, Deine Google Rankings zu steigern. Aber immer mit dem Ziel, dass Du dadurch auch mehr Anfragen generierst. SEO ist kein Selbstzweck, sondern ein Vertriebswerkzeug."
        },
        {
            id: "faq-2",
            question: "Für wen eignet sich die SEO Beratung von Jan Krösche?",
            answer: "Wir arbeiten vor allem für Selbstständige (Makler, Ärzte, Firmengründer, Handwerker, EDV-Firmen, Therapeuten, etc.) und für technische Unternehmen wie Hersteller, Maschinenbauer, Ingenieure, Software-Firmen. Grundsätzlich sind wir branchenunabhängig und nehmen Kunden aus Deutschland, Österreich, Südtirol und der Schweiz an. "
        },
        {
            id: "faq-3",
            question: "Was kostet ein SEO Berater?",
            answer: "Die Kosten variieren von Projekt zu Projekt. In der Regel starten wir bei wenigen Hundert Euro pro Monat. Der SEO Aufwand hängt sowohl vom Optimierungsgrad Deiner Website ab (wo rankst Du schon?) als auch von der SEO-Arbeit Deiner Wettbewerber. Falls Du eine schnelle Preiseinschätzung benötigst, können wir Dir auch kurzfristig einen Kostenvoranschlag per Mail zusenden unter jan@jankroesche.de"
        },
        {
            id: "faq-4",
            question: "Brauche ich Vorkenntnisse?",
            answer: "Nein, unsere Kunden haben in der Regel kaum oder nur wenige Vorkenntnisse im Bereich SEO. Wir sind Dienstleister und kümmern uns um alle SEO-Arbeiten, damit Du Dich auf Dein Geschäft konzentrieren kannst. "
        }
    ];
    return (
        <div className={`max-w-5xl mx-auto ${className}`}>
            <div className="flex flex-col gap-4">
                {faqs.map((faq) => (
                    <div key={faq.id} className="group border border-slate-200 dark:border-none rounded-xl overflow-hidden bg-white">
                        <input type="checkbox" id={faq.id} className="peer hidden" />

                        <label htmlFor={faq.id} className="flex justify-between items-center p-4 cursor-pointer bg-custom-white font-semibold select-none">
                            <span className="pointer-events-none">{faq.question}</span>
                            <FiChevronDown className="transition-transform duration-300 group-has-[:checked]:rotate-180 group-has-[:checked]:text-custom-red" />
                        </label>

                        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-has-[:checked]:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                                <div className="p-4 dark:bg-darkmode-blue">
                                    <p>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
