"use client";

import Link from "next/link";
import Letter3DSwap from "@/components/fancy/text/letter-3d-swap";

interface NavbarLinksProps {
  href: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function NavbarLinks({
  href,
  title,
  className,
  style,
}: NavbarLinksProps) {
  return (
    <Link
      href={href}
      scroll={true}
      className={`${className} cursor-pointer flex gap-1 group text-sm`}
      style={style}
    >
      <Letter3DSwap
        as="span"
        rotateDirection="top"
        staggerDuration={0.03}
        staggerFrom="first"
        mainClassName="text-gray-800 group-hover:text-lime-600 dark:text-gray-200 dark:group-hover:text-lime-400 transition-colors duration-200"
        transition={{ type: "spring", damping: 25, stiffness: 160 }}
      >
        {title}
      </Letter3DSwap>
    </Link>
  );
}
