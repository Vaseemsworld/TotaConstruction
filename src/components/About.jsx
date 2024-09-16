import React from "react";
import classNames from "classnames";
import styles from "./About.module.css";
import TitleSection from "./TitleSection";
import Records from "./Records";
import Team from "./Team";
const About = () => {
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
            <div className={styles.introImg}>
              <img src="/images/massive-jcb.avif" alt="intro.jpg" />
            </div>
            <div className={styles.contentContainer}>
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
                    We are a team of experienced professionals who have been
                    working in the construction industry for many years. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                    nostrum nemo sunt magni fugit molestias pariatur, nulla
                    maiores possimus quasi.
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
            <div className={styles.container}>
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
                <div className={styles.feedbackColumn}>
                  <div className={styles.personImg}>
                    <img src="/images/feedbackperson1.jpeg" alt="image.jpg" />
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
                <div className={styles.feedbackColumn}>
                  <div className={styles.personImg}>
                    <img src="/images/feedbackperson2.jpeg" alt="image.jpeg" />
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
                <div className={styles.feedbackColumn}>
                  <div className={styles.personImg}>
                    <img src="/images/feedbackperson3.jpeg" alt="image.jpeg" />
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
