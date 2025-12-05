import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import eu from "../../assets/eu.jpeg";


interface CharacterProfileProps {
  delay?: number;
}

export function CharacterProfile({ delay = 0 }: CharacterProfileProps) {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative w-full max-w-sm"
      style={{ perspective: '1200px' }}
    >
      <div className="relative group">
        <motion.div
          animate={{
            boxShadow: [
              `0 0 30px ${colors.glow}, inset 0 0 30px ${colors.glow}40`,
              `0 0 50px ${colors.glow}, inset 0 0 40px ${colors.glow}60`,
              `0 0 30px ${colors.glow}, inset 0 0 30px ${colors.glow}40`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative rounded-xl overflow-hidden border-2 backdrop-blur-xl"
          style={{
            borderColor: colors.primary,
            backgroundColor: `${colors.dark}80`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="p-6 aspect-[3/4]">
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-b from-transparent to-black/50"
            >
              <div
                className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 flex items-center justify-center relative"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                }}
              >
                <img
                  src={eu}
                  alt="Foto"
                  className="w-full h-full object-cover opacity-90"
                  style={{
                    borderRadius: "8px",
                    boxShadow: `0 0 25px ${colors.glow}60`,
                  }}
                />


                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.glow}40, transparent)`,
                  }}
                />
              </div>

              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-1 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                  boxShadow: `0 0 10px ${colors.glow}`,
                }}
              />
            </motion.div>
          </div>

          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
              boxShadow: `0 0 15px ${colors.glow}`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
              boxShadow: `0 0 15px ${colors.glow}`,
            }}
          />
          <div
            className="absolute top-0 bottom-0 left-0 w-1"
            style={{
              background: `linear-gradient(180deg, transparent, ${colors.glow}, transparent)`,
              boxShadow: `0 0 15px ${colors.glow}`,
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-1"
            style={{
              background: `linear-gradient(180deg, transparent, ${colors.glow}, transparent)`,
              boxShadow: `0 0 15px ${colors.glow}`,
            }}
          />
        </motion.div>

        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -inset-4 rounded-xl border-2 pointer-events-none"
          style={{
            borderColor: colors.primary,
            boxShadow: `0 0 20px ${colors.glow}40`,
          }}
        />
      </div>
    </motion.div>
  );
}
