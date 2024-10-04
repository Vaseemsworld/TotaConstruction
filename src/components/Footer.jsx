import React from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa6";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div className={styles.section} id="about">
          <div className={styles.logo}>
            <img
              src="https://ik.imagekit.io/hyrppbheqc/images/logo.png"
              alt="logo"
              className={styles.img}
            />
            <h1 className={styles.companyName}>TOTA CONSTRUCTION</h1>
          </div>
          <p className={styles.description}>
            Tota Construction is a leading construction company specializing in
            residential, commercial, and industrial projects. With a commitment
            to quality, safety, and innovation, we deliver exceptional results
            on time and within budget.
          </p>
          <div className={styles.icon}>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.section} id="links">
          <h2 className={styles.sectionTitle}>LINKS</h2>
          <p>
            <Link to="/" className={styles.footerLink}>
              Home
            </Link>
          </p>
          <p>
            <Link to="/services" className={styles.footerLink}>
              Our Services
            </Link>
          </p>
          <p>
            <Link to="/projects" className={styles.footerLink}>
              Projects
            </Link>
          </p>
          <p>
            <Link to="/about" className={styles.footerLink}>
              About
            </Link>
          </p>
          <p>
            <Link to="/contact" className={styles.footerLink}>
              Contact Us
            </Link>
          </p>
        </div>
        <div className={styles.section} id="services">
          <h2 className={styles.sectionTitle}>SERVICES</h2>
          <p>
            <Link to="contact" className={styles.footerLink}>
              Home Construction
            </Link>
          </p>
          <p>
            <Link to="contact" className={styles.footerLink}>
              Industrial Construction
            </Link>
          </p>
          <p>
            <Link to="contact" className={styles.footerLink}>
              Highway Construction
            </Link>
          </p>
          <p>
            <Link to="contact" className={styles.footerLink}>
              Excavator Works
            </Link>
          </p>
          <p>
            <Link to="contact" className={styles.footerLink}>
              Bricks & Gravel Delivery
            </Link>
          </p>
        </div>
        <div className={styles.section} id="contact-info">
          <h2 className={styles.sectionTitle}>CONTACT INFO</h2>
          <div className={styles.address}>
            <p className={styles.addressText}>
              <b>Add : </b>200 Ft Road, Near Naman Hotel, Alwar, Rajasthan
              (301001)
            </p>
          </div>
          <div className={styles.phone}>
            <FaPhone className={styles.contactIcon} />
            <p>+91 9214149999</p>
          </div>
          <div className={styles.email}>
            <h4 className={styles.emailTitle}>SEND US EMAIL</h4>
            <p className={styles.emailText}>contact@TotaConstruction.com</p>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <p className={styles.rights}>
            &copy; Copyrights are Reserved by{" "}
            <a href="/" className={styles.siteLink}>
              TotaConstruction.com
            </a>
          </p>
          <div className={styles.icon}>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
