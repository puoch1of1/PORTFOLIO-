import type { ReactNode } from 'react';

type PanelProps = {
  children: ReactNode;
  title: string;
};

function Panel({ children, title }: PanelProps) {
  return (
    <section className="panel">
      <div className="panel__heading">
        <span>{title}</span>
      </div>
      <div className="panel__body">{children}</div>
    </section>
  );
}

export default Panel;
