
const projects = [
  {
    title: "VoiceGenie",
    description:
      "A voice-based AI assistant designed to accept voice input and help users interact through conversational features.",
    technologies: ["React", "JavaScript", "AI", "Speech Recognition"],
    github: "https://github.com/pnarendra19/Voice-Genie",
    status: "In Progress",
  },

  
{
  title: "Scholarship Project",
  description:
    "A web-based scholarship project developed to help users explore and access scholarship-related information.",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  github: "https://github.com/pnarendra19/Scholorship",
  status: "Completed",
},

];

function Project() {
  return (
    <section className="projects section">
      <h1>My Projects</h1>
      <p>Some projects I have built and am currently developing.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong>{" "}
              {project.technologies.join(" • ")}
            </p>

            <p>
              <strong>Status:</strong> {project.status}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
