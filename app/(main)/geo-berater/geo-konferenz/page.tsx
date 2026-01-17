import Breadcrumbs from "@/app/components/Breadcrumps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Konferenz im Allgäu 17.04.26 | GEO Seminar Bad Wörishofen",
};

export default function page() {
  return (
    <div>
            <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
    </div>
  )
}
