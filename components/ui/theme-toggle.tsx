"use client";

import { useState } from "react";
import { Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [theme, setActiveTheme] = useState("system");

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {theme === "dark" ? (
        <div
          onClick={() => {
            setTheme("light");
            setActiveTheme("light");
          }}
        >
          <Moon className="w-6 h-6" />
        </div>
      ) : theme === "light" ? (
        <div
          onClick={() => {
            setTheme("system");
            setActiveTheme("system");
          }}
        >
          <Sun className="w-6 h-6" />
        </div>
      ) : (
        <div
          onClick={() => {
            setTheme("dark");
            setActiveTheme("dark");
          }}
        >
          <Sparkles className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}
