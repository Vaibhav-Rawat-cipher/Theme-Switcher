// src/context/theme.jsx
import { createContext, useContext } from "react";

// 1. Create context with default values (only used as fallback)
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2. Export Provider
export const ThemeProvider = ThemeContext.Provider;

// 3. Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
