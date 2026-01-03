import ATF from "@/app/components/ATF";
import LinkSeoCheck from "@/app/components/LinkSeoCheck";
import WebsiteCheck from "@/app/components/WebsiteCheck";

export default function page() {
  return (
    <div>
      <ATF
        title={""}
        subtitle={
          "GEO Berater Jan Krösche & Team sorgen dafür, dass Deine Firma in den KI-Antworten von ChatGPT, Gemini und Copilot erscheint."
        }
        text={
          "Wir optimieren Deine Website , damit Du in den Antworten der KI Systeme zitiert wirst und nicht Deine Wettbewerber. Damit Du langfristig die meisten Kunden Deiner Branche gewinnst."
        }
        LinkComponent={<LinkSeoCheck />}
        imgPathMobile="/images/portraits/39321-4133web.jpg"
        imgPathDesktop="/images/portraits/39321-4000_02.jpg"
      />
      <WebsiteCheck isGeo={true} />
    </div>
  );
}
