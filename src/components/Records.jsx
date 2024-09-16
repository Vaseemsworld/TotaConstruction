import React from "react";
import styles from "./Records.module.css";
import classNames from "classnames";

const Records = () => {
  return (
    <>
      <section className={classNames(styles.section, styles.recordSection)}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.box}>
              <div className={styles.box1Content}>
                <h2 className={styles.boxHeading}>
                  NUMBERS SPEAK FOR EVERYTHING
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.box}>
              <div className={styles.boxItem1}>
                <div className={styles.boxImage}>
                  <img src="images/counter-icon-1.png" alt="icon1.png" />
                </div>
              </div>
              <div className={styles.boxItem2}>
                <span className={styles.item2Text}>2400</span>
              </div>
              <div className={styles.boxItem3}>
                <div className={styles.item3Inner}>
                  <h6 className={styles.item3InnerText}>PROJECTS COMPLETED</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.box}>
              <div className={styles.boxItem1}>
                <div className={styles.boxImage}>
                  <img src="images/counter-icon-2.png" alt="icon2.png" />
                </div>
              </div>
              <div className={styles.boxItem2}>
                <span className={styles.item2Text}>50</span>
              </div>
              <div className={styles.boxItem3}>
                <div className={styles.item3Inner}>
                  <h6 className={styles.item3InnerText}>WORKING YEARS</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.box}>
              <div className={styles.boxItem1}>
                <div className={styles.boxImage}>
                  <img src="images/counter-icon-3.png" alt="icon3.png" />
                </div>
              </div>
              <div className={styles.boxItem2}>
                <span className={styles.item2Text}>5500</span>
              </div>
              <div className={styles.boxItem3}>
                <div className={styles.item3Inner}>
                  <h6 className={styles.item3InnerText}>HAPPY CLIENTS</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Records;
