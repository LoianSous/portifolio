import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';

interface StatusBarProps {
  label: string;
  value: number;
  maxValue?: number;
  delay?: number;
}

export function StatusBar({ label, value, maxValue = 100, delay = 0 }: StatusBarProps) {
  const { mode } = useTheme();
  const colors = theme.colors[mode];
  const percentage = (value / maxValue) * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium uppercase tracking-wider" style={{ color: colors.primary }}>
          {label}
        </span>
        <span className="text-sm font-bold" style={{ color: colors.glow }}>
          {value}/{maxValue}
        </span>
      </div>
      <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary})`,
            boxShadow: `0 0 10px ${colors.glow}`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
