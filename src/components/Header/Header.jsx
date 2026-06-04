import "./Header.css";
import { useEffect, useState } from "react";
import logo from "../../assets/stacklyimg1.webp";

function Header() {
  const [sticky, setSticky] = useState(false);

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
        <a href="/">
          <img
            src={logo}
            alt="Stackly Logo"
            className="logo-img"
          />
        </a>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#solutions">Solutions</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}

export default Header;