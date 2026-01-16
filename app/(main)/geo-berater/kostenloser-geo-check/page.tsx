import WebsiteCheck from "@/app/components/website-check/WebsiteCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloser GEO Check | GEO Analyse für KI Sichtbarkeit",
};

export default function page() {
  return (
    <div>
      <WebsiteCheck isGeo={true} className="max-w-7xl mx-auto mt-12 lg:mt-24" />
    </div>
  );
}
