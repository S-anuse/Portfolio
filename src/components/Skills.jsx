import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import htmlLogo from "../assets/html.jpg";
import cssLogo from "../assets/css.jpg";
import jsLogo from "../assets/js.jpg";
import reactLogo from "../assets/react.jpg";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongodb.jpg";
import gitLogo from "../assets/git.jpg";

const Skills = () => {
  const skills = [
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "JavaScript", image: jsLogo },
    { name: "React", image: reactLogo },
    { name: "Node.js", image: nodeLogo },
    { name: "MongoDB", image: mongoLogo },
    { name: "Git", image: gitLogo },
  ];
  return (
    <div>
      <section id="skills">
        {/* heading */}
        <h1 className="section-title">Skills</h1>

        {/* cards */}
        <div className="cards">
          {skills.map((ele, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card name={ele.name} image={ele.image} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
