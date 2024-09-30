import React, { useEffect, useState } from "react";
import { FaPhone, FaMessage, FaLocationDot } from "react-icons/fa6";
import { FaTimes, FaBars, FaAngleDoubleRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContact}>
          <ul className={styles.navItems}>
            <li>
              <i>
                <FaMessage />
              </i>
              <p className={styles.item}>totaconstruction@gmail.com</p>
            </li>
            <li>
              <i>
                <FaPhone />
              </i>
              <p className={styles.item}>+91 9214149999</p>
            </li>
            <li>
              <i>
                <FaLocationDot />
              </i>
              <p className={styles.item}>
                Near Naman Hotel, 200ft Road, Alwar, Raj.
              </p>
            </li>
          </ul>
          <Link to="/contact" className={styles.navButton}>
            <span className={styles.btnContent}>
              <span className={styles.icon}>
                <FaAngleDoubleRight />
              </span>
              Hire Us
            </span>
          </Link>
        </div>
        <div className={styles.navMain}>
          <div className={styles.logoImg}>
            <img
              src="https://ik.imagekit.io/hyrppbheqc/images/logo.png"
              alt="Tota Cons.png"
              className={styles.logo}
            />
          </div>
          <button className={styles.navToggle} onClick={handleClick}>
            <i>{isOpen ? <FaTimes /> : <FaBars />}</i>
          </button>
          <ul className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleNavItemClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleNavItemClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleNavItemClick}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleNavItemClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleNavItemClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
