
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page-container home-page">
      <div className="hero-content">
        <p className="availability">
          <span className="status-dot"></span>
          Open to entry-level opportunities
        </p>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          P. Narendra
          <br />
          <span className="gradient-text">
            Aspiring Software Developer
          </span>
        </h1>

        <p className="hero-description">
          I am a Computer Science graduate interested in software
          development, programming, and building practical applications.
          I am continuously improving my skills through hands-on projects
          and technical learning.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="button button-primary">
            Explore My Projects ↗
          </Link>

          <Link to="/contact" className="button button-secondary">
            Contact Me
          </Link>


<a
  href="/Narendra_Resume_FINALONE.pdf"
  className="button button-secondary"
  download="Narendra-Resume.pdf"
>
  Download Resume ↓
</a>

        </div>

        <div className="quick-facts">
          <div>
            <strong>Java</strong>
            <span>Programming</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Frontend</span>
          </div>

          <div>
            <strong>MERN</strong>
            <span>Full-stack learning</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-titlebar">
            <span className="window-dot red"></span>
            <span className="window-dot yellow"></span>
            <span className="window-dot green"></span>
            <span className="file-label">developer.js</span>
          </div>

          <pre>
            <code>
              <span className="code-purple">const</span> developer = {"{\n"}
              {"  "}name: <span className="code-green">"Narendra"</span>,{"\n"}
              {"  "}role: <span className="code-green">"Developer"</span>,{"\n"}
              {"  "}skills: [<span className="code-green">"Java"</span>,{" "}
              <span className="code-green">"React"</span>],{"\n"}
              {"  "}learning: <span className="code-orange">true</span>{"\n"}
              {"};"}
              {"\n\n"}
              <span className="code-comment">
                // Learn. Build. Improve.
              </span>
            </code>
          </pre>

          <div className="code-footer">
            <span>● Ready to learn</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="floating-chip chip-one">{"</>"} React</div>
        <div className="floating-chip chip-two">{"{ }"} Java</div>
      </div>
    </section>
  );
}

export default Home;
