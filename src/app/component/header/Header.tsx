import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
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
          <Link href="/" className={styles.activeNav}>Home</Link>
          <Link href="/about">About</Link>
          <Link href="/news">News</Link>
          <Link href="/interviews">Interviews & Articles</Link>
          <Link href="/team">Team Members</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <button className={styles.joinBtn}>Join Now</button>
      </div>
    </header>
  );
};

export default Header;
