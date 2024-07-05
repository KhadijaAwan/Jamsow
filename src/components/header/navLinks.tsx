"use client";
import Link from "next/link";
import { fontMedium } from "../styles";
import { HeaderLinkProps } from "../types";
import { HeaderLinks } from "@/utils/header_Links";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      {HeaderLinks.map((headerLink: HeaderLinkProps) => (
        <Link
          key={headerLink.href}
          href={headerLink.href}
          className={`${fontMedium.className} ${
            headerLink.href === path ? "text-blue-700 md:text-white" : "text-gray-900 md:text-gray-300"
          } md:mr-5 hover:text-black md:hover:text-purple-300 text-sm`}
        >
          {headerLink.title}
        </Link>
      ))}
    </>
  );
}
