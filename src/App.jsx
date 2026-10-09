import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "MySQL",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "Hospital Management",
      description:
        "A responsive hospital website built using React and CSS.",
      tech: "React • CSS • JavaScript",
    },
    {
      title: "E-Commerce Website",
      description:
        "An online shopping application with product listings and cart functionality.",
      tech: "React • Node.js • MongoDB",
    },
    {
      title: "Student Management",
      description:
        "An application to add, view, update, delete, and search student records.",
      tech: "Python • Flask • SQLite",
    },
  ];

  return (
    <div>
      <header className="header">
        <a href="#home" className="logo">
          Shree<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="intro">HELLO, I'M</p>
            <h1>Shree Bahekar</h1>
            <h2>Full Stack Developer</h2>
            <p>
              I build responsive websites and web applications using
              modern web technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="avatar">SB</div>
            <h3>Web Developer</h3>
            <p>Learn • Build • Improve</p>
          </div>
        </section>

        <section id="about" className="section">
          <p className="label">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p className="section-text">
            I am a BCA graduate interested in full stack development.
            I enjoy building websites, learning new technologies, and
            solving programming problems. I am continuously improving
            my skills in React, JavaScript, Node.js, and databases.
          </p>
        </section>

        <section id="skills" className="section section-dark">
          <p className="label">WHAT I KNOW</p>
          <h2>My Skills</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="label">MY WORK</p>
          <h2>Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">&lt;/&gt;</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="tech">{project.tech}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="label">LET'S CONNECT</p>
          <h2>Contact Me</h2>
          <p>
            Interested in working together or discussing an opportunity?
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:shreebahekar7336@gmail.com">
                shreebahekar7336@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+917030070247">7030070247</a>
            </p>
          </div>

          <a
            className="btn"
            href="mailto:shreebahekar7336@gmail.com"
          >
            Email Me
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shree-bahekar47"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Bahekar2/Hospital-pro.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shree Bahekar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;