import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { useState } from 'react';

interface SkillIconProps {
  icon?: LucideIcon;
  name: string;
  level?: number;
  rarity?: 'comum' | 'raro' | 'epico' | 'lendario';
  delay?: number;
  image?: string;
}

export function SkillIcon({ icon: Icon, name, level, rarity = 'raro', delay = 0, image, }: SkillIconProps) {
  const { mode } = useTheme();
  const colors = theme.colors[mode];
  const [isHovered, setIsHovered] = useState(false);
  const rarityColor = theme.colors.rarity[rarity];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-lg flex items-center justify-center relative cursor-pointer"
        style={{
          backgroundColor: colors.card,
          borderWidth: 2,
          borderColor: rarityColor,
          boxShadow: `0 0 15px ${rarityColor}60`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg" />


        {image ? (
          <img
            src={image}
            alt={name}
            className="relative z-10 w-10 h-10 object-contain"
            loading="lazy"
            draggable={false}
          />
        ) : Icon ? (
          <Icon className="w-10 h-10 relative z-10" style={{ color: rarityColor }} />
        ) : (
          <div className="relative z-10 text-xs text-gray-400">N/A</div>
        )}


        {level && (
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2"
            style={{
              backgroundColor: colors.darker,
              borderColor: rarityColor,
              color: rarityColor,
            }}
          >
            {level}
          </div>
        )}
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded whitespace-nowrap text-sm font-medium z-50"
          style={{
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: colors.cardBorder,
            color: colors.glow,
            boxShadow: theme.shadows.glow,
          }}
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  );
}
