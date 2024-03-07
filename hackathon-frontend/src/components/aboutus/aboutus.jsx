import React from 'react';
import './aboutus.css';
 // Import the Footer component

const AboutPage = () => {
  return (
    <div className="about-container">
      <nav className="navbar">
        <ul>
          {/* Your navigation content */}
          <li className="dropdown">
            <a href="#">Who We Are</a>
            <div className="dropdown-content">
              <a href="#">Facts About Us</a>
              <a href="#">Skills We Provide</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#">What We Do</a>
            <div className="dropdown-content">
              <a href="#">Ecommerce India</a>
              <a href="#">Services We Provide</a>
            </div>
          </li>
          <li>
            <a href="#">Our Impact</a>
          </li>
          <li className="dropdown">
            <a href="#">Follow Us</a>
            <div className="dropdown-content">
              <a href="https://www.facebook.com">Facebook</a>
              <a href="https://www.instagram.com">Instagram</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="about-content">
        <h1 className="title">Why We Are</h1>
        <div className="about-details">
          <div className="question">
            <h2 style={{fontSize: '25.5px'}}>Who We Are?</h2>
            <p style={{fontSize: '18px'}}>We are a team passionate about revolutionizing the way buyer apps manage catalog information. Our mission is to provide efficient solutions to catalog quality challenges, ensuring a seamless experience for both buyers and sellers.Committed to driving innovation, we continuously explore new avenues to enhance user experiences and streamline processes. With an unwavering dedication to excellence, we empower businesses to thrive in the ever-evolving digital landscape. Our relentless pursuit of perfection fuels our mission to redefine industry standards and create transformative solutions that resonate with both our clients and their customers.</p>
          </div>
          <div className="website-info">
            <div className="card yellow-card">
              <h2>Facts About Our Website</h2>
              <p>Information about our website.</p>
            </div>
            <div className="card yellow-card">
              <h2>Skills We Provide</h2>
              <p>Details about skills provided.</p>
            </div>
            <div className="card yellow-card">
              <h2>Our Impact</h2>
              <p>Details about our impact.</p>
            </div>
            <div className="mission-statement">
              <p style={{ fontFamily: 'Arial', fontSize: 25.5 }}>
                "Driven by innovation, we strive to redefine the standards of excellence in the digital marketplace, empowering businesses and consumers alike."
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;
