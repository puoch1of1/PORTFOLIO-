import type { ReactNode } from 'react';
import { navigationItems, siteProfile } from '../data/site';
import AppLink from './AppLink';

type AppShellProps = {
  children: ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenPalette: () => void;
};

function AppShell({ children, currentPath, onNavigate, onOpenPalette }: AppShellProps) {
  return (
    <div className="site-frame">
      <header className="shell">
        <div className="shell__bar">
          <div>
            <p className="shell__eyebrow">personal system interface</p>
            <p className="shell__identity">{siteProfile.name}</p>
          </div>

          <button className="command-button" type="button" onClick={onOpenPalette} aria-label="Open command palette">
            <span>/</span>
            <span>navigate</span>
          </button>
        </div>

        <div className="shell__meta">
          <span>role: {siteProfile.role}</span>
          <span>focus: data + infrastructure</span>
          <span>route: {currentPath}</span>
        </div>

        <nav className="shell__nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <AppLink
              key={item.path}
              className="nav-link"
              isCurrent={currentPath === item.path}
              onNavigate={onNavigate}
              to={item.path}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <span>{siteProfile.name}</span>
        <span>{siteProfile.location}</span>
        <span>Press / to navigate</span>
      </footer>
    </div>
  );
}

export default AppShell;
