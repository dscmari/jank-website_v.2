import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./desktop/DesktopNavbar";

export default function Navbar() {

  return (
    <div>
        <MobileNavbar className="lg:hidden"/>
        <div className="sm:bg-green-500 md:bg-orange-500 lg:bg-red-500">TEST</div>
        <DesktopNavbar className="hidden lg:block"/>
    </div>
  );
}
