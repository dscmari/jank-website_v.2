
import Image from "next/image";
import Link from "next/link";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { FiMail, FiPhone } from "react-icons/fi";
// import Breadcrumbs from "../../Breadcrumps";

type Props = {
  className?:string
}

export default function DesktopNavbar({className} : Props) {
  return (
    <div className={`bg-custom-white p-4 px-8 ${className}`}>
      <div className="flex gap-8 justify-end items-center text-sm">
        <div className="flex gap-2 items-center">
          <FiPhone />
          <span>+49 176 55109383</span>
        </div>
        <div className="flex gap-2 items-center">
          <FiMail />
          <a href="mailto:max.mustermann@ihre-domain.de">jan@jankroesche.de</a>
        </div>
      </div>
      <div className="flex items-center justify-around pt-4">
        <Link href={"/"}>
          {" "}
          <Image
            src="/images/logo_transparent.png"
            alt="Logo Jan Kroesche"
            style={{ width: "200px" }}
            width={200}
            height={200}
          />
        </Link>
        <ShiftingDropDown />
      </div>
      {/* <Breadcrumbs /> */}
    </div>
  );
}
