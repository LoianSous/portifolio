import { motion } from 'framer-motion';
import { HolographicCard } from '../components/HolographicCard';
import { SectionTitle } from '../components/SectionTitle';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { CheckCircle2, Server, MapPin, Lightbulb, Layout } from 'lucide-react';

const timeline = [
  { year: '2023 Fevereiro', event: 'Primeiro contato com a programação', description: 'Faculdade AEMS.' },
  { year: '2023 Julho', event: 'Ingresso no curso do IFMS', description: 'Tecnologia em Análise e desenvolvimento de sistemas' },
  { year: '2024 Novembro', event: 'Primeiro projeto pessoal', description: 'Site de um cardapio online' },
  { year: '2025 julho', event: 'Segundo projeto pessoal', description: 'Sistema de painel informativo para escola.' },
  { year: '2025 Novembro', event: 'Portifólio', description: 'Meu primeiro portifólio e curriculo na area.' },
];

const passiveSkills = [
  { name: 'HTML & CSS', description: 'Consigo estruturar e estilizar páginas web de forma eficiente' },
  { name: 'JavaScript', description: 'Conhecimentos basicos e importantes para web' },
  { name: 'Framework/Bibliotecas', description: 'Crio interfaces modernas utilizando bibliotecas como React' },
  { name: 'Versionamento (Git/GitHub)', description: 'Utilizo o GitHub para apresentar meus projetos pessoais e trabalhar em equipe.' },
];

const activeSkills = [
  { name: 'Arquitetura de Servidor', description: 'Construo estruturas de backend escaláveis e organizadas' },
  { name: 'Gerenciamento de Banco de Dados', description: 'Projeto e consulto bancos SQL e NoSQL, MongoDB, Postgresql.' },
  { name: 'Autenticação & Segurança', description: ' Posso implementar sistemas de login seguros e proteger dados sensíveis' },
  { name: 'Desenvolvimento de APIs', description: 'Consigo criar e consumir APIs RESTful para comunicação eficiente' },
];

export function About() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Minha história" subtitle="Vou contar sobre minha trajetória como desenvolvedor" />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <HolographicCard delay={0.2}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6" style={{ color: colors.primary }} />
                <h3 className="text-xl font-bold uppercase" style={{ color: colors.primary }}>
                  Inicio da minha historia na programação
                </h3>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed text-justify px-2 sm:px-4">
                <p>
                  Iniciei meus estudos em programação em 2023 na AEMS, em Três Lagoas – MS, onde tive meu primeiro contato com lógica de programação em C, documentação e design de interfaces.
Após o primeiro semestre, me retirei e ingressei no curso de Análise e Desenvolvimento de Sistemas no IFMS – Campus Três Lagoas, onde aprofundei meus conhecimentos e descobri minha afinidade com o desenvolvimento web.
                </p>
                <p>
                  Hoje, tenho foco especial em React e gosto de criar qualquer tipo de solução digital — desde interfaces simples até layouts complexos e bem trabalhados. Acredito que a programação abre possibilidades infinitas: tudo o que imaginamos pode ser construído.
                </p>
                <p>
                  Atualmente atuo como desenvolvedor full-stack, trabalhando tanto no frontend — com foco em React — quanto no backend, criando soluções completas e bem estruturadas. Gosto de desenvolver todo tipo de aplicação, pois acredito que a programação abre portas para transformar qualquer ideia em algo real, desde layouts simples até sistemas complexos e visualmente atraentes.
                </p>
              </div>
            </div>
          </HolographicCard>

          <HolographicCard delay={0.4}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6" style={{ color: colors.primary }} />
                <h3 className="text-xl font-bold uppercase" style={{ color: colors.primary }}>
                  Minha trajetória
                </h3>
              </div>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0"
                        style={{
                          borderColor: colors.primary,
                          backgroundColor: colors.darker,
                          boxShadow: `0 0 10px ${colors.glow}40`,
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.glow }} />
                      </div>
                      {index < timeline.length - 1 && (
                        <div
                          className="w-0.5 h-full mt-2"
                          style={{ backgroundColor: colors.cardBorder }}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="font-bold text-sm" style={{ color: colors.glow }}>
                        {item.year}
                      </div>
                      <div className="font-semibold text-white">{item.event}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </HolographicCard>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <HolographicCard delay={0.6}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: `0 0 15px ${colors.glow}`,
                  }}
                >
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase" style={{ color: colors.primary }}>
                  Conhecimento frontend
                </h3>
              </div>
              <div className="space-y-3">
                {passiveSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-lg border"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div className="font-semibold text-white mb-1">{skill.name}</div>
                    <div className="text-sm text-gray-400">{skill.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </HolographicCard>

          <HolographicCard delay={0.8}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: colors.accent,
                    boxShadow: `0 0 15px ${colors.accent}80`,
                  }}
                >
                  <Server className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase" style={{ color: colors.primary }}>
                  Conhecimento backend
                </h3>
              </div>
              <div className="space-y-3">
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-lg border"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: colors.cardBorder,
                    }}
                  >
                    <div className="font-semibold text-white mb-1">{skill.name}</div>
                    <div className="text-sm text-gray-400">{skill.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </HolographicCard>
        </div>
      </div>
    </section>
  );
}
