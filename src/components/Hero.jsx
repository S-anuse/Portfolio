import React from "react";
import { TypeAnimation } from "react-type-animation";
// import profileImg from "../assets/profile.jpg";

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

        <div>
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            <button>Resume</button>
          </a>
        </div>
      </div>

      <div className="right">
        <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg"
          alt="Sanjeevani" />
      </div>
    </section>
  );
};

export default Hero;