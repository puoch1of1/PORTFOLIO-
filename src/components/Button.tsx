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
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white';

  const variants = {
    primary:
      'bg-black text-white hover:bg-gray-800 focus:ring-black',
    secondary:
      'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-700',
    outline:
      'border-2 border-black/20 text-black hover:border-black hover:bg-black hover:text-white focus:ring-black',
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

