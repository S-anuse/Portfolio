import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const project_desc = [
    {
      title: "VerdictIO",
      desc: "An online judge and code compilation platform. Features secure JWT authentication, Monaco-powered web editor, a Dockerized compiler runner, and an asynchronous worker queue (Redis & BullMQ) evaluating C++, Python, and JS submissions against PostgreSQL test cases.",
      tech: "React, Node.js, PostgreSQL, Docker, Redis, BullMQ",
      github: "https://github.com/S-anuse/VerdictIO",
      live: "https://verdict-io.vercel.app",
      image: "/verdictio.png",
    },
    {
      title: "CollabDocs",
      desc: "A Google Docs-inspired collaborative document editor. Supports real-time text editing, active users presence, live cursor tracking, selection highlighting, role-based document sharing (Editor/Viewer), auto-saving, and automatic version history restoration.",
      tech: "React, Socket.IO, Node.js, MongoDB, Tailwind CSS, TipTap",
      github: "https://github.com/S-anuse/CollabDocs",
      live: "https://collab-docs-peach.vercel.app",
      image: "/collabdocs.png",
    },
    {
      title: "SyntaxShare",
      desc: "A developer-focused knowledge sharing blog and feed. Features a split-pane rich-text Markdown editor, server-agnostic syntax highlighting, engagement tracking (likes/comments), JWT auth with refresh token rotation, and local storage themes.",
      tech: "React, Node.js, Express, MongoDB, JWT, rehype-highlight",
      github: "https://github.com/S-anuse/SyntaxShare",
      live: null,
      image: "/syntaxshare.png",
    },
    {
      title: "Distributed File System",
      desc: "A custom chunk-based distributed file storage system modeled after GFS. Features a master server handling metadata mapping, storage server nodes distributing and replicating file fragments, and custom client interfaces for uploads and downloads.",
      tech: "C++, TCP/IP Sockets, Posix Threads, Systems Design",
      github: "https://github.com/S-anuse/Distributed-File-System-Storage",
      live: null,
      image: "/dfs.png",
    },
  ];
  return (
    <section id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        {project_desc.map((ele, idx) => {
          return (
            <ProjectCard
              key={idx}
              title={ele.title}
              desc={ele.desc}
              tech={ele.tech}
              github={ele.github}
              live={ele.live}
              image={ele.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects
