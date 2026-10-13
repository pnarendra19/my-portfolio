
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Power BI", "N8N", "Generative AI"],
  },
];

function Skill() {
  return (
    <section className="page-container page-section">
      <div className="section-heading">
        <p className="eyebrow">MY TOOLKIT</p>
        <h1>Technical Skills</h1>
        <p className="section-description">
          Technologies I have learned and am developing through practice.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h2>{group.title}</h2>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skill;
