import AppLink from '../components/AppLink';
import Panel from '../components/Panel';
import { activeWork, featuredProjectSlugs, getProjectPath, homeSignals, projects, siteProfile, systemStatus } from '../data/site';

type HomePageProps = {
  onNavigate: (path: string) => void;
};

function HomePage({ onNavigate }: HomePageProps) {
  const featuredProjects = projects.filter((project) => featuredProjectSlugs.includes(project.slug));

  return (
    <div className="page">
      <section className="page-intro hero-block">
        <p className="eyebrow">/home</p>
        <div>
          <h1 className="page-title">{siteProfile.name}</h1>
          <p className="role-line">{siteProfile.role}</p>
        </div>
        <div className="signal-block">
          <span>{siteProfile.mission}</span>
          <span>{siteProfile.focus}</span>
        </div>
        <div className="action-row">
          <AppLink className="action-link" onNavigate={onNavigate} to="/projects">
            [ Projects ]
          </AppLink>
          <AppLink className="action-link" onNavigate={onNavigate} to="/about">
            [ About ]
          </AppLink>
          <AppLink className="action-link" onNavigate={onNavigate} to="/contact">
            [ Contact ]
          </AppLink>
        </div>
      </section>

      <div className="summary-list">
        <span>system mode: engineering</span>
        <span>region: Africa-focused</span>
        <span>design: minimal / structured / clear</span>
      </div>

      <div className="home-grid">
        <Panel title="System Status / Active Work">
          <div className="split-summary">
            <ul className="status-list">
              {systemStatus.map((item) => (
                <li key={item.label}>
                  <span className="list-label">{item.label}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>

            <ul className="plain-list">
              {activeWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Panel>

        <Panel title="Selected Projects">
          <div className="featured-list">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="featured-item">
                <AppLink className="featured-item__title" onNavigate={onNavigate} to={getProjectPath(project.slug)}>
                  {project.name}
                </AppLink>
                <p>{project.summary}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <section className="signal-strip" aria-label="Operating Signal">
        <ul className="signal-list">
          {homeSignals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="terminal-line">system ready_</p>
      </section>
    </div>
  );
}

export default HomePage;
