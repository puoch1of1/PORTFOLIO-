import { getProjectPath, type ProjectEntry } from '../data/site';
import AppLink from './AppLink';

type ProjectRecordProps = {
  onNavigate: (path: string) => void;
  project: ProjectEntry;
};

function ProjectRecord({ onNavigate, project }: ProjectRecordProps) {
  return (
    <article className="project-record">
      <p className="project-record__name">
        PROJECT:{' '}
        <AppLink className="project-record__link" onNavigate={onNavigate} to={getProjectPath(project.slug)}>
          [{project.name}]
        </AppLink>
      </p>

      <div className="project-record__row">
        <span className="project-record__label">Problem:</span>
        <p>{project.problem}</p>
      </div>

      <div className="project-record__row">
        <span className="project-record__label">Approach:</span>
        <p>{project.approach}</p>
      </div>

      <div className="project-record__row">
        <span className="project-record__label">Stack:</span>
        <p>{project.stack.join(', ')}</p>
      </div>

      <div className="project-record__row">
        <span className="project-record__label">Status:</span>
        <p>{project.status}</p>
      </div>
    </article>
  );
}

export default ProjectRecord;
