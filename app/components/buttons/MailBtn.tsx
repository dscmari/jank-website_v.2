
import Link from "next/link";
import { FiArrowRight, FiMail } from "react-icons/fi";

type Props = {
    className?: string;
};

export default function MailBtn({ className }: Props) {
    return (
        <Link href={"mailto:max.mustermann@ihre-domain.de"}
            className={`md:w-1/2 md:mx-auto lg:mx-0 lg:w-full p-4 lg:max-w-2/3 bg-custom-red text-lg text-white font-semibold tracking-tight rounded-xl flex items-center justify-between ${className}`}
        >
            <div className="flex items-center gap-4">
                <FiMail />
                <span>jan@jankroesche.de</span>
            </div>
            <FiArrowRight color="white" />
        </Link>
    );
}