import WebsiteCheck from "@/app/components/website-check/WebsiteCheck";

export default function page() {
  return (
    <div>
      <WebsiteCheck isGeo={true} className="max-w-7xl mx-auto mt-12 lg:mt-24" />
    </div>
  );
}
