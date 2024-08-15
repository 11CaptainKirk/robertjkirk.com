"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  className?: string;
}

const BackButton = ({ href, className }: BackButtonProps) => {
  const backName = href.split("/")[href.split("/").length - 1];
  const backNameCapitalized =
    backName.charAt(0).toUpperCase() + backName.slice(1);

  return (
    <Link
      href={href}
      passHref
      className="flex gap-2 items-center text-base hover:gap-4 hover:-ml-4 -ml-2 transition-all hover:bg-black/10 dark:hover:bg-white/10 px-2 py-1 rounded-md"
    >
      <ArrowLeft size={18} />
      <p>{backNameCapitalized}</p>
    </Link>
  );
};

export default BackButton;
