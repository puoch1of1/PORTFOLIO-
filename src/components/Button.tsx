import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  className?: string;
  target?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  target,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-primary-dark';

  const variants = {
    primary:
      'bg-neutral-slate text-secondary-text border border-neutral-slate hover:bg-neutral-gray hover:border-neutral-gray focus:ring-accent-steel',
    secondary:
      'bg-accent-steel text-secondary-text border border-accent-steel hover:bg-opacity-90 focus:ring-accent-steel',
    outline:
      'border border-neutral-slate text-secondary-text hover:border-accent-steel hover:text-accent-steel focus:ring-accent-steel',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ opacity: 0.9 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <Component
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {Icon && <Icon size={18} />}
        {children}
      </Component>
    </motion.div>
  );
}

