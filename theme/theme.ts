// src/theme/theme.ts

export const COLORS = {
  background: "#F7F5F0",
  surface: "#FFFFFF",

  text: {
    primary: "#181817",
    secondary: "#6F6C65",
  },

  brand: {
    primary: "#344A3A",
    light: "#DDE6DC",
  },

  accent: {
    primary: "#C96B52",
  },

  border: "#E5E1D8",
} as const;

export const FONTS = {
  heading: "Sora",
  body: "Inter",
} as const;

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

export const SHADOWS = {
  soft: {
    shadowColor: "#181817",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 4,
  },
} as const;

export const THEME = {
  colors: COLORS,
  fonts: FONTS,
  radius: RADIUS,
  shadows: SHADOWS,
} as const;

export default THEME;