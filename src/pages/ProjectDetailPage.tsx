import type { ProjectEntry } from '../data/site';
import AppLink from '../components/AppLink';

type ProjectDetailPageProps = {
  onNavigate: (path: string) => void;
  project: ProjectEntry;
};

function ProjectDetailPage({ onNavigate, project }: ProjectDetailPageProps) {
  return (
    <div className="page">
      <div className="detail-layout">
        <aside className="detail-meta">
          <AppLink className="detail-back" onNavigate={onNavigate} to="/projects">
            / back to projects
          </AppLink>

          <div>
            <p className="eyebrow">/projects/{project.slug}</p>
            <h1 className="detail-title">{project.name}</h1>
          </div>

          <p className="detail-summary">{project.summary}</p>

          <div>
            <p className="list-label">Status</p>
            <p>{project.status}</p>
          </div>

          <div>
            <p className="list-label">Stack</p>
            <div className="detail-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 ? (
            <div className="detail-links">
              {project.links.map((link) => (
                <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </aside>

        <div className="detail-content">
          <section className="detail-section">
            <h2 className="detail-section__title">Problem</h2>
            <p>{project.problem}</p>
          </section>

          <section className="detail-section">
            <h2 className="detail-section__title">Constraints</h2>
            <ul className="detail-list">
              {project.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2 className="detail-section__title">Solution Approach</h2>
            <p>{project.approach}</p>
          </section>

          <section className="detail-section">
            <h2 className="detail-section__title">Technical Breakdown</h2>
            <ul className="detail-list">
              {project.technicalBreakdown.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2 className="detail-section__title">Tradeoffs</h2>
            <ul className="detail-list">
              {project.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2 className="detail-section__title">Future Improvements</h2>
            <ul className="detail-list">
              {project.futureImprovements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
