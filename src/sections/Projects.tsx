import { motion } from 'framer-motion';
import { HolographicCard } from '../components/HolographicCard';
import { SectionTitle } from '../components/SectionTitle';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useState } from 'react';

type Rarity = 'comum' | 'raro' | 'epico' | 'lendario';

interface Project {
  name: string;
  description: string;
  challenge: string;
  solution: string;
  stack: string[];
  rarity: Rarity;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: 'Aprendendo Go',
    description: 'Aprendendo Go durante a matéria de Eletiva(Tópicos especiais em Tecnologia da Informação)',
    challenge: 'Treinar Go com Go By Example e fazer exercicios.',
    solution: 'Criar relatório com os códigos e exercicios feitos e desenvolver um projeto backend em Go utilizando GIN.',
    stack: ['Go', 'Gin', 'Relatório', 'Programação', 'Projeto'],
    rarity: 'lendario',
    github: '#',
    demo: '#',
  },
  {
    name: 'CartasAvontade',
    description: 'Projeto pessoal desenvolvido na matéria de Desenvolvimento Aplicações moveis',
    challenge: 'Aprender react native e desenvolver um aplicativo para mobile.',
    solution: 'Aplicativo desenvolvido para fazer e enviar cartas para companheiros, amigos ou familiares',
    stack: ['React Native', 'Gin', 'supabase', 'mobile'],
    rarity: 'lendario',
    github: '',
    demo: '',
  },
  {
    name: 'Site-Cardapio-Online',
    description: 'Durante a materia de atividades de extensão II tentei desenvolver um projeto pessoal para aprender sobre frameworks.',
    challenge: 'Criar um site que atende-se clientes em uma venda de cachorro quentes na minha cidade, substituindo o papel e caneta utilizados para anotar os pedidos.',
    solution: 'Sistema desenvolvido para receber pedidos e gerencia-los de modo simples e rapido.',
    stack: ['React-Vite', 'Postgressql', 'express', 'Aurora and RDS'],
    rarity: 'epico',
    github: '',
    demo: '',
  },
  {
    name: 'Sistema de painel de informações',
    description: 'Um sistema que possui um painel que apresenta imagens com informações, e painel adminitrativo para gerenciar.',
    challenge: 'Fazer um sistema que atenda o setor escolar para apresentar textos, imagens, videos, e demais noticias da escola que serão apresentados na TV em varios locais da escola.',
    solution: 'Foi desenvolvido um sistema para inserir imagens de eventos da escola e apresentar nas TVs em varios locais da instituição.',
    stack: ['Flask', 'SQLite', 'Python', 'venv'],
    rarity: 'epico',
    github: '',
    demo: '',
  },
  {
    name: 'Exercicios no Online Judge',
    description: 'Durante a materia de ferramentas de linguagem de programação foi apresentado o site Online judge para fazer exercicios em python.',
    challenge: 'Resolver de forma simples e na mão sem IA, os exercicios UVA do site, utilizando o material apresentado em aula.',
    solution: 'UVAs resolvidos: 10963, 11332, 11340, 11559, 11614, 11679, 11713, 11764, 11799, 11942, 12015, 12157, 12250, 12468, 12503, 12554, 119, 00325, 573, 591, 621, 661, 10038, 10055, 10071, 10114, 10141, 10252, 10300, 10324, 10404, 10679, 10919',
    stack: ['Python'],
    rarity: 'raro',
    github: '',
  },
  {
    name: 'TodoList',
    description: 'Como todo desenvolvedor iniciante, mandaram eu fazer um gerenciador de tarefas.',
    challenge: 'Fazer um site para adicionar e remover tarefas que podem ser concluidas e que tenham status.',
    solution: 'Fiz um TodoList simples e com um visual moderno que foi apresentado em aula para o professor.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    rarity: 'comum',
    github: '',
    demo: '',
  },
];

export function Projects() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getRarityColor = (rarity: Rarity) => theme.colors.rarity[rarity];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Inventário" subtitle="Projetos e atividades feitas" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <HolographicCard delay={0} glow={false}>
                <div
                  className="p-6 border-t-4 rounded-t-lg"
                  style={{ borderColor: getRarityColor(project.rarity) }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: getRarityColor(project.rarity) }}
                      >
                        {project.rarity}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    </div>
                    <Star
                      className="w-6 h-6"
                      style={{ color: getRarityColor(project.rarity) }}
                      fill={getRarityColor(project.rarity)}
                    />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded border"
                        style={{
                          borderColor: colors.cardBorder,
                          backgroundColor: colors.darker,
                          color: colors.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/LoianSous/Aprendendo-golang"
                        target="_blank"
  rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium flex-1"
                        style={{
                          backgroundColor: colors.darker,
                          borderWidth: 1,
                          borderColor: colors.primary,
                          color: colors.primary,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://loiansous.github.io/relatorio/"
                        target="_blank"
  rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium flex-1"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.darker,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visualizar
                      </motion.a>
                    )}
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full"
            >
              <HolographicCard>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div
                        className="text-sm font-bold uppercase tracking-wider mb-2"
                        style={{ color: getRarityColor(selectedProject.rarity) }}
                      >
                       Item {selectedProject.rarity}
                      </div>
                      <h2 className="text-3xl font-bold text-white">{selectedProject.name}</h2>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-bold text-gray-400 mb-1">Descrição</div>
                      <p className="text-white">{selectedProject.description}</p>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-gray-400 mb-1">Atividades e projeto</div>
                      <p className="text-white">{selectedProject.challenge}</p>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-gray-400 mb-1">Solução</div>
                      <p className="text-white">{selectedProject.solution}</p>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-gray-400 mb-2">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded border text-sm"
                            style={{
                              borderColor: colors.primary,
                              backgroundColor: colors.darker,
                              color: colors.glow,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.github && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-3 rounded font-medium flex-1"
                        style={{
                          backgroundColor: colors.darker,
                          borderWidth: 2,
                          borderColor: colors.primary,
                          color: colors.primary,
                        }}
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </motion.button>
                    )}
                    {selectedProject.demo && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-3 rounded font-medium flex-1"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.darker,
                        }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.button>
                    )}
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
