import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer>
      {/* Quick Links Section */}
      <div>
        <h6>Quick Links</h6>
        <ul>
          <li><a href="https://www.kabadiwalaonline.com/">Home</a></li>
          <li><a href="https://www.kabadiwalaonline.com/about-us/">About Us</a></li>
          <li><a href="https://www.kabadiwalaonline.com/contact-us/">Contact Us</a></li>
        </ul>
      </div>

      {/* Other Pages Section */}
      <div>
        <h6>Other Pages</h6>
        <ul>
          <li><a href="https://www.kabadiwalaonline.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="https://www.kabadiwalaonline.com/terms-and-conditions/">Terms and Conditions</a></li>
        </ul>
      </div>

      {/* Get In Touch Section */}
      <div>
        <h6>Get In Touch</h6>
        <p>198/30 Ramesh Market East of Kailash New Delhi 110065</p>
        <ul>
          <li><a href="mailto:info@catalogue.com">Email: info@catalogue.com</a></li>
          <li><a href="tel:7065424442">Phone: 7065424442</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
