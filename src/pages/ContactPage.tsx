import Panel from '../components/Panel';
import { siteProfile } from '../data/site';

function ContactPage() {
  return (
    <div className="page">
      <section className="page-intro">
        <p className="eyebrow">/contact</p>
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Best path is email. GitHub and LinkedIn are here as well for technical work, collaboration, and professional context.
        </p>
      </section>

      <Panel title="Contact Channels">
        <div className="contact-list">
          <div className="contact-method">
            <span className="contact-method__label">Email</span>
            <a href={`mailto:${siteProfile.email}`}>{siteProfile.email}</a>
          </div>

          <div className="contact-method">
            <span className="contact-method__label">GitHub</span>
            <a href={siteProfile.github} rel="noreferrer" target="_blank">
              {siteProfile.github}
            </a>
          </div>

          <div className="contact-method">
            <span className="contact-method__label">LinkedIn</span>
            <a href={siteProfile.linkedin} rel="noreferrer" target="_blank">
              {siteProfile.linkedin}
            </a>
          </div>

          <div className="contact-method">
            <span className="contact-method__label">Resume</span>
            <a href={siteProfile.resume} rel="noreferrer" target="_blank">
              Download CV
            </a>
          </div>
        </div>

        <p className="contact-note">Open to software engineering, data, and infrastructure-focused roles, especially remote and Africa-linked work.</p>
      </Panel>
    </div>
  );
}

export default ContactPage;
