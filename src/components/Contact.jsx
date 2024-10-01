import React from "react";
import styles from "./Contact.module.css";
import classNames from "classnames";
import TitleSection from "./TitleSection";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <TitleSection
          title={"CONTACT"}
          description={"Got a question or concern? Let's get in touch."}
        />
        <section className={styles.contactSection1}>
          <div className={styles.container}>
            <div className={styles.contactInfo}>
              <div className={styles.heading}>
                <h2 className={styles.headingText}>CONTACT US</h2>
              </div>
              <div className={styles.description}>
                <p>
                  Get in touch with our team for inquiries, quotes, or support.
                  Use the contact form, call us, or visit our office. Find us on
                  Google Maps for directions and connect with us through social
                  media for updates and additional information.
                </p>
              </div>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d862.3462197986265!2d76.64168476956137!3d27.566049387376587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729757c6b44cab%3A0x7eb54d913c5adc!2sTota%20Construction%20Company!5e1!3m2!1sen!2sin!4v1726386631656!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contactSection2}>
          <div className={styles.container}>
            <div
              className={classNames(
                styles.contactDetails,
                styles.section2Column
              )}
            >
              <div className={styles.heading}>
                <h2>CONTACT INFO</h2>
              </div>
              <div className={classNames(styles.phoneColumn, styles.column)}>
                <div className={styles.columnContent}>
                  <i className={styles.icon}>
                    <FaPhone />
                  </i>
                  <span className={styles.phoneNumber}>+91 9214149999</span>
                </div>
              </div>
              <div className={classNames(styles.emailColumn, styles.column)}>
                <div className={styles.columnContent}>
                  <i className={styles.icon}>
                    <FaMessage />
                  </i>
                  <span className={styles.email}>
                    TOTACONSTRUCTION@GMAIL.COM
                  </span>
                </div>
              </div>
              <div className={classNames(styles.addressColumn, styles.column)}>
                <div className={styles.columnContent}>
                  <i className={styles.icon}>
                    <FaLocationDot />
                  </i>
                  <span className={styles.address}>
                    NEAR NAMAN HOTEL, 200FT ROAD, ALWAR, RAJ. (301001)
                  </span>
                </div>
              </div>
            </div>
            <div
              className={classNames(styles.contactForm, styles.section2Column)}
            >
              <div className={styles.form}>
                <div className={styles.formHeading}>
                  <h2>Get In Touch</h2>
                </div>
                <form action="#" method="POST">
                  <div className={styles.group}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name*"
                      className={styles.input}
                      required
                    />
                    <div className={styles.error}></div>
                  </div>
                  <div className={styles.group}>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone*"
                      className={styles.input}
                      required
                    />
                    <div className={styles.error}></div>
                  </div>
                  <div className={styles.group}>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.group}>
                    <textarea
                      placeholder="Message"
                      className={styles.messageArea}
                    ></textarea>
                    <div className={styles.error}></div>
                  </div>
                  <div className={styles.button}>
                    <button type="submit" className={styles.btn}>
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
