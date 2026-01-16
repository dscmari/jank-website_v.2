import WebsiteCheck from "@/app/components/website-check/WebsiteCheck";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloser SEO Check | SEO Analyse für deine Website",
};


export default function page() {
  return (
    <div className="2xl:mx-32 md:mt-12 lg:mt-24">
      <WebsiteCheck className="pt-12 md-pt-0 md:mt-12 md:max-w-3/4 xl:max-w-7xl mx-auto rounded-xl" />
    </div>
  );
}
