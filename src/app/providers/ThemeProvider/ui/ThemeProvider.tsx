import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants/localStorage';
import { Theme } from 'shared/constants/theme';
import { ThemeContext } from '/shared/lib/context/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
