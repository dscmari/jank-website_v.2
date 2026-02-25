"use client";
import Script from "next/script";
//,
// import React, { useEffect, useState } from "react";
//import { Cookies } from "react-cookie-consent";

export default function GTMHeadScript() {
  // const [hasConsent, setHasConsent] = useState(false)
  const GTM_ID = "GTM-K432QXWP";

  /*
  useEffect(() => {
    const userConsent = Cookies.get("conversionCookie");
    if (userConsent === "true") {
      setHasConsent(true);
    }
  }, []);

  if (!hasConsent) {
    return null; // Don't render anything if consent is not given
  }
*/
  return (
    <>
      <Script id="gtm-js" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
    </>
  );
}
