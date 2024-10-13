import React from "react";
import styles from "./Projects.module.css";
import TitleSection from "./TitleSection";

const Projects = () => {
  return (
    <>
      <TitleSection
        title={"Projects"}
        description={
          "Delivering Safe and Quality Projects with Precision and Excellence"
        }
      />
      <div className={styles.projects}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeadings}>
              <div className={styles.sectionTitle}>
                <h6 className={styles.sectionTitleText}>
                  Explore Our Projects
                </h6>
              </div>
              <div className={styles.sectionheading}>
                <h2 className={styles.sectionHeadingText}>RECENT PROJECTS</h2>
              </div>
            </div>
            <div className={styles.projectColumns}>
              <div
                className={`${styles.projectColumn} animateOnScroll fadeInUp`}
              >
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/real-estate-project.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>REAL ESTATE</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We recently completed a successful project involving the
                    sale of a prime plot. This transaction not only showcases
                    our expertise in the real estate market but also highlights
                    our commitment to connecting buyers with valuable investment
                    opportunities in sought-after locations.
                  </div>
                </div>
              </div>
              <div
                className={`${styles.projectColumn} animateOnScroll fadeInUp`}
              >
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/demolition-work.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>HOUSE DEMOLITION</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Our expert team specializes in safe and efficient house
                    demolition, ensuring minimal disruption to surrounding
                    areas. We utilize advanced equipment and techniques to
                    handle each project with precision, adhering to all safety
                    regulations. Whether it's clearing the way for new
                    construction or renovation, we provide comprehensive
                    services, managing every aspect from planning to site
                    cleanup.
                  </div>
                </div>
              </div>
              <div
                className={`${styles.projectColumn} animateOnScroll fadeInUp`}
              >
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/excavation-work.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>EXCAVATION PROJECTS</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We recently completed a major excavation project, preparing
                    the site for a new development. Our team utilized advanced
                    machinery and techniques to ensure precise digging while
                    prioritizing safety and efficiency. This project exemplifies
                    our capability to handle complex excavation tasks, paving
                    the way for future construction.
                  </div>
                </div>
              </div>
              <div
                className={`${styles.projectColumn} animateOnScroll fadeInUp`}
              >
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/road-construction.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>Road Construction</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We successfully finished a road construction project that
                    enhances accessibility and connectivity in the area. Our
                    team employed modern techniques and durable materials to
                    ensure a high-quality roadway. This project not only
                    improves transportation but also supports local development
                    and community growth.
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

export default Projects;
