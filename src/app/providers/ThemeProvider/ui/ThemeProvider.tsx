import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localStorage';
import { Theme } from 'shared/const/theme';
import { ThemeContext } from 'shared/lib/context/ThemeContext';


const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

  interface ThemeProviderProps {
    initialTheme?: Theme;
  }

  export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme,
  }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

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
