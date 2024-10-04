import React, { useEffect, useRef, useState } from "react";
import styles from "./Records.module.css";
import classNames from "classnames";

const Records = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Function to animate numbers
  const animateNumbers = (start, end, duration, element) => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          animateNumbers(
            0,
            1202,
            5000,
            document.getElementById("projects-completed")
          );
          animateNumbers(0, 33, 5000, document.getElementById("working-years"));
          animateNumbers(
            0,
            760,
            5000,
            document.getElementById("happy-clients")
          );
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      className={classNames(styles.section, styles.recordSection)}
    >
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
                <img
                  src="https://ik.imagekit.io/hyrppbheqc/images/counter-icon-1.png"
                  alt="icon1.png"
                />
              </div>
            </div>
            <div className={styles.boxItem2}>
              <span id="projects-completed" className={styles.item2Text}>
                1202
              </span>
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
                <img
                  src="https://ik.imagekit.io/hyrppbheqc/images/counter-icon-2.png"
                  alt="icon2.png"
                />
              </div>
            </div>
            <div className={styles.boxItem2}>
              <span id="working-years" className={styles.item2Text}>
                33
              </span>
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
                <img
                  src="https://ik.imagekit.io/hyrppbheqc/images/counter-icon-3.png"
                  alt="icon3.png"
                />
              </div>
            </div>
            <div className={styles.boxItem2}>
              <span id="happy-clients" className={styles.item2Text}>
                760
              </span>
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
  );
};

export default Records;
