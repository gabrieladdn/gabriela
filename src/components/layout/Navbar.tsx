"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const navLinks = [
  { href: "/#home", label: "Home", section: "home" },
  { href: "/#sobre", label: "Sobre Mim", section: "sobre" },
  { href: "/#psicanalise", label: "Psicanálise", section: "psicanalise" },
  { href: "/#atendimento", label: "Atendimento Online", section: "atendimento" },
  { href: "/blog", label: "Artigos", section: null },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver — only on home
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const isLinkActive = (link: (typeof navLinks)[0]) => {
    if (link.section === "sobre")
      return pathname === "/sobre-mim" || (pathname === "/" && activeSection === "sobre");
    if (link.href === "/blog") return pathname.startsWith("/blog");
    return pathname === "/" && activeSection === link.section;
  };

  const getHref = (link: (typeof navLinks)[0]) => {
    if (link.section === "sobre") {
      return pathname === "/" ? "/#sobre" : "/sobre-mim/";
    }

    return link.href;
  };

  return (
    <header className={scrolled ? "navbar-shell navbar-shell-scrolled" : "navbar-shell"}>
      <nav className="container navbar-inner">
        <Link href="/" className="navbar-brand" aria-label="Gabriela Nunes">
          <Image
            className="navbar-brand-logo"
            src="/logo.png"
            alt="Gabriela Nunes"
            width={280}
            height={38}
            priority
            sizes="(max-width: 768px) 52vw, 280px"
          />
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <Link
                key={link.href}
                href={getHref(link)}
                className={active ? "navbar-link navbar-link-active" : "navbar-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="navbar-cta">
          Agendar Consulta
        </a>

        <button
          className="mobile-burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={
              mobileOpen
                ? "burger-line burger-line-top burger-line-top-open"
                : "burger-line burger-line-top"
            }
          />
          <span
            className={
              mobileOpen
                ? "burger-line burger-line-middle burger-line-middle-open"
                : "burger-line burger-line-middle"
            }
          />
          <span
            className={
              mobileOpen
                ? "burger-line burger-line-bottom burger-line-bottom-open"
                : "burger-line burger-line-bottom"
            }
          />
        </button>
      </nav>

      <div className={mobileOpen ? "navbar-drawer navbar-drawer-open" : "navbar-drawer"}>
        <div className="navbar-drawer-inner">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getHref(link)}
              onClick={() => setMobileOpen(false)}
              className="navbar-drawer-link"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="navbar-drawer-cta"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      <style>{`
        .navbar-shell {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,248,244,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: box-shadow 0.3s;
        }

        .navbar-shell-scrolled {
          box-shadow: 0 1px 0 rgba(199,199,191,0.6);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }

        .navbar-brand-logo {
          display: block;
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .navbar-link {
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          color: var(--color-on-surface-variant);
          transition: color 0.2s, border-color 0.2s;
        }

        .navbar-link-active {
          color: var(--color-secondary);
          border-bottom-color: var(--color-secondary);
        }

        .navbar-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          border-radius: 9999px;
          background: var(--color-secondary);
          box-shadow: 0 4px 16px rgba(143,75,66,0.25);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          color: #fff;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .navbar-cta:hover {
          transform: scale(1.04);
          box-shadow: 0 6px 24px rgba(143,75,66,0.35);
        }

        .mobile-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          border: none;
          background: none;
          cursor: pointer;
        }

        .burger-line {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          background: var(--color-on-surface);
          transition: transform 0.3s, opacity 0.3s;
        }

        .burger-line-top-open {
          transform: translateY(7px) rotate(45deg);
        }

        .burger-line-middle-open {
          transform: scaleX(0);
          opacity: 0;
        }

        .burger-line-bottom-open {
          transform: translateY(-7px) rotate(-45deg);
        }

        .navbar-drawer {
          max-height: 0;
          overflow: hidden;
          background: rgba(255,248,244,0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-top 0.2s;
        }

        .navbar-drawer-open {
          max-height: 400px;
          border-top: 1px solid var(--color-outline-variant);
        }

        .navbar-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px var(--margin-mobile) 24px;
        }

        .navbar-drawer-link {
          padding: 12px 8px;
          border-bottom: 1px solid var(--color-outline-variant);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-on-surface-variant);
        }

        .navbar-drawer-cta {
          margin-top: 16px;
          padding: 14px 24px;
          border-radius: 9999px;
          background: var(--color-secondary);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-align: center;
          text-transform: uppercase;
          color: #fff;
        }

        @media (max-width: 900px) {
          .navbar-brand-logo {
            height: 30px;
            width: auto;
          }

          .desktop-nav { display: none !important; }
          .navbar-cta { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
