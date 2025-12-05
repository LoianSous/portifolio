import { motion } from 'framer-motion';
import { HolographicCard } from '../components/HolographicCard';
import { CharacterProfile } from '../components/CharacterProfile';
import { CharacterStats } from '../components/CharacterStats';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { ChevronRight, Mail, Crown, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CharacterWindow() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];
  const [scanlineOpacity, setScanlineOpacity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setScanlineOpacity((prev) => (prev === 0 ? 0.1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0, scanlineOpacity, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              ${colors.glow}20 0px,
              ${colors.glow}20 1px,
              transparent 1px,
              transparent 2px
            )`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              boxShadow: [
                `0 0 20px ${colors.glow}`,
                `0 0 40px ${colors.glow}`,
                `0 0 20px ${colors.glow}`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-6 py-2 rounded-lg border-2 backdrop-blur-md mb-4"
            style={{
              borderColor: colors.primary,
              backgroundColor: colors.card,
            }}
          >
            <span
              className="text-sm font-black uppercase tracking-[4px]"
              style={{ color: colors.glow }}
            >
              ─── Sobre mim  ───
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-2"
            style={{
              color: colors.glow,
              textShadow: `0 0 30px ${colors.primary}, 0 0 60px ${colors.primary}60`,
            }}
          >
            Vou contar um pouco sobre mim...
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="h-0.5 w-24 mx-auto mt-4 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
              boxShadow: `0 0 15px ${colors.glow}`,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HolographicCard delay={0}>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="flex justify-center items-center">
                  <CharacterProfile delay={0.4} />
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Meu nome
                      </div>
                      <div
                        className="text-3xl font-black uppercase"
                        style={{ color: colors.glow }}
                      >
                        Loian de Souza Araújo
                      </div>
                    </div>

                    <div className="h-px" style={{ backgroundColor: colors.cardBorder }} />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                          Classe
                        </div>
                        <div
                          className="text-lg font-bold"
                          style={{ color: colors.primary }}
                        >
                          FULL STACK
                        </div>
                        <div className="text-xs text-gray-500">Desenvolvedor</div>
                      </div>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                          Nível
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.7,
                            type: 'spring',
                            stiffness: 80,
                          }}
                          className="text-lg font-black"
                          style={{ color: theme.colors.rarity.lendario }}
                        >
                          Iniciante
                        </motion.div>
                        <div className="text-xs text-gray-500">Junior</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                          Línguas
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <Crown className="w-5 h-5" style={{ color: theme.colors.rarity.lendario }} />
                          <span className="text-lg font-black" style={{ color: theme.colors.rarity.lendario }}>
                            Português
                          </span>
                          <Crown className="w-5 h-5" style={{ color: theme.colors.rarity.lendario }} />
                          <span className="text-lg font-black" style={{ color: theme.colors.rarity.lendario }}>
                            Inglês(Iniciante)
                          </span>
                        </motion.div>
                      </div>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                          Região
                        </div>
                        <div
                          className="text-sm font-bold italic"
                          style={{ color: colors.accent }}
                        >
                          "Brasil"
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        GitHub
                      </div>
                      <div
                        className="px-3 py-2 rounded-lg border text-sm font-semibold"
                        style={{
                          backgroundColor: colors.darker,
                          borderColor: colors.primary,
                          color: colors.primary,
                        }}
                      >
                        <a href='https://github.com/LoianSous'>https://github.com/LoianSous</a>
                      </div>
                    </div>
                  </motion.div>

                  <div className="h-px" style={{ backgroundColor: colors.cardBorder }} />

                  <CharacterStats delay={0.6} />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="../../assets/curriculo_loian.pdf"
                  download="curriculo_loian.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold uppercase tracking-wider transition-all border"
                  style={{
                    backgroundColor: colors.darker,
                    borderColor: colors.primary,
                    color: colors.primary,
                    boxShadow: `0 0 15px ${colors.glow}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${colors.glow}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${colors.glow}40`;
                  }}
                >
                  <FileText className="w-5 h-5" />
                  Baixar CV
                </motion.a>

                <motion.a
                href='#contato'
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg font-bold uppercase tracking-wider transition-all"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.darker,
                    boxShadow: `0 0 20px ${colors.glow}80`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${colors.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${colors.glow}80`;
                  }}
                >
                  <Mail className="w-5 h-5" />
                  Entrar em contato
                </motion.a>
              </motion.div>
            </div>
          </HolographicCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Faço sua',
              value: 'Documentação.',
              desc: 'Organizo e estruturo documentações claras, completas e fáceis de entender para apoiar o projeto do início ao fim',
            },
            {
              title: 'Posso te ajudar em',
              value: 'Aplicação web.',
              desc: 'Desenvolvo interfaces modernas, rápidas e responsivas, entregando experiências web eficientes e intuitivas',
            },
            {
              title: 'Skills Mastered',
              value: 'Aplicação mobile',
              desc: 'Crio aplicativos leves, funcionais e otimizados para dispositivos móveis, garantindo alto desempenho e usabilidade.',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <HolographicCard glow={false}>
                <div className="p-6 text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {stat.title}
                  </div>
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ color: colors.glow }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.desc}</div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8 }}
        className="mt-12 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-2 text-gray-400 text-sm"
        >
          <span>Veja mais informações abaixo</span>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
