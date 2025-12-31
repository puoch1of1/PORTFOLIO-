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
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark';

  const variants = {
    primary:
      'bg-accent-blue text-white hover:bg-blue-600 focus:ring-accent-blue',
    secondary:
      'bg-accent-emerald text-white hover:bg-emerald-600 focus:ring-accent-emerald',
    outline:
      'border-2 border-white/20 text-white hover:border-accent-blue hover:text-accent-blue focus:ring-accent-blue',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Component
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {Icon && <Icon size={20} />}
        {children}
      </Component>
    </motion.div>
  );
}

