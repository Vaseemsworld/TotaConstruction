import React from "react";
import styles from "./TitleSection.module.css";
import AnimationOnScroll from "./Animation";
const TitleSection = ({ title, description }) => {
  AnimationOnScroll();
  return (
    <>
      <section className={styles.titleSection}>
        <div className={styles.container}>
          <div className={`${styles.contentContainer} animateOnScroll zoomIn`}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1 className={styles.titleText}>{title}</h1>
              </div>
              <div className={styles.description}>
                <h5 className={styles.descriptionText}>{description}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
