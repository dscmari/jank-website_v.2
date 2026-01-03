import { FiMail, FiPhone } from "react-icons/fi";

type Props = {
  className?: string,
};

export default function Contact({ className}: Props) {
  const classes = `flex flex-col items-center gap-4 bg-custom-red font-semibold text-lg text-custom-white ${className}`;
  return (
    <div className={classes}>
      <p className="text-center">Schnelle Kontaktaufnahme zu Jan Krösche</p>
      <div className="flex items-center gap-4">
        <FiPhone />
        <span className="text-lg">+49 176 55109383</span>
      </div>
      <div className="flex items-center gap-4">
        <FiMail  color="#f5f6fa"/>
        <span className="text-lg">jan@jankroesche.de</span>
      </div>
    </div>
  );
}
