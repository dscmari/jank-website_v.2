"use client"

//import React, { useEffect, useState } from "react";
//import { Cookies } from "react-cookie-consent";

const GTM_ID = "GTM-K432QXWP";

export default function GTMBodyScript() {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
          title="Google Tag Manager NoScript"
        ></iframe>
      </noscript>
    </>
  );
}

/*
export default function AnalyticsConversionScript() {

    const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const userConsent = Cookies.get("conversionCookie");
    if (userConsent === "true") {
      setHasConsent(true);
    }
  }, []);

  if (!hasConsent) {
    return null;
  }

  return <GoogleTagManager />;
}
*/