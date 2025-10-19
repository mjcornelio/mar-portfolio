"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed right-5 bottom-5 z-50 rounded-full border cursor-pointer transition-colors bg-slate-800 text-gray-100 border-gray-100 hover:bg-slate-700 hover:text-white dark:bg-gray-100 dark:text-slate-800 dark:border-slate-800 dark:hover:bg-gray-200 dark:hover:text-black"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-5 w-5 hidden dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
