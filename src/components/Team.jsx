import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import classNames from "classnames";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <section className={classNames(styles.section, styles.teamSection)}>
      <div className={styles.container}>
        <div className={styles.teamContainer}>
          <div className={styles.teamContent}>
            <div className={styles.sectiontitle}>
              <h6 className={styles.sectionTitleText}>MEET THE TEAM</h6>
            </div>
            <div className={styles.sectionHeading}>
              <h2 className={styles.sectionHeadingText}>EXPERT MEMBERS</h2>
            </div>
          </div>
          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <div className={styles.memberImg}>
                <img src="images/founder.jpg" alt="liyakatkhan.jpg" />
              </div>
              <div className={styles.memberContent}>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>
                    <span>Liyakat Khan</span>
                  </h4>
                  <h5 className={styles.memberJobTitle}>
                    <span>FOUNDER & CEO</span>
                  </h5>
                </div>
                <div className={styles.memberSocial}>
                  <div className={classNames(styles.icon, styles.facebook)}>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </div>
                  <div className={classNames(styles.icon, styles.instagram)}>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.member}>
              <div className={styles.memberImg}>
                <img src="images/founder.jpg" alt="liyakatkhan.jpg" />
              </div>
              <div className={styles.memberContent}>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>
                    <span>Liyakat Khan</span>
                  </h4>
                  <h5 className={styles.memberJobTitle}>
                    <span>FOUNDER & CEO</span>
                  </h5>
                </div>
                <div className={styles.memberSocial}>
                  <div className={classNames(styles.icon, styles.facebook)}>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </div>
                  <div className={classNames(styles.icon, styles.instagram)}>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
