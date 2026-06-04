import "./Footer.css";
import logo from "../../assets/stacklyimg1.webp";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <img
            src={logo}
            alt="Company Logo"
            className="footer-logo"
          />

          <p>
            Delivering innovative IT solutions, software development,
            cloud services, cybersecurity, and digital transformation
            for businesses worldwide.
          </p>

          <div className="social-icons">
  <a href="#/social-linkedin">
    <FaLinkedinIn />
  </a>

  <a href="#/social-github">
    <FaGithub />
  </a>

  <a href="#/social-instagram">
    <FaInstagram />
  </a>

  <a href="#/social-twitter">
    <FaXTwitter />
  </a>
</div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/services">Services</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>

          <ul>
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>Cyber Security</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              &nbsp; Hyderabad,India
            </li>

            <li>
              <i className="fas fa-phone"></i>
              &nbsp; +91 9876543210
            </li>

            <li>
              <i className="fas fa-envelope"></i>
              &nbsp; info@stackly.com
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Stackly.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;