import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
    className?: string
}

export default function GEOTrackerInstallBtn({className}: Props) {
  return (
    <a href="#geo-tracker-install-section" className={`bg-custom-red text-white font-semibold rounded-lg flex items-center justify-between cursor-pointer ${className}`}>
      GEO Tracker installieren
      <FiArrowRight />
    </a>
  );
}
