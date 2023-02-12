import {ThemeContext} from "../lib/context/ThemeContext";
import {useContext} from "react";
import { Theme } from "shared/constants/theme";
import { LOCAL_STORAGE_THEME_KEY } from "shared/constants/localStorage";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
    }
}
