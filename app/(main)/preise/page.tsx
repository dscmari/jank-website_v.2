import Pricing from "@/app/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preispakete | SEO – GEO – Google Ads",
};

export default function page() {
  return (
    <div className="bg-custom-white">
        <h1 className="px-4 lg:px-32 pt-24 pb-4 lg:pb-8">Unsere Preispakete</h1>
        <Pricing className="px-4 lg:px-32 pb-24 lg:pb-32"/>
    </div>
  )
}
