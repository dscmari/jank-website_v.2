import ATF from "@/app/components/ATF";
import { Metadata } from "next";
import atf from "../../content/ATFContents";
import { FiMail } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Microsoft Ads Berater Jan Krösche | Bing Ads schalten",
};

export default function page() {
  return (
    <div>
      <ATF
        title={atf.msAdsBeraterATF.title}
        subtitle={atf.msAdsBeraterATF.subtitle}
        text={atf.msAdsBeraterATF.text}
        LinkComponent={
          <div className="flex gap-4 items-center">
            <FiMail />
            <a href="mailto:max.mustermann@ihre-domain.de">
              jan@jankroesche.de
            </a>
          </div>
        }
        imgPathMobile="/images/portraits/39321-4133web.jpg"
        imgPathDesktop="/images/portraits/39321-4000_02.jpg"
      />
    </div>
  );
}
