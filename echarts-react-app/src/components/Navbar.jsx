import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState("");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let scrollY = window.scrollY;

      sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActive(id);
        }

      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <h2>Abisaya</h2>

        <div className="nav-links">

          <a href="#about" className={active==="about"?"active":""}>About</a>
          <a href="#skills" className={active==="skills"?"active":""}>Skills</a>
          <a href="#experience" className={active==="experience"?"active":""}>Experience</a>
          <a href="#projects" className={active==="projects"?"active":""}>Projects</a>
          <a href="#contact" className={active==="contact"?"active":""}>Contact</a>

          <div className="theme-icon" onClick={toggleTheme}>
            {theme==="dark"?<FaSun/>:<FaMoon/>}
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;