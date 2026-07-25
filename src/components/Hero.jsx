import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home">
      <div className="left">
        <h1>
          Hi, I'm <span>Sanjeevani</span>
        </h1>

        <h4>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "CSE Student",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h4>

        <p>
          I build responsive web applications and keep learning modern
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="btn-primary">View Projects</button>
          </a>

          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            <button className="btn-secondary">Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;