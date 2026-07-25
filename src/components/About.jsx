import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-grid">
        <div className="about-left">
          <p className="about-bio">
            I am an M.Tech Computer Science student at VNIT Nagpur, passionate about
            building high-performance web applications and solving complex systems and backend engineering challenges.
          </p>
          
          <div className="goals-container">
            <h3>My Core Goals</h3>
            <div className="goal-card">
              <h4>Full-Stack Innovation</h4>
              <p>I aim to leverage modern technology stacks to build robust, scalable, and responsive applications that address real-world challenges efficiently.</p>
            </div>
            
            <div className="goal-card">
              <h4>Open Source & Tools</h4>
              <p>Dedicated to creating high-performance developer tools, libraries, and open-source contributions that help make web systems more accessible.</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h3>Education Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Expected 2027</span>
                <h4>M.Tech in Computer Science and Engineering</h4>
                <p className="timeline-school">VNIT Nagpur | CGPA: 8.83/10 (Current)</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2025</span>
                <h4>B.Tech in Computer Science and Engineering</h4>
                <p className="timeline-school">SVERI's College of Engineering, Pandharpur | CGPA: 9.5/10</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Completed 2021</span>
                <h4>Senior Secondary Education (HSC)</h4>
                <p className="timeline-school">KBP College, Pandharpur | 91.16%</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Completed 2019</span>
                <h4>Secondary Education (SSC)</h4>
                <p className="timeline-school">Kawathekar Prashala, Pandharpur | 92.60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
