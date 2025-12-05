import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

export function HolographicCard({ children, className = '', delay = 0, glow = true }: HolographicCardProps) {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`relative backdrop-blur-md rounded-lg border ${className}`}
      style={{
        backgroundColor: colors.card,
        borderColor: colors.cardBorder,
        boxShadow: glow ? `0 0 20px ${colors.primary}40, inset 0 0 20px ${colors.primary}10` : theme.shadows.card,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none" />
      {children}
    </motion.div>
  );
}
