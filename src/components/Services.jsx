import React from "react";
import styles from "./Services.module.css";
import TitleSection from "./TitleSection";
const Services = () => {
  return (
    <>
      <div className={styles.services}>
        <TitleSection
          title={"Services"}
          description={"Provide Safe & Quality Services"}
        />
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeadings}>
              <div className={styles.sectionTitle}>
                <h6 className={styles.sectionTitleText}>OUR SERVICES</h6>
              </div>
              <div className={styles.sectionheading}>
                <h2 className={styles.sectionHeadingText}>WHAT WE OFFER</h2>
              </div>
            </div>
            <div className={styles.serviceColumns}>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img src="images/road-construction.avif" alt="image.avif" />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>GENERAL CONTRACTING</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    dolorum eos suscipit. Quos, explicabo
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img src="images/road-construction.avif" alt="image.avif" />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>REAL STATE</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    dolorum eos suscipit. Quos, explicabo
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img src="images/road-construction.avif" alt="image.avif" />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>UIT WORKS</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit nihil dolorum non nulla modi autem.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.serviceColumns}>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img src="images/road-construction.avif" alt="image.avif" />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>GENERAL CONTRACTING</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    dolorum eos suscipit. Quos, explicabo
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img src="images/road-construction.avif" alt="image.avif" />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>REAL STATE</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    dolorum eos suscipit. Quos, explicabo
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img src="images/road-construction.avif" alt="image.avif" />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>UIT WORKS</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Suscipit nihil dolorum non nulla modi autem.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
