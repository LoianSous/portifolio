import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Apresentação', href: '#home' },
  { label: 'Perfil', href: '#character' },
  { label: 'Pessoal', href: '#about' },
  { label: 'Inventario', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' },
];

export function Navigation() {
  const { mode, toggleMode } = useTheme();
  const colors = theme.colors[mode];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md"
      style={{
        backgroundColor: `${colors.dark}cc`,
        borderBottom: `1px solid ${colors.cardBorder}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold uppercase tracking-wider cursor-pointer"
            style={{ color: colors.glow, textShadow: `0 0 10px ${colors.primary}` }}
          >
           PORTIFÓLIO
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-sm font-medium uppercase tracking-wide transition-colors"
                style={{ color: colors.primary }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMode}
              className="p-2 rounded-lg"
              style={{
                backgroundColor: colors.card,
                borderWidth: 1,
                borderColor: colors.primary,
              }}
            >
              {mode === 'system' ? (
                <Moon className="w-5 h-5" style={{ color: colors.primary }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: colors.primary }} />
              )}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMode}
              className="p-2 rounded-lg"
              style={{
                backgroundColor: colors.card,
                borderWidth: 1,
                borderColor: colors.primary,
              }}
            >
              {mode === 'system' ? (
                <Moon className="w-5 h-5" style={{ color: colors.primary }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: colors.primary }} />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" style={{ color: colors.primary }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: colors.primary }} />
              )}
            </motion.button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 rounded-lg text-sm font-medium uppercase tracking-wide"
                style={{
                  backgroundColor: colors.card,
                  color: colors.primary,
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
