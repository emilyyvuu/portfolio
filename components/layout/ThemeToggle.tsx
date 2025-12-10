"use client";

import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      aria-label="Toggle color theme"
      className="theme-toggle"
    >
      <span className="sr-only">Toggle color theme</span>
      {mounted ? (
        theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
