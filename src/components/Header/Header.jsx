import "./Header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/stacklyimg1.webp";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={sticky ? "header sticky" : "header"}>
      
      <div className="logo">
  <a href="#/">
    <img
      src={logo}
      alt="Stackly Logo"
      className="logo-img"
    />
  </a>
</div>

<ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li><a href="#/">Home</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#solutions">Solutions</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

      {/* Hamburger */}
      <div
  className={`hamburger ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

    </header>
  );
}

export default Header;