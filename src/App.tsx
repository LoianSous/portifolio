import { ThemeProvider, useTheme } from './context/ThemeContext';
import { theme } from './theme/theme';
import { ParticleBackground } from './components/ParticleBackground';
import { LevelUpAnimation } from './components/LevelUpAnimation';
import { Navigation } from './components/Navigation';
import { Home } from './sections/Home';
import { CharacterWindow } from './sections/CharacterWindow';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function AppContent() {
  const { mode } = useTheme();
  const colors = theme.colors[mode];

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: colors.darker,
        backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.dark}40 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, ${colors.dark}40 0%, transparent 50%)`,
      }}
    >
      <LevelUpAnimation />
      <ParticleBackground />
      <Navigation />

      <div className="pt-20">
        <div id="home">
          <Home />
        </div>
        <div id="character">
          <CharacterWindow />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

      <footer
        className="border-t py-8 text-center"
        style={{
          borderColor: colors.cardBorder,
          backgroundColor: colors.dark,
        }}
      >
        <p className="text-gray-400 text-sm">
          © 2024 Shadow Monarch Portfolio. Powered by the System.
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
