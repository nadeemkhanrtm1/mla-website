"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.header.home, href: "/" },
    { label: t.header.about, href: "/about" },
    { label: t.header.news, href: "/news" },
    { label: t.header.interviews, href: "/interviews" },
    { label: t.header.gallery, href: "/gallery" },
    { label: t.header.contact, href: "/contact" },
  ];

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
          <Link href="/" className="cursor-pointer">
            <div className={styles.logoSection}>
              <div className={styles.logoCircle}>
                <span className={styles.logoM}>
                  <Image src="/logo.svg" alt="Logo" width={50} height={50} unoptimized />
                </span>
              </div>
              <span className={styles.logoText}>{t.header.mlaOffice}</span>
            </div>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={isActive("/") ? styles.activeNav : ""}>
              {t.header.home}
            </Link>
            <Link
              href="/about"
              className={isActive("/about") ? styles.activeNav : ""}
            >
              {t.header.about}
            </Link>
            <Link
              href="/news"
              className={isActive("/news") ? styles.activeNav : ""}
            >
              {t.header.news}
            </Link>
            <Link
              href="/interviews"
              className={isActive("/interviews") ? styles.activeNav : ""}
            >
              {t.header.interviews}
            </Link>
            <Link
              href="/gallery"
              className={isActive("/gallery") ? styles.activeNav : ""}
            >
              {t.header.gallery}
            </Link>
            <Link
              href="/contact"
              className={isActive("/contact") ? styles.activeNav : ""}
            >
              {t.header.contact}
            </Link>
          </nav>
          <button className={styles.joinBtn}>{t.header.joinNow}</button>

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
              {t.header.joinNow}
            </Button>
          </nav>
        </div>
      )}

      <LanguageSwitcher />
    </>
  );
};

export default Header;
