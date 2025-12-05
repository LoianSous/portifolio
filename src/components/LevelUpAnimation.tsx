import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { Sparkles } from 'lucide-react';

export function LevelUpAnimation() {
  const [show, setShow] = useState(true);
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 20px ${colors.glow}`,
                  `0 0 60px ${colors.glow}`,
                  `0 0 20px ${colors.glow}`,
                ],
              }}
              transition={{ duration: 1.5, repeat: 2 }}
              className="px-12 py-8 rounded-lg border-4"
              style={{
                backgroundColor: colors.dark,
                borderColor: colors.primary,
              }}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: 2, ease: 'linear' }}
                  className="inline-block mb-4"
                >
                  <Sparkles className="w-16 h-16" style={{ color: colors.glow }} />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl font-bold uppercase tracking-wider mb-2"
                  style={{
                    color: colors.glow,
                    textShadow: `0 0 30px ${colors.primary}`,
                  }}
                >
                  Bem vindo!
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl"
                  style={{ color: colors.primary }}
                >
                   ao meu portifólio.
                </motion.div>
              </div>
            </motion.div>

            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 12) * 200,
                  y: Math.sin((i * Math.PI * 2) / 12) * 200,
                }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full"
                style={{
                  backgroundColor: colors.glow,
                  boxShadow: `0 0 10px ${colors.glow}`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
