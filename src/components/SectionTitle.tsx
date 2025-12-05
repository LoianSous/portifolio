import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2
        className="text-4xl font-bold uppercase tracking-wider mb-2"
        style={{
          color: colors.primary,
          textShadow: `0 0 20px ${colors.glow}`,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-sm uppercase tracking-wide">{subtitle}</p>
      )}
      <div
        className="h-1 w-24 mt-3 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
          boxShadow: `0 0 10px ${colors.glow}`,
        }}
      />
    </motion.div>
  );
}
