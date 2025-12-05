import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { theme } from '../theme/theme';
import { Mail, MapPin, Github, Linkedin, FileText, Monitor, Server, Globe, Smartphone, Puzzle } from 'lucide-react';

export function CharacterStats({ delay = 0 }) {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  // 🔹 Informações pessoais (sem barras)
  const info = [
    { icon: Mail, label: "Email", value: "loian9109@gmail.com" },
    { icon: MapPin, label: "Localização", value: "Brasil • Desenvolvedor Full-Stack" },
    { icon: Github, label: "GitHub", value: "LoianSous" },
    { icon: Linkedin, label: "LinkedIn", value: "Loian Souza" },
    { icon: FileText, label: "Currículo", value: "Clique em BAIXAR CV" },
  ];

  // 🔹 Skills com barras (0–100)
  const skills = [
  { name: "Frontend", value: 35, icon: Monitor },
  { name: "Backend", value: 30, icon: Server },
  { name: "Web", value: 40, icon: Globe },
  { name: "Mobile", value: 35, icon: Smartphone },
  { name: "Resolução de Problemas", value: 50, icon: Puzzle },
];

  return (
    <div className="space-y-10">
      
      {/* =============== INFORMAÇÕES PESSOAIS ================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="space-y-4"
      >
        {info.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <Icon className="w-5 h-5" style={{ color: colors.primary }} />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: colors.glow }}>
                  {item.label}
                </span>
                <span className="text-xs text-gray-400">{item.value}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* =============== SKILLS / STATUS ================== */}
      <div className="space-y-6 pt-6 border-t" style={{ borderColor: colors.cardBorder }}>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const percentage = `${skill.value}%`;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: colors.glow }}>
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-bold" style={{ color: colors.glow }}>
                  {skill.value}
                </span>
              </div>

              <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: percentage }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary})`,
                    boxShadow: `0 0 10px ${colors.glow}`,
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* === TOTAL POWER ==== */}
        <div className="pt-4 flex items-center justify-between">
          <span className="text-xs uppercase text-gray-400 font-bold">Total de pontos</span>
          <span
            className="text-3xl font-black"
            style={{ color: colors.glow, textShadow: `0 0 15px ${colors.primary}` }}
          >
           190
          </span>
        </div>
      </div>
    </div>
  );
}
