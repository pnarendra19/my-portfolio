
function About() {
  return (
    <section className="page-container page-section">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>About Me</h1>
        <p className="section-description">
          My background, interests, and career goals.
        </p>
      </div>

      <div className="about-card">
        <div className="about-symbol">{"< />"}</div>

        <div>
          <h2>Building my software development skills</h2>

          <p>
            I am a Computer Science graduate with a B.Tech background
            in Artificial Intelligence and Intelligent Process
            Automation. I am strengthening my programming and
            application development skills through practice and
            hands-on projects.
          </p>

          <p>
            I am seeking an entry-level Software Developer opportunity
            where I can contribute to real-world applications, learn
            from experienced developers, and grow professionally.
          </p>

          <div className="about-tags">
            <span>Continuous Learning</span>
            <span>Problem Solving</span>
            <span>Team Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
