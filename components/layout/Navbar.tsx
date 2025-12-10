"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="pt-8">
      <nav className="pill-nav flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.45em] text-[color:var(--text-muted)]"
        >
          Emily&nbsp;Vu
        </Link>
        <div className="nav-links flex-1 items-center justify-center">
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
