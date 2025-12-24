import React from "react";
import styles from "./HeroSection.module.css";

const imgVector = "https://www.figma.com/api/mcp/asset/7f32e613-4226-4875-a914-59895559b415";
const imgWeuiArrowOutlined = "https://www.figma.com/api/mcp/asset/f06ee738-65ae-47ea-b14f-dfa7b1dc087c";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgOrange}></div>
      <div className={styles.vectorImg}>
        <img src={imgVector} alt="" />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.badge}>Rising for the nation</div>
        <h1 className={styles.heading}>
          Committed to Service. Dedicated to Pursurah.
        </h1>
        <p className={styles.subheading}>
          A strong voice for development, accountability, and people-centric governance. Working relentlessly to build a progressive, secure, and empowered Pursurah.
        </p>
        <button className={styles.knowMoreBtn}>
          <span>Know More</span>
          <img src={imgWeuiArrowOutlined} alt="arrow" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
