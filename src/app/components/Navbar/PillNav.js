"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import "./PillNav.css";

const PillNav = ({
  logo,
  logoText = "DM",
  logoAlt = "Logo",
  items = [],
  activeHref,
  className = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isExternalLink = (href) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href) => href && !isExternalLink(href);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const renderLink = (item, classNameValue) => {
    const itemClassName = `${classNameValue}${activeHref === item.href ? " is-active" : ""}`;

    if (isRouterLink(item.href)) {
      return (
        <Link
          href={item.href}
          className={itemClassName}
          aria-label={item.ariaLabel || item.label}
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        className={itemClassName}
        aria-label={item.ariaLabel || item.label}
        onClick={closeMenu}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="glass-nav-shell">
      <nav className={`glass-nav ${className}`} aria-label="Primary">
        <a className="glass-brand" href="#home" aria-label="Home">
          <span className="glass-brand-mark">
            {logo ? <img src={logo} alt={logoAlt} /> : logoText}
          </span>
          <span className="glass-brand-copy">
            <span className="glass-brand-name">Debashis Mitra</span>
            <span className="glass-brand-role">Backend Engineer</span>
          </span>
        </a>

        <ul className="glass-nav-list" role="list">
          {items.map((item) => (
            <li key={item.href || item.label}>{renderLink(item, "glass-nav-link")}</li>
          ))}
        </ul>

        <button
          className="glass-menu-button"
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      <div className={`glass-mobile-panel${isMobileMenuOpen ? " is-open" : ""}`}>
        <ul className="glass-mobile-list" role="list">
          {items.map((item) => (
            <li key={item.href || item.label}>
              {renderLink(item, "glass-mobile-link")}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default PillNav;
