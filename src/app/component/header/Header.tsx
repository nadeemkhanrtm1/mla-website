"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoSection}>
          <div className={styles.logoCircle}>
            <span className={styles.logoM}>M</span>
          </div>
          <span className={styles.logoText}>MLA Office</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={isActive("/") ? styles.activeNav : ""}>Home</Link>
          <Link href="/about" className={isActive("/about") ? styles.activeNav : ""}>About</Link>
          <Link href="/news" className={isActive("/news") ? styles.activeNav : ""}>News & Updates</Link>
          <Link href="/interviews" className={isActive("/interviews") ? styles.activeNav : ""}>Interviews & Articles</Link>
          <Link href="/gallery" className={isActive("/gallery") ? styles.activeNav : ""}>Gallery</Link>
          <Link href="/contact" className={isActive("/contact") ? styles.activeNav : ""}>Contact Us</Link>
        </nav>
        <button className={styles.joinBtn}>Join Now</button>
      </div>
    </header>
  );
};

export default Header;
