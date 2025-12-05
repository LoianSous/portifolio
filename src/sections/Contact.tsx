import { motion } from 'framer-motion';
import { HolographicCard } from '../components/HolographicCard';
import { SectionTitle } from '../components/SectionTitle';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { Mail, Github, Linkedin, Send, Scroll } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <section id="contato" className="min-h-screen px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Contato" subtitle="Fale comigo" />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <HolographicCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Scroll className="w-6 h-6" style={{ color: colors.primary }} />
                  <h3 className="text-2xl font-bold uppercase" style={{ color: colors.primary }}>
                    Pedir tarefa
                  </h3>
                </div>

                <p className="text-gray-400 mb-8">
                  Envie uma proposta de missão. Todas as missões são analisadas e aceitas com base no nível de dificuldade e nas recompensas potenciais. Tempo de resposta: 24 a 48 horas.
                </p>

                <form action="https://formsubmit.co/loian9109@gmail.com"
                  method="POST" className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://loiansous.github.io/portfolio/sucesso" />
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors.primary }}>
                      Seu nome
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: colors.darker,
                        borderColor: colors.cardBorder,
                        color: 'white',
                      }}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors.primary }}>
                      Seu email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: colors.darker,
                        borderColor: colors.cardBorder,
                        color: 'white',
                      }}
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors.primary }}>
                      Detalhes da tarefa
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{
                        backgroundColor: colors.darker,
                        borderColor: colors.cardBorder,
                        color: 'white',
                      }}
                      placeholder="Me diga o que você precisa..."
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.darker,
                      boxShadow: `0 0 20px ${colors.glow}60`,
                    }}
                  >
                    <Send className="w-5 h-5" />
                    Enviar pedido de tarefa
                  </motion.button>
                </form>
              </div>
            </HolographicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <HolographicCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6" style={{ color: colors.primary }} />
                  <h3 className="text-2xl font-bold uppercase" style={{ color: colors.primary }}>
                    Contato direto
                  </h3>
                </div>

                <div className="space-y-4">
                  <div
                    className="p-4 rounded-lg border"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-white font-medium">loian9109@gmail.com</div>
                  </div>

                  <div
                    className="p-4 rounded-lg border"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div className="text-sm text-gray-400 mb-1">Localização</div>
                    <div className="text-white font-medium">Brasil, MS</div>
                  </div>

                  <div
                    className="p-4 rounded-lg border"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div className="text-sm text-gray-400 mb-1">Disponibilidade</div>
                    <div className="text-white font-medium">Disponivel para trabalhos.</div>
                  </div>
                </div>
              </div>
            </HolographicCard>

            <HolographicCard>
              <div className="p-8">
                <h3 className="text-xl font-bold uppercase mb-6" style={{ color: colors.primary }}>
                  Links interessantes
                </h3>

                <div className="space-y-3">
                  <motion.a
                    whileHover={{ scale: 1.02, x: 5 }}
                    href="https://github.com/LoianSous"
                    className="flex items-center gap-4 p-4 rounded-lg border transition-all"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: colors.card,
                        borderWidth: 1,
                        borderColor: colors.primary,
                      }}
                    >
                      <Github className="w-6 h-6" style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">GitHub</div>
                      <div className="text-sm text-gray-400">Veja meus projetos</div>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02, x: 5 }}
                    href="https://www.linkedin.com/in/loian-souza-8716081b9"
                    className="flex items-center gap-4 p-4 rounded-lg border transition-all"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: colors.card,
                        borderWidth: 1,
                        borderColor: colors.primary,
                      }}
                    >
                      <Linkedin className="w-6 h-6" style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">LinkedIn</div>
                      <div className="text-sm text-gray-400">Minha rede de perfil profissional</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </HolographicCard>

            <HolographicCard>
              <div className="p-6">
                <div
                  className="text-center p-4 rounded-lg"
                  style={{
                    backgroundColor: colors.darker,
                    borderWidth: 1,
                    borderColor: colors.primary,
                  }}
                >
                  <div className="text-sm text-gray-400 mb-2">Tempo Médio de Resposta</div>
                  <div className="text-2xl font-bold" style={{ color: colors.glow }}>
                    48 Horas
                  </div>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
