import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const getInitialDarkPreference = () => {
    const storedPreference = window.localStorage.getItem('theme:isDark');
    if (storedPreference !== null) {
      return storedPreference === 'true';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState(getInitialDarkPreference);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    window.localStorage.setItem('theme:isDark', String(isDark));
  }, [isDark]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event) => {
      const storedPreference = window.localStorage.getItem('theme:isDark');
      if (storedPreference === null) {
        setIsDark(event.matches);
      }
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};