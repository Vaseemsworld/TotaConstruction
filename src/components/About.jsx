import React from "react";
import classNames from "classnames";
import styles from "./About.module.css";
import TitleSection from "./TitleSection";
import Records from "./Records";
import Team from "./Team";
import AnimationOnScroll from "./Animation";

const About = () => {
  AnimationOnScroll();
  return (
    <>
      <div className={styles.about}>
        <TitleSection
          title={"About"}
          description={"Experienced In The Industry For Over 33 Years"}
        />
        <hr className={styles.divider} />
        <section className={classNames(styles.section, styles.introSection)}>
          <div className={styles.container}>
            <div className={`${styles.introImg} slideRight animateOnScroll`}>
              <img
                src="https://ik.imagekit.io/hyrppbheqc/images/massive-jcb.avif"
                alt="image"
              />
            </div>
            <div
              className={`${styles.contentContainer} slideLeft animateOnScroll`}
            >
              <div className={styles.content}>
                <div className={styles.sectionTitle}>
                  <h6 className={styles.sectionTitleText}>OUR INTRODUCTION</h6>
                </div>
                <div className={styles.sectionheading}>
                  <h2 className={styles.sectionHeadingText}>
                    WE'RE READY TO SHARE OUR EXPERIENCE
                  </h2>
                </div>
                <div className={styles.description}>
                  <p className={styles.descriptiontext}>
                    Our construction company specializes in providing
                    high-quality building materials such as bricks, cement,
                    gravel, and soil. We offer services including excavator,
                    JCB, and tractor rentals, and handle real estate projects,
                    road construction, and city cleaning in partnership with
                    UIT. With a focus on reliability, we build infrastructure
                    that lasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className={styles.divider} />
        <Records />
        <hr className={styles.divider} />
        <section className={classNames(styles.section, styles.ownerSection)}>
          <div className={styles.ownerSectionContent}>
            <div className={`${styles.container} zoomIn animateOnScroll`}>
              <div className={styles.heading}>
                <h2 className={styles.headingText}>LOCALLY OWNED & OPERATED</h2>
              </div>
              <div className={styles.description}>
                <p className={styles.descriptionText}>
                  We are a local construction company dedicated to quality and
                  community. Our personalized approach ensures your project
                  receives exceptional care and attention. Supporting us means
                  supporting your neighbors.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.feedback}>
              <div className={styles.content}>
                <div className={styles.sectionTitle}>
                  <h6 className={styles.sectionTitleText}>
                    WHAT PEOPLE ARE SAYING
                  </h6>
                </div>
                <div className={styles.sectionHeading}>
                  <h2 className={styles.sectionHeadingText}>
                    WE BUILD LASTING RELATIONSHIPS
                  </h2>
                </div>
              </div>
              <div className={styles.feedbackColumns}>
                <div
                  className={`${styles.feedbackColumn} slideRight animateOnScroll`}
                >
                  <div className={styles.personImg}>
                    <img
                      src="https://ik.imagekit.io/hyrppbheqc/images/feedbackperson1.webp"
                      alt="image"
                    />
                  </div>
                  <div className={styles.feedbackData}>
                    <p className={styles.feedbackDataText}>
                      "Outstanding performance by the workers, using high-grade
                      materials. The project was completed on time with
                      remarkable attention to detail."
                    </p>
                  </div>
                  <div className={styles.personInfo}>
                    <div className={styles.name}>
                      <h6 className={styles.nameText}>
                        PRIYA RATHOD (Advocate)
                      </h6>
                    </div>
                    <div className={styles.service}>
                      <h6 className={styles.serviceText}>Building Materials</h6>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.feedbackColumn} slideRight animateOnScroll`}
                >
                  <div className={styles.personImg}>
                    <img
                      src="https://ik.imagekit.io/hyrppbheqc/images/feedbackperson2.webp"
                      alt="image"
                    />
                  </div>
                  <div className={styles.feedbackData}>
                    <p className={styles.feedbackDataText}>
                      "Exceptional quality of materials and workmanship. The
                      team worked efficiently and finished the job on time.
                      Highly recommended for construction projects."
                    </p>
                  </div>
                  <div className={styles.personInfo}>
                    <div className={styles.name}>
                      <h6 className={styles.nameText}>LOKESH PRAJAPAT</h6>
                    </div>
                    <div className={styles.service}>
                      <h6 className={styles.serviceText}>Road Construction</h6>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.feedbackColumn} slideRight animateOnScroll`}
                >
                  <div className={styles.personImg}>
                    <img
                      src="https://ik.imagekit.io/hyrppbheqc/images/feedbackperson3.webp"
                      alt="image"
                    />
                  </div>
                  <div className={styles.feedbackData}>
                    <p className={styles.feedbackDataText}>
                      "Excellent excavation work! The operators were experienced
                      and completed the job efficiently, leaving the site
                      prepared perfectly. Highly satisfied with their service."
                    </p>
                  </div>
                  <div className={styles.personInfo}>
                    <div className={styles.name}>
                      <h6 className={styles.nameText}>JAVED HUSSAIN</h6>
                    </div>
                    <div className={styles.service}>
                      <h6 className={styles.serviceText}>Excavator Work</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className={styles.divider} />
        <Team />
        <hr className={styles.divider} />
      </div>
    </>
  );
};

export default About;
