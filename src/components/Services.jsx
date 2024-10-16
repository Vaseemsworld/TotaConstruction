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
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/craftsmanship.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>BUILDING MATERIALS SUPPLY</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We provide high-quality building materials, including
                    bricks, cement, gravel, and soil, ensuring your construction
                    projects are built with durable and reliable supplies.
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/real-estate.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>REAL STATE</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We specialize in buying and selling plots in prime
                    locations, offering tailored solutions for residential and
                    commercial development. Our dedicated team ensures a
                    seamless experience, guiding clients through every step of
                    the process for successful investments.
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/uit-work.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>UIT WORKS</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We collaborate with the Urban Improvement Trust (UIT) to
                    execute public infrastructure projects, including building
                    and maintaining roads, city cleaning, and drainage systems.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.serviceColumns}>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/excavation-work.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>EXCAVATION SERVICES</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    Our excavation services include site preparation, land
                    clearing, and earth-moving using advanced equipment like
                    Tractors and JCBs, ensuring your project starts with a solid
                    foundation.
                  </div>
                </div>
              </div>
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/jcb-road-construction.webp"
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
              <div className={styles.serviceColumn}>
                <div className={styles.columnImg}>
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/jcb-tractor.webp"
                    alt="image"
                  />
                </div>
                <div className={styles.columnData}>
                  <div className={styles.columnHeading}>
                    <h2>MACHINERY RENTALS</h2>
                  </div>
                  <div className={styles.columnDescription}>
                    We offer a range of heavy machinery for rent, including
                    water tanks, JCBs, and tractors, to support various
                    construction, excavation, and earth-moving projects,
                    ensuring reliable performance and efficiency on-site.
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
