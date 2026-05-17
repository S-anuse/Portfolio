import React from 'react'

const About = () => {
  return (
    <section id="about">
      {/* Heading section */}
      <h1>About Me</h1>
      {/* Intro section */}
      <p>
        I am an M.Tech Computer Science student at VNIT Nagpur, passionate about
        building modern web applications and solving backend challenges.
      </p>
   
      {/* Education section */}
      <h3>Education</h3>
      <ul>
        <li>
          M.Tech in Computer Science and Engineering | VNIT Nagpur | Expected
          2027
        </li>
        <li>
          B.Tech in Computer Science and Engineering | SVERI's College of
          Engineering, Pandharpur | 2025
        </li>
        <li>Senior Secondary (HSC) | KBP College, Pandharpur | 91.16% </li>
      </ul>

      {/* Goals section */}
      <h3>Goals</h3>
      <ul>
        <li>
          Full-Stack Innovation: I aim to leverage modern stacks like React,
          Node.js, and MongoDB to build platforms that solve real-world problems
          with high efficiency.
        </li>
        <li>
          Open Source Contribution: Having built tools like SyntaxShare and
          CodePlayground, I am dedicated to contributing to the developer
          community by creating accessible, high-performance web tools.
        </li>
      </ul>
    </section>
  );
}

export default About
