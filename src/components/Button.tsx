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
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-warm-50 text-sm sm:text-base';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-deep shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 focus:ring-accent',
    secondary:
      'bg-primary-dark text-white hover:bg-primary-charcoal focus:ring-primary-dark',
    outline:
      'border-2 border-accent/25 text-primary-dark hover:border-accent hover:bg-accent hover:text-white focus:ring-accent',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
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

