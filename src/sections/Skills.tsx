import { motion } from 'framer-motion';
import { HolographicCard } from '../components/HolographicCard';
import { SkillIcon } from '../components/SkillIcon';
import { SectionTitle } from '../components/SectionTitle';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import {
  Database,
  Server,
  Smartphone,
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  Shield,
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  BookOpen,
} from 'lucide-react';
import reactImg from '../../assets/react.png';
import tsImg from '../../assets/typescript.png';
import nextImg from '../../assets/next.png';
import vueImg from '../../assets/Vue.png';
import tailwindImg from '../../assets/Tailwind.png';
import htmlcssImg from '../../assets/html5-css3-hd.jpg';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { image: reactImg, name: 'React', level: 40, rarity: 'lendario' as const },
      { image: tsImg, name: 'TypeScript', level: 35, rarity: 'lendario' as const },
      { image: nextImg, name: 'Next.js', level: 30, rarity: 'epico' as const },
      { image: vueImg, name: 'Vue.js', level: 10, rarity: 'epico' as const },
      { image: tailwindImg, name: 'Tailwind CSS', level: 20, rarity: 'raro' as const },
      { image: htmlcssImg, name: 'HTML/CSS', level: 50, rarity: 'raro' as const },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { icon: Server, name: 'Node.js', level: 30, rarity: 'lendario' as const },
      { icon: Database, name: 'PostgreSQL', level: 30, rarity: 'epico' as const },
      { icon: Database, name: 'MongoDB', level: 25, rarity: 'epico' as const },
      { icon: Server, name: 'Express', level: 20, rarity: 'raro' as const },
      { icon: Layers, name: 'GraphQL', level: 10, rarity: 'raro' as const },
      { icon: Server, name: 'REST APIs', level: 15, rarity: 'raro' as const },
    ],
  },
  {
    title: 'DevOps & Ferramentas',
    skills: [
      { icon: GitBranch, name: 'Git', level: 40, rarity: 'lendario' as const },
      { icon: Cloud, name: 'AWS', level: 35, rarity: 'epico' as const },
      { icon: Terminal, name: 'Docker', level: 20, rarity: 'epico' as const },
      { icon: Cloud, name: 'CI/CD', level: 10, rarity: 'raro' as const },
      { icon: Terminal, name: 'Linux', level: 25, rarity: 'raro' as const },
      { icon: Shield, name: 'Security', level: 10, rarity: 'raro' as const },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { icon: Users, name: 'Liderança de Equipe', level: 50, rarity: 'epico' as const },
{ icon: MessageSquare, name: 'Comunicação', level: 60, rarity: 'epico' as const },
{ icon: Lightbulb, name: 'Resolução de Problemas', level: 70, rarity: 'lendario' as const },
{ icon: Target, name: 'Gestão de Projetos', level: 60, rarity: 'raro' as const },
{ icon: BookOpen, name: 'Ensino', level: 50, rarity: 'raro' as const },
{ icon: Smartphone, name: 'Adaptabilidade', level: 60, rarity: 'epico' as const },

    ],
  },
];

export function Skills() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Habilidades" subtitle="O que eu tenho até agora e o que pretendo desenvolver" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <HolographicCard>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: colors.glow }}>
                    5
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Total de projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.rarity.lendario }}>
                    1
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Lendarios</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.rarity.epico }}>
                    2
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Epicos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.rarity.raro }}>
                    0
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Raros</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" style={{ color: theme.colors.rarity.comum }}>
                    2
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Comum</div>
                </div>
              </div>
            </div>
          </HolographicCard>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3
                className="text-2xl font-bold mb-6 uppercase tracking-wider"
                style={{ color: colors.primary }}
              >
                {category.title}
              </h3>
              <HolographicCard>
                <div className="p-8">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillIcon
                        key={skillIndex}

                        icon={'icon' in skill ? skill.icon : undefined}
                        image={'image' in skill ? skill.image : undefined}

                        name={skill.name}
                        level={skill.level}
                        rarity={skill.rarity}
                        delay={catIndex * 0.1 + skillIndex * 0.05}
                      />
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t" style={{ borderColor: colors.cardBorder }}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Tecnologias</span>
                      <span className="font-bold" style={{ color: colors.glow }}>
                        {Math.round(
                          category.skills.reduce((sum, s) => sum + s.level, 0) / category.skills.length
                        )}
                        % Especialista
                      </span>
                    </div>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <HolographicCard>
            <div className="p-8 text-center">
              <div className="mb-4">
                <span className="text-sm text-gray-400 uppercase tracking-wider">Total de pontos de habilidades</span>
              </div>
              <div className="text-6xl font-bold mb-2" style={{ color: colors.glow, textShadow: `0 0 30px ${colors.primary}` }}>
                805
              </div>
              <div className="text-gray-400 italic">
                "A jornada nunca termina. Cada ponto de habilidade foi conquistado através da experiência."
              </div>
            </div>
          </HolographicCard>
        </motion.div>
      </div>
    </section>
  );
}
