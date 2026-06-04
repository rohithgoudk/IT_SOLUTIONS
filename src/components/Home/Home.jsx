import "./Home.css";
import IT1 from "../../assets/IT1.webp";
import IT2 from "../../assets/IT2.webp";
import IT3 from "../../assets/IT3.webp";
import IT4 from "../../assets/IT4.webp";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Innovative IT Solutions</span>

          <h1>
            Empowering Businesses Through
            <span> Digital Transformation</span>
          </h1>

          <p>
            We deliver cutting-edge software development, cloud solutions,
            cybersecurity, and IT consulting services to help businesses grow
            faster and smarter.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="IT Solutions"
          />
        </div>
      </section>

      {/* SERVICES */}
<section className="services">
  <div className="section-title">
    <h2>Our Services</h2>
    <p>Comprehensive technology solutions for modern businesses.</p>
  </div>

  <div className="service-grid">

    <div className="service-card">
      <img src={IT1} alt="Software Development" />

      <div className="service-content">
        <h3>Software Development</h3>
        <p>
          Custom web and mobile applications tailored to your business
          requirements.
        </p>

        <button>Learn More</button>
      </div>
    </div>

    <div className="service-card">
      <img src={IT2} alt="Cloud Solutions" />

      <div className="service-content">
        <h3>Cloud Solutions</h3>
        <p>
          Secure and scalable cloud infrastructure to optimize operations.
        </p>

        <button>Learn More</button>
      </div>
    </div>

    <div className="service-card">
      <img src={IT3} alt="Cyber Security" />

      <div className="service-content">
        <h3>Cyber Security</h3>
        <p>
          Protect your business with advanced security solutions and
          monitoring.
        </p>

        <button>Learn More</button>
      </div>
    </div>

    <div className="service-card">
      <img src={IT4} alt="IT Consulting" />

      <div className="service-content">
        <h3>IT Consulting</h3>
        <p>
          Expert guidance to align technology strategies with business goals.
        </p>

        <button>Learn More</button>
      </div>
    </div>

  </div>
</section>
      {/* ABOUT */}
      <section className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="About"
          />
        </div>

        <div className="about-content">
          <h2>Transforming Ideas Into Technology</h2>

          <p>
            We are a team of passionate developers, designers, and IT experts
            committed to delivering innovative solutions that drive business
            success.
          </p>

          <ul>
            <li>✔ Custom Software Development</li>
            <li>✔ Enterprise IT Solutions</li>
            <li>✔ Cloud & DevOps Services</li>
            <li>✔ 24/7 Technical Support</li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <h3>Experienced Team</h3>
            <p>
              Skilled professionals delivering high-quality technology
              solutions.
            </p>
          </div>

          <div className="why-card">
            <h3>Latest Technologies</h3>
            <p>
              We leverage modern tools and frameworks to ensure business growth.
            </p>
          </div>

          <div className="why-card">
            <h3>Customer Focused</h3>
            <p>
              Your success is our priority, and we provide personalized
              solutions.
            </p>
          </div>

          <div className="why-card">
            <h3>24/7 Support</h3>
            <p>
              Dedicated support team available whenever you need assistance.
            </p>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="cta">
        <h2>Ready To Grow Your Business?</h2>

        <p>
          Let's discuss how our IT solutions can help your organization achieve
          its goals.
        </p>

        <button className="primary-btn">
          Contact Us Today
        </button>
      </section>
    </>
  );
}

export default Home;