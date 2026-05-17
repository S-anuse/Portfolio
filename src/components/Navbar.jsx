import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="left">Sanjeevani</div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`right ${menuOpen ? "show" : ""}`}>
        <a
          href="#home"
          className={active === "home" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        <a href="/Resume.pdf" target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
