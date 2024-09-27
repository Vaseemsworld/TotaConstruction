import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaPeopleGroup } from "react-icons/fa6";
import Records from "./Records";
import Team from "./Team";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <section>
        <div className="hero-section">
          <img src="/images/hero-image.webp" alt="hero.webp" />
          <div className="hero-content">
            <div className="renover-logo fadeInDown animate-on-scroll">
              <img src="/images/logo-hero.png" alt="renover-logo" />
            </div>
            <p className="fadeInDown animate-on-scroll">
              The Best Construction Solutions
            </p>
            <div className="heading fadeInUp animate-on-scroll">
              <div className="corner-left"></div>
              <h1>DREAM & BUILD</h1>
              <div className="corner-right"></div>
            </div>
            <Link to="/about" className="btn fadeInUp animate-on-scroll">
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section">
        <div className="intro-container">
          <div className="container">
            <div className="introItems">
              <div className="img slideRight animate-on-scroll">
                <img src="/images/jcb.webp" alt="jcb.webp" />
              </div>
              <div className="content slideLeft animate-on-scroll">
                <div className="heading">
                  <h3 className="sectiontitle">Get To Know Us</h3>
                  <h1 className="sectionHeadingText">
                    COMMITTED TO ONLY HIGH QUALITY SERVICE
                  </h1>
                </div>
                <div className="elements">
                  <div className="item">
                    <i>
                      <FaBuilding />
                    </i>
                    <h4>BUILDING QUALITY STANDARDS</h4>
                  </div>
                  <div className="item">
                    <i>
                      <FaPeopleGroup />
                    </i>
                    <h4>ORGANIZED WORK</h4>
                  </div>
                </div>
                <div className="description">
                  <p>
                    We are a reliable construction company specializing in
                    providing high-quality building materials and equipment.
                    From durable bricks, JCBs for digging, to tractors for
                    transporting bricks or soil, we supply everything needed for
                    efficient home construction and excavation projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section">
        <div className="get-in-touch">
          <div className="container">
            <div className="content">
              <h3>WE OFFER THE HIGHEST QUALITY SERVICES</h3>
              <Link to="/contact" className="btn">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <section className="section">
        <div className="projectSection">
          <div className="container">
            <div className="headings">
              <h3 className="sectiontitle">Explore Our Projects</h3>
              <h1 className="sectionHeadingText">RECENT PROJECTS</h1>
            </div>
            <div className="items">
              <div className="item fadeInUp animate-on-scroll">
                <div className="item-img">
                  <img
                    src="/images/hero-image.webp"
                    alt="highway construction.webp"
                  />
                </div>
                <div className="text">
                  <div className="type">COMMERCIAL</div>
                  <h2>HIGHWAY CONSTRUCTION</h2>
                </div>
              </div>
              <div className="item fadeInUp animate-on-scroll">
                <div className="item-img">
                  <img
                    src="/images/demolition-home.avif"
                    alt="house demolition.avif"
                  />
                </div>
                <div className="text">
                  <div className="type">RESIDENTIAL</div>
                  <h2>HOUSE DEMOLITION</h2>
                </div>
              </div>
              <div className="item fadeInUp animate-on-scroll">
                <div className="item-img">
                  <img
                    src="/images/hero-image.webp"
                    alt="foundation grading.webp"
                  />
                </div>
                <div className="text">
                  <div className="type">COMMERCIAL</div>
                  <h2>FOUNDATION GRADING</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <Records />
      <hr className="divider" />
      <section className="section">
        <div className="why-choose-us">
          <div className="container">
            <div className="whyChooseUsContent">
              <div className="worker-img slideRight animate-on-scroll">
                <img src="/images/worker.webp" alt="worker.png" />
              </div>
              <div className="content slideLeft animate-on-scroll">
                <div className="headings">
                  <h3 className="sectiontitle">WHY CHOOSE US</h3>
                  <h1 className="sectionHeadingText">
                    THE BEST CONSTRUCTION COMPANY
                  </h1>
                </div>
                <div className="description">
                  <p>
                    We are a reliable construction company specializing in
                    providing high-quality building materials and equipment.
                    From durable bricks, JCBs for digging, to tractors for
                    transporting bricks or soil, we supply everything needed for
                    efficient home construction and excavation projects.
                  </p>
                </div>
                <Link to="/services" className="btn">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider" />
      <Team />
      <hr className="divider" />
    </>
  );
};

export default Home;
