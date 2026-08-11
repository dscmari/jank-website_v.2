// components/BreadcrumbsJsonLd.tsx
import { headers } from "next/headers";

export default async function BreadcrumbsJsonLd() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const pathnames = pathname.split("/").filter((x) => x);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jankroesche.de",
      },
      ...pathnames.map((value, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: value.replace(/-/g, " "),
        item: `https://jankroesche.de/${pathnames.slice(0, index + 1).join("/")}`,
      })),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
