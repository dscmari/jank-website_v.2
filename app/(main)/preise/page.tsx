import Pricing from "@/app/components/pricing/Pricing";
import {pricingBoxes} from "@/app/content/pricingBoxes";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preispakete | SEO – GEO – Google Ads",
};

export default function page() {
  return (
    <div className="bg-custom-white dark:bg-black">
        <h1 className="text-center lg:text-start px-4 lg:px-32 pt-24 pb-4 lg:pb-8">Unsere Preispakete</h1>
        <Pricing pricingBoxes={pricingBoxes}  className="px-4 lg:px-32 pb-24 lg:pb-32"/>
    </div>
  )
}
