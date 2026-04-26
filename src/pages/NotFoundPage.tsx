import AppLink from '../components/AppLink';

type NotFoundPageProps = {
  onNavigate: (path: string) => void;
};

function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <section className="not-found">
      <p className="not-found__eyebrow">route error</p>
      <h1 className="page-title">Page Not Found</h1>
      <p>The route you requested does not exist in this workspace.</p>
      <div className="not-found__actions">
        <AppLink className="action-link" onNavigate={onNavigate} to="/">
          Return Home
        </AppLink>
        <AppLink className="action-link" onNavigate={onNavigate} to="/projects">
          View Projects
        </AppLink>
      </div>
    </section>
  );
}

export default NotFoundPage;
