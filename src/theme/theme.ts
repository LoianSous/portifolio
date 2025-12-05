export const theme = {
  colors: {
    system: {
      primary: '#00d4ff',
      secondary: '#0099ff',
      accent: '#7c3aed',
      glow: '#00f0ff',
      dark: '#0a0e27',
      darker: '#050814',
      card: 'rgba(10, 14, 39, 0.7)',
      cardBorder: 'rgba(0, 212, 255, 0.3)',
    },
    gate: {
      primary: '#a855f7',
      secondary: '#7c3aed',
      accent: '#ec4899',
      glow: '#c084fc',
      dark: '#0f0520',
      darker: '#050208',
      card: 'rgba(15, 5, 32, 0.7)',
      cardBorder: 'rgba(168, 85, 247, 0.3)',
    },
    rarity: {
      comum: '#9ca3af',
      raro: '#3b82f6',
      epico: '#a855f7',
      lendario: '#eab308',
    },
  },
  shadows: {
    glow: '0 0 20px rgba(0, 212, 255, 0.5)',
    glowHover: '0 0 30px rgba(0, 212, 255, 0.7)',
    card: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
};

export type ThemeMode = 'system' | 'gate';
