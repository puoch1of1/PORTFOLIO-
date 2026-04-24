import { startTransition, useEffect, useMemo, useState } from 'react';
import AppShell from './components/AppShell';
import CommandPalette, { type CommandItem } from './components/CommandPalette';
import { getProjectPath, navigationItems, projects, siteProfile } from './data/site';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';

type RouteMatch =
  | { kind: 'home'; title: string; description: string }
  | { kind: 'projects'; title: string; description: string }
  | { kind: 'about'; title: string; description: string }
  | { kind: 'contact'; title: string; description: string }
  | { kind: 'project'; title: string; description: string; slug: string }
  | { kind: 'not-found'; title: string; description: string };

const normalizePath = (path: string) => {
  if (!path || path === '/') {
    return '/';
  }

  const trimmed = path.endsWith('/') ? path.slice(0, -1) : path;
  return trimmed || '/';
};

const resolveRoute = (path: string): RouteMatch => {
  const pathname = normalizePath(path);

  if (pathname === '/') {
    return {
      kind: 'home',
      title: `${siteProfile.name} | ${siteProfile.role}`,
      description: siteProfile.description,
    };
  }

  if (pathname === '/projects') {
    return {
      kind: 'projects',
      title: `Projects | ${siteProfile.name}`,
      description: 'Selected engineering and data projects by Puoch Mabor Makuei.',
    };
  }

  if (pathname === '/about') {
    return {
      kind: 'about',
      title: `About | ${siteProfile.name}`,
      description: 'Background, focus areas, and engineering principles for Puoch Mabor Makuei.',
    };
  }

  if (pathname === '/contact') {
    return {
      kind: 'contact',
      title: `Contact | ${siteProfile.name}`,
      description: 'Contact details and professional links for Puoch Mabor Makuei.',
    };
  }

  if (pathname.startsWith('/projects/')) {
    const slug = pathname.replace('/projects/', '');
    const project = projects.find((entry) => entry.slug === slug);

    if (project) {
      return {
        kind: 'project',
        slug,
        title: `${project.name} | ${siteProfile.name}`,
        description: project.summary,
      };
    }
  }

  return {
    kind: 'not-found',
    title: `Not Found | ${siteProfile.name}`,
    description: 'The requested page could not be found.',
  };
};

function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const route = useMemo(() => resolveRoute(pathname), [pathname]);

  const commandItems = useMemo<CommandItem[]>(
    () => [
      ...navigationItems.map((item) => ({
        id: item.path,
        label: item.label,
        hint: item.description,
        path: item.path,
      })),
      ...projects.map((project) => ({
        id: project.slug,
        label: project.name,
        hint: `${project.status} | ${project.stack.join(', ')}`,
        path: getProjectPath(project.slug),
      })),
    ],
    []
  );

  const navigate = (nextPath: string) => {
    const target = normalizePath(nextPath);

    if (target === pathname) {
      setIsPaletteOpen(false);
      return;
    }

    startTransition(() => {
      window.history.pushState({}, '', target);
      setPathname(target);
      setIsPaletteOpen(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = route.title;

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.content = route.description;
    }
  }, [route.description, route.title]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (event.key === '/' && !isTypingTarget) {
        event.preventDefault();
        setIsPaletteOpen(true);
      }

      if (event.key === 'Escape') {
        setIsPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const content = (() => {
    switch (route.kind) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'project': {
        const project = projects.find((entry) => entry.slug === route.slug);
        return project ? <ProjectDetailPage onNavigate={navigate} project={project} /> : <NotFoundPage onNavigate={navigate} />;
      }
      default:
        return <NotFoundPage onNavigate={navigate} />;
    }
  })();

  return (
    <>
      <AppShell currentPath={pathname} onNavigate={navigate} onOpenPalette={() => setIsPaletteOpen(true)}>
        {content}
      </AppShell>
      <CommandPalette
        commands={commandItems}
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelect={navigate}
      />
    </>
  );
}

export default App;
