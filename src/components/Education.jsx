
const education = [
  {
    category: "ACADEMIC BACKGROUND",
    title:
      "B.Tech — Artificial Intelligence and Intelligent Process Automation",
    organization: "KL University",
    detail: "CGPA: 8.9",
  },
  {
    category: "PROFESSIONAL TRAINING",
    title: "Software Development Trainee",
    organization: "TalentSprint",
    detail: "Full-stack development and Generative AI learning.",
  },
  {
    category: "ASSESSMENT",
    title: "TCS iON NQT — IT",
    organization: "Assessment score: 68.07%",
    detail: "Include official credential details if applicable.",
  },
];

function Education() {
  return (
    <section className="page-container page-section">
      <div className="section-heading">
        <p className="eyebrow">MY BACKGROUND</p>
        <h1>Education & Training</h1>
        <p className="section-description">
          My academic foundation and professional learning.
        </p>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span className="timeline-dot"></span>

            <div className="timeline-card">
              <p className="eyebrow">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.organization}</p>
              <p className="muted">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
