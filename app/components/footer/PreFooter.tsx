import ContactWithImg from "./ContactWithImg";
import WebsiteBoostingBox from "./WebsiteBoostingBox";

export default function PreFooter() {
  return (
    <section className="flex flex-col lg:flex-row-reverse justify-center gap-24 lg:gap-16 mt-24 lg:m-32">
      <WebsiteBoostingBox />
      <ContactWithImg />
    </section>
  );
}
