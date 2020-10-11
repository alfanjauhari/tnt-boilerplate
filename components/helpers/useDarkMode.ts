import { useEffect, useContext } from 'react';
import { ThemeContext } from '~/utils/Context/ThemeContext';

const useDarkMode = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE', payload: !state.darkMode });
    if (state.darkMode) {
      localStorage.setItem('theme-mode', 'light');
    } else {
      localStorage.setItem('theme-mode', 'dark');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme-mode') === 'dark') {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: true });
    } else {
      dispatch({ type: 'TOGGLE_DARK_MODE', payload: false });
    }
  }, []);

  return {
    darkMode: state.darkMode,
    toggleDarkMode: toggleTheme
  };
};

export default useDarkMode;
