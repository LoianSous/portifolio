import { motion } from 'framer-motion';
import { HolographicCard } from '../components/HolographicCard';
import { StatusBar } from '../components/StatusBar';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { Layout, Cloud, FileText, Server, Palette } from 'lucide-react';

export function Home() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 rounded-full mb-4 border"
            style={{
              backgroundColor: colors.card,
              borderColor: colors.primary,
              color: colors.primary,
              boxShadow: `0 0 20px ${colors.glow}40`,
            }}
          >
            <span className="text-sm font-bold uppercase tracking-wider">Meu portifólio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              color: colors.glow,
              textShadow: `0 0 30px ${colors.primary}`,
            }}
          >
            Loian de S. A.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl font-semibold mb-2"
            style={{ color: colors.primary }}
          >
            DESENVOLVEDOR FULL STACK
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg text-gray-400"
          >
          Frontend • Backend • UI/UX Designer • Web Design • Documentação de projetos.
          </motion.div>
        </motion.div>

        <HolographicCard delay={1.1}>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{
                  backgroundColor: colors.glow,
                  boxShadow: `0 0 10px ${colors.glow}`,
                }}
              />
              <h3
                className="text-xl font-bold uppercase tracking-wider"
                style={{ color: colors.primary }}
              >Áreas e nível de afinidade
                
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Layout className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Frontend</span>
                </div>
                <StatusBar label="Stack frontend" value={35} delay={1.3} />

                <div className="flex items-center gap-3 mb-2 mt-6">
                  <Server className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Backend</span>
                </div>
                <StatusBar label="Stack backend" value={30} delay={1.4} />

                <div className="flex items-center gap-3 mb-2 mt-6">
                  <Palette className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Design</span>
                </div>
                <StatusBar label="Ferramentas de design" value={50} delay={1.5} />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Documentação</span>
                </div>
                <StatusBar label="Documentação técnica" value={40} delay={1.6} />

                <div className="flex items-center gap-3 mb-2 mt-6">
                  <Cloud className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-sm text-gray-300 uppercase tracking-wide">DevOps</span>
                </div>
                <StatusBar label="Automação" value={30} delay={1.7} />

                <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: colors.darker }}>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Total de pontos</div>
                    <div
                      className="text-3xl font-bold"
                      style={{
                        color: colors.glow,
                        textShadow: `0 0 20px ${colors.primary}`,
                      }}
                    >
                      185
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="mt-6 pt-6 border-t"
              style={{ borderColor: colors.cardBorder }}
            >
              {/* LEGENDA DOS NÍVEIS */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.85 }}
  className="mt-10"
>
  <div
    className="p-4 rounded-lg text-center"
    style={{
      backgroundColor: colors.darker,
      border: `1px solid ${colors.cardBorder}`,
      boxShadow: `0 0 15px ${colors.glow}20`,
    }}
  >
    <h4
      className="text-sm font-bold uppercase tracking-wider mb-3"
      style={{ color: colors.primary }}
    >
      Escala de Nível (0–100)
    </h4>

    <div className="flex flex-col md:flex-row justify-center gap-4 text-gray-400 text-sm">
      <div>
        <span
          className="font-semibold"
          style={{ color: colors.glow }}
        >
          0–40
        </span>{" "}
        — Iniciante
      </div>
      <div>
        <span
          className="font-semibold"
          style={{ color: colors.glow }}
        >
          41–70
        </span>{" "}
        — Intermediário
      </div>
      <div>
        <span
          className="font-semibold"
          style={{ color: colors.glow }}
        >
          71–100
        </span>{" "}
        — Avançado
      </div>
    </div>
  </div>
</motion.div>

              <p className="text-gray-400 text-center italic">
                "Eu aprendi programação, agora posso construir qualquer coisa no digital."
              </p>
            </motion.div>
          </div>
        </HolographicCard>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="text-center mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 rounded-full p-1" style={{ borderColor: colors.primary }}>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 rounded-full mx-auto"
                style={{ backgroundColor: colors.glow }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
