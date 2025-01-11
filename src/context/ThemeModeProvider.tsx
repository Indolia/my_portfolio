import React, { createContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    themeMode: ThemeMode;
    toggleThemeMode: () => void;
}

export const ThemeModeContext = createContext<ThemeContextType | null>(null);

export const ThemeModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const getSystemTheme = (): ThemeMode => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        // Load saved theme or fallback to system preference
        return (localStorage.getItem('themeMode') as ThemeMode) || getSystemTheme();
    });

    const toggleThemeMode = () => {
        setThemeMode((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newTheme);
            return newTheme;
        });
    };

    // Listen for changes in system theme preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            const systemTheme = mediaQuery.matches ? 'dark' : 'light';
            setThemeMode(systemTheme);
            localStorage.setItem('themeMode', systemTheme); // Optional: Persist system preference
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    // Update the theme on the `document` root element
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);

    return (
        <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
            {children}
        </ThemeModeContext.Provider>
    );
};