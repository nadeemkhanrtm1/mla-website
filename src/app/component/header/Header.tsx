"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News & Updates", href: "/news" },
  { label: "Interviews & Articles", href: "/interviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MobileNavItem = ({
    link,
  }: {
    link: { label: string; href: string };
  }) => {
    return (
      <Link
        href={link.href}
        className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logoSection}>
            <div className={styles.logoCircle}>
              <span className={styles.logoM}>M</span>
            </div>
            <span className={styles.logoText}>MLA Office</span>
          </div>
          <nav className={styles.nav}>
            <Link href="/" className={isActive("/") ? styles.activeNav : ""}>
              Home
            </Link>
            <Link
              href="/about"
              className={isActive("/about") ? styles.activeNav : ""}
            >
              About
            </Link>
            <Link
              href="/news"
              className={isActive("/news") ? styles.activeNav : ""}
            >
              News & Updates
            </Link>
            <Link
              href="/interviews"
              className={isActive("/interviews") ? styles.activeNav : ""}
            >
              Interviews & Articles
            </Link>
            <Link
              href="/gallery"
              className={isActive("/gallery") ? styles.activeNav : ""}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={isActive("/contact") ? styles.activeNav : ""}
            >
              Contact Us
            </Link>
          </nav>
          <button className={styles.joinBtn}>Join Now</button>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="lg:hidden py-4 border-t border-border animate-fade-in-up"
          style={{
            position: "sticky",
            top: "68px",
            zIndex: 1000000,
            background: "white",
          }}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <MobileNavItem key={link.href} link={link} />
            ))}
            <Button className="mt-4" size="lg">
              Join Now
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
