
const projects = [
  {
    title: "Smart IT Service Desk",
    status: "In Progress",
    description:
      "A planned full-stack application for managing IT support requests, tracking ticket status, and organizing service desk workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    title: "Scholarship Project",
    status: "Repository Available",
    description:
      "An existing project repository. Add a description of the actual features, your contribution, and the technologies used.",
    technologies: ["Technologies to be confirmed"],
    github: "https://github.com/pnarendra19/Scholorship.git",
    demo: "",
  }
];

function Project() {
  return (
    <section className="page-container page-section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I'M BUILDING</p>
        <h1>My Projects</h1>
        <p className="section-description">
          Academic and personal projects that demonstrate my learning.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <div className="project-icon">{"< />"}</div>
              <span className="project-status">
                <span className="status-dot"></span>
                {project.status}
              </span>
            </div>

            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub ↗
                </a>
              ) : (
                <span className="link-placeholder">
                  Source link to be added
                </span>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
