
function Contact() {
  return (
    <section className="page-container page-section">
      <div className="contact-card">
        <p className="eyebrow">LET'S CONNECT</p>

        <h1>Have an opportunity in mind?</h1>

        <p>
          I am interested in entry-level Software Developer roles
          and opportunities to learn, contribute, and grow.
          Feel free to connect with me.
        </p>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Email Me ↗
          </a>

          <a
            className="button button-secondary"
            href="https://github.com/pnarendra19"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            className="button button-secondary"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
