"use client";
import * as React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavbarLinks from "./navbar-links";

export default function Navbar() {
  const [visible, setVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experiences" },
    { title: "Showcase", href: "#showcase" },
    { title: "Contact", href: "#contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="w-[50px] h-[30px]" />;
  }

  const logoSrc =
    theme === "dark"
      ? "/logo/android-chrome-192x192-dark.png"
      : "/logo/android-chrome-192x192.png";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full border-b bg-background z-50 transition-transform duration-300 px-5 md:px-15 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <a
          href="#"
          className="flex items center w-[60px] h-[60px] transition-transform hover:scale-105"
        >
          <Image
            src={logoSrc}
            alt="Logo"
            width={50}
            height={30}
            className=" object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item, i) => (
            <NavbarLinks
              key={i}
              href={item.href}
              title={item.title}
              className="text-foreground hover:text-primary text-xs transition-colors"
            />
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded hover:bg-accent">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="flex flex-col space-y-4 p-6">
            <SheetTitle>Menu</SheetTitle>
            {menuItems.map((item, i) => (
              <NavbarLinks
                key={i}
                href={item.href}
                title={item.title}
                className="text-md font-medium text-foreground hover:text-primary"
                style={{ transitionDelay: `${i * 75}ms` }}
              />
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
