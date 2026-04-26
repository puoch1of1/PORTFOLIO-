import Panel from '../components/Panel';
import { aboutSections, skillGroups } from '../data/site';

function AboutPage() {
  return (
    <div className="page">
      <section className="page-intro">
        <p className="eyebrow">/about</p>
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">
          Short version: I build practical software and data systems, with a strong interest in African infrastructure and
          operational clarity.
        </p>
      </section>

      <div className="page-grid">
        <Panel title="Who I Am">
          <p>{aboutSections.whoIAm}</p>
        </Panel>

        <Panel title="What I Care About">
          <p>{aboutSections.whatICareAbout}</p>
        </Panel>

        <Panel title="How I Work">
          <p>{aboutSections.workingStyle}</p>
        </Panel>

        <Panel title="Skills">
          <div className="plain-list">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="list-label">{group.title}</p>
                <p>{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default AboutPage;
