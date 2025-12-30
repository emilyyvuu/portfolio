"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="pt-8">
      <nav className="pill-nav flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
        <Link
          href="/#home"
          className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-[color:var(--text-muted)] sm:text-xs sm:tracking-[0.45em]"
        >
          Emily&nbsp;Vu
        </Link>
        <div className="nav-links w-full items-center justify-center sm:w-auto sm:flex-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
