import Breadcrumbs from "@/app/components/Breadcrumps";
import Pricing from "@/app/components/pricing/Pricing";
import { workshops } from "@/app/content/pricingBoxes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO, GEO, Ads Workshops | Hoher Praxisbezug",
};

export default function page() {
  return (
     <div className="bg-custom-white dark:bg-black">
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <h1 className="text-center lg:text-start px-4 lg:px-32 pt-24 pb-4 lg:pb-8">
        Unsere Workshops
      </h1>
      <Pricing
        pricingBoxes={workshops}
        className="px-4 lg:px-32 pb-24 lg:pb-32"
      />
    </div>
  )
}
