import ProjectRecord from '../components/ProjectRecord';
import { projects } from '../data/site';

type ProjectsPageProps = {
  onNavigate: (path: string) => void;
};

function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div className="page">
      <section className="page-intro">
        <p className="eyebrow">/projects</p>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          List view only. Each entry is written to show the problem, the thinking, the constraints, and the current state of the work.
        </p>
      </section>

      <div className="page-grid">
        {projects.map((project) => (
          <ProjectRecord key={project.slug} onNavigate={onNavigate} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
