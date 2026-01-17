import Breadcrumbs from "@/app/components/Breadcrumps";
import WebsiteCheck from "@/app/components/website-check/WebsiteCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloser GEO Check | GEO Analyse für KI Sichtbarkeit",
};

export default function page() {
  return (
    <div>
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <WebsiteCheck isGeo={true} className="max-w-7xl mx-auto mt-12" />
    </div>
  );
}
