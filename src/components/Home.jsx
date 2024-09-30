import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaPeopleGroup } from "react-icons/fa6";
import Records from "./Records";
import Team from "./Team";
import AnimationOnScroll from "./Animation";
const Home = () => {
  AnimationOnScroll();

  return (
    <>
      <section>
        <div className="hero-section">
          <img
            src="https://ik.imagekit.io/hyrppbheqc/images/hero-image.webp"
            alt="image"
          />
          <div className="hero-content">
            <div className="renover-logo fadeInDown animateOnScroll">
              <img
                src="https://ik.imagekit.io/hyrppbheqc/images/logo-hero.png"
                alt="image"
              />
            </div>
            <p className="fadeInDown animateOnScroll">
              The Best Construction Solutions
            </p>
            <div className="heading fadeInUp animateOnScroll">
              <div className="corner-left"></div>
              <h1>DREAM & BUILD</h1>
              <div className="corner-right"></div>
            </div>
            <Link to="/about" className="btn fadeInUp animateOnScroll">
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
              <div className="img slideRight animateOnScroll">
                <img
                  src="https://ik.imagekit.io/hyrppbheqc/images/jcb.webp"
                  alt="image"
                />
              </div>
              <div className="content slideLeft animateOnScroll">
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
              <div className="item fadeInUp animateOnScroll">
                <div className="item-img">
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/hero-image.webp"
                    alt="image"
                  />
                </div>
                <div className="text">
                  <div className="type">COMMERCIAL</div>
                  <h2>HIGHWAY CONSTRUCTION</h2>
                </div>
              </div>
              <div className="item fadeInUp animateOnScroll">
                <div className="item-img">
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/demolition-home.avif"
                    alt="image"
                  />
                </div>
                <div className="text">
                  <div className="type">RESIDENTIAL</div>
                  <h2>HOUSE DEMOLITION</h2>
                </div>
              </div>
              <div className="item fadeInUp animateOnScroll">
                <div className="item-img">
                  <img
                    src="https://ik.imagekit.io/hyrppbheqc/images/hero-image.webp"
                    alt="image"
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
              <div className="worker-img slideRight animateOnScroll">
                <img
                  src="https://ik.imagekit.io/hyrppbheqc/images/worker.webp"
                  alt="image"
                />
              </div>
              <div className="content slideLeft animateOnScroll">
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
