import React from "react";

const Stats = () => {
  return (
    <section id="stats">
      <div className="stats-container">
        {/* Card 1: Problem Solving */}
        <div className="stat-box problem-solving-card">
          <div className="card-header">
            <span className="card-badge">Algorithms</span>
            <h2>350+ Solved</h2>
          </div>
          <p className="card-desc">
            Algorithmic challenges solved across platforms with optimal time & space complexities.
          </p>
          <div className="dsa-progress-container">
            <div className="dsa-progress-bar">
              <div className="progress-segment easy" style={{ width: "34%" }} title="Easy: 121"></div>
              <div className="progress-segment medium" style={{ width: "43%" }} title="Medium: 152"></div>
              <div className="progress-segment hard" style={{ width: "23%" }} title="Hard: 83"></div>
            </div>
            <div className="dsa-progress-legend">
              <span className="legend-item easy">
                <span className="dot"></span> Easy <strong>121</strong>
              </span>
              <span className="legend-item medium">
                <span className="dot"></span> Medium <strong>152</strong>
              </span>
              <span className="legend-item hard">
                <span className="dot"></span> Hard <strong>83</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Core CS / DSA Focus */}
        <div className="stat-box core-skills-card">
          <div className="card-header">
            <span className="card-badge">CS Core</span>
            <h2>Key Focus Areas</h2>
          </div>
          <p className="card-desc">
            Deep dive into algorithmic paradigms and core software engineering concepts.
          </p>
          <div className="skills-grid">
            <span className="skill-chip">Dynamic Programming</span>
            <span className="skill-chip">Graph Algorithms</span>
            <span className="skill-chip">Trees & Tries</span>
            <span className="skill-chip">Recursion & Backtracking</span>
            <span className="skill-chip">System Design (LLD/HLD)</span>
            <span className="skill-chip">DBMS & OS Core</span>
          </div>
        </div>

        {/* Card 3: Profiles */}
        <div className="stat-box profiles-card">
          <div className="card-header">
            <span className="card-badge">Profiles</span>
            <h2>Coding Handles</h2>
          </div>
          <p className="card-desc">
            Active coder profiles showcasing submission histories and ratings.
          </p>
          <div className="profiles-links-grid">
            <a
              href="https://leetcode.com/u/Sanjeevani_27/"
              target="_blank"
              rel="noreferrer"
              className="profile-badge leetcode-badge"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.378 1.378 0 0 0 0 1.948l5.412 5.411a1.378 1.378 0 0 0 1.948 0L19.88 7.774a1.378 1.378 0 0 0 0-1.948L14.468.411A1.374 1.374 0 0 0 13.483 0zm0 2.234l4.316 4.316-4.316 4.317-4.317-4.317 4.317-4.316zM16.192 13.902a2.804 2.804 0 0 0-3.966 0L8.858 17.27a2.805 2.805 0 1 0 3.966 3.965l3.368-3.368a2.805 2.805 0 0 0 0-3.965zm-1.029 2.936l-3.368 3.368a1.362 1.362 0 1 1-1.927-1.926l3.368-3.368a1.362 1.362 0 1 1 1.927 1.926z" />
              </svg>
              <span>LeetCode</span>
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/sanjeevaaqxe"
              target="_blank"
              rel="noreferrer"
              className="profile-badge gfg-badge"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.116 2.116c-5.46 0-9.89 4.43-9.89 9.89s4.43 9.89 9.89 9.89c3.08 0 5.82-1.4 7.64-3.6l-2.4-1.5c-1.25 1.44-3.13 2.3-5.24 2.3-3.92 0-7.09-3.17-7.09-7.09s3.17-7.09 7.09-7.09c2.11 0 3.99.86 5.24 2.3l2.4-1.5c-1.82-2.2-4.56-3.6-7.64-3.6z" />
                <path d="M12.116 6.116c-3.25 0-5.89 2.64-5.89 5.89s2.64 5.89 5.89 5.89c1.84 0 3.48-.84 4.56-2.16l-2.4-1.44c-.58.6-1.34.96-2.16.96-1.93 0-3.49-1.56-3.49-3.49s1.56-3.49 3.49-3.49c.82 0 1.58.36 2.16.96l2.4-1.44c-1.08-1.32-2.72-2.16-4.56-2.16z" />
              </svg>
              <span>GeeksforGeeks</span>
            </a>

            <a
              href="https://www.naukri.com/code360/profile/3a1e95d0-582d-42dd-88b9-d1c1673c2526"
              target="_blank"
              rel="noreferrer"
              className="profile-badge code360-badge"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
              </svg>
              <span>Code360</span>
            </a>

            <a
              href="https://github.com/S-anuse"
              target="_blank"
              rel="noreferrer"
              className="profile-badge github-badge"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
