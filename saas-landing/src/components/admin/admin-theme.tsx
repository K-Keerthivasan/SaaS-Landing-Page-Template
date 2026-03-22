"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export type AppTheme = "light" | "dark";

type AppThemeContextValue = {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
};

const STORAGE_KEY = "k2-theme";
const AppThemeContext = createContext<AppThemeContextValue | null>(null);

function getPreferredTheme(): AppTheme {
  if (typeof window !== "undefined") {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }

  return "light";
}

function applyTheme(theme: AppTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<AppTheme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return <AppThemeContext value={{ theme, setTheme }}>{children}</AppThemeContext>;
}

export function useAppTheme() {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within an AppThemeProvider");
  }

  return context;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useAppTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="outline"
      className={`h-10 rounded-2xl border-slate-200/70 bg-white/70 px-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 ${className}`.trim()}
      onClick={() => setTheme(nextTheme)}
    >
      Theme
    </Button>
  );
}

export function HomeBackButton() {
  return (
    <Button
      asChild
      variant="ghost"
      className="h-10 rounded-2xl px-4 text-slate-700 dark:text-slate-100 dark:hover:bg-white/10"
    >
      <Link href="/">Back to home</Link>
    </Button>
  );
}
