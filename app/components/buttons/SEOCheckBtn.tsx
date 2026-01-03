import React from "react";
import LinkSeoCheck from "../LinkSeoCheck";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  className?: string;
};

export default function SEOCheckBtn({ className }: Props) {
  return (
    <button
      className={`px-8 py-4 bg-custom-red text-xl text-white rounded-xl w-full flex items-center justify-between ${className}`}
    >
      <LinkSeoCheck />
      <FiArrowRight color="white" />
    </button>
  );
}
