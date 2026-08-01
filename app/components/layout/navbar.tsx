"use client";

import { useState } from "react";

import { navLinks, SECTION } from "@/app/data/navigation";
import { profile } from "@/app/data/profile";
import { cn } from "@/app/lib/cn";

/**
 * Navegación principal. Se mantiene fija en la parte superior y colapsa en un
 * menú desplegable en pantallas pequeñas.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20"
      >
        <a
          href={`#${SECTION.hero}`}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-white"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm text-zinc-400 transition hover:text-fuchsia-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/5 md:hidden"
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      <ul
        id="mobile-menu"
        className={cn(
          "flex-col gap-1 border-t border-white/10 bg-black/95 px-6 pb-4 md:hidden",
          isMenuOpen ? "flex" : "hidden",
        )}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={closeMenu}
              className="block py-2 text-sm text-zinc-300 transition hover:text-fuchsia-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
