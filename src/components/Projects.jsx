import React from "react";
import styles from "./Projects.module.css";
import TitleSection from "./TitleSection";
import AnimationOnScroll from "./Animation";
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
                    We provide high-quality building materials, including
                    bricks, cement, gravel, and soil, ensuring your construction
                    projects are built with durable and reliable supplies.
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
                    We facilitate the purchase and sale of residential and
                    commercial plots, ensuring a seamless process and prime
                    locations for development.
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
                    Our excavation services include site preparation, land
                    clearing, and earth-moving using advanced equipment like
                    Tractors and JCBs, ensuring your project starts with a solid
                    foundation.
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
                    We specialize in constructing durable and well-planned
                    roads, working with the latest equipment to build and
                    maintain roads for residential, commercial, and public
                    infrastructure projects, ensuring long-lasting quality.
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
