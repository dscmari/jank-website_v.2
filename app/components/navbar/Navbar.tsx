import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./desktop/DesktopNavbar";

export default function Navbar() {

  return (
    <div>
        <MobileNavbar className="lg:hidden"/>
        <DesktopNavbar className="hidden lg:block"/>
    </div>
  );
}
