import React from "react";
import styles from "./Header.module.css";

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
          <a className={styles.activeNav} href="#">Home</a>
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">Interviews & Articles</a>
          <a href="#">Team Members</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </nav>
        <button className={styles.joinBtn}>Join Now</button>
      </div>
    </header>
  );
};

export default Header;
