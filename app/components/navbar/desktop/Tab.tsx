"use client"
import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
  t
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
  t:any
}) => {
  const router = useRouter();
  const hasLink = !!t.link;
  const handleClick = () => {
    if(hasLink) {
      router.push(t.link)
    }
  } 
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleClick()}
      className={`flex items-center gap-1 rounded p-4 transition-colors text-custom-black ${
        selected === tab
          ? "underline cursor-pointer"
          : ""
      } ${hasLink ? "!cursor-pointer" : ""}`}
    >
      {children}
      <FiChevronDown
        className={`transition-transform size-6 ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

export default Tab;