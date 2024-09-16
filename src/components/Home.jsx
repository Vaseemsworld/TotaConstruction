import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaPeopleGroup } from "react-icons/fa6";
import Records from "./Records";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <section>
        <div className="hero-section">
          <img src="/images/hero-image.jpg" alt="hero.jpg" />
          <div className="hero-content">
            <div className="renover-logo">
              <img src="/images/logo-hero.png" alt="renover-logo" />
            </div>
            <p>The Best Construction Solutions</p>
            <div className="heading">
              <div className="corner-left"></div>
              <h1>DREAM & BUILD</h1>
              <div className="corner-right"></div>
            </div>
            <Link to="/about" className="btn">
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
              <div className="img">
                <img src="/images/jcb.jpg" alt="jcb.jpg" />
              </div>
              <div className="content">
                <div className="heading">
                  <h3 className="sectiontitle">Get To Know Us</h3>
                  <h1 className="sectionHeading">
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
              <h1 className="sectionHeading">RECENT PROJECTS</h1>
            </div>
            <div className="items">
              <div className="item">
                <div className="item-img">
                  <img
                    src="/images/hero-image.jpg"
                    alt="highway construction.jpg"
                  />
                </div>
                <div className="text">
                  <div className="type">COMMERCIAL</div>
                  <h2>HIGHWAY CONSTRUCTION</h2>
                </div>
              </div>
              <div className="item">
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
              <div className="item">
                <div className="item-img">
                  <img
                    src="/images/hero-image.jpg"
                    alt="foundation grading.jpg"
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
              <div className="worker-img">
                <img src="/images/worker.jpg" alt="worker.png" />
              </div>
              <div className="content">
                <div className="headings">
                  <h3 className="sectiontitle">WHY CHOOSE US</h3>
                  <h1 className="sectionHeading">
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
