import type { AnchorHTMLAttributes, MouseEvent } from 'react';

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  isCurrent?: boolean;
  onNavigate: (path: string) => void;
};

function AppLink({ children, to, isCurrent, onNavigate, className, ...rest }: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      rest.target === '_blank' ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    event.preventDefault();
    onNavigate(to);
  };

  const classes = [className, isCurrent ? 'is-current' : ''].filter(Boolean).join(' ');

  return (
    <a href={to} className={classes} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default AppLink;
