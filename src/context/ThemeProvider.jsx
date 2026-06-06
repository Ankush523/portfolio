import { useCallback, useState } from 'react';
import { ThemeContext } from './theme-context';

const THEME_COLORS = {
  light: '#F2EDE4',
  dark: '#0a0c10',
};

function applyTheme(theme) {
  const value = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', value);
  localStorage.setItem('theme', value);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[value]);

  document.documentElement.classList.add('theme-transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 400);
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  );

  const setTheme = useCallback((next) => {
    const value = next === 'dark' ? 'dark' : 'light';
    applyTheme(value);
    setThemeState(value);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
