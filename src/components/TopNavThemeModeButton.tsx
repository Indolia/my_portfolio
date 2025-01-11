import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React, { useCallback, useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeProvider"; // Import the context

export const TopNavThemeModeButton: React.FC = () => {
    const themeContext = useContext(ThemeModeContext);

    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }

    const { themeMode, toggleThemeMode } = themeContext;

    const handleToggleTheme = useCallback(() => {
        toggleThemeMode();
    }, [toggleThemeMode]);

    return (
        <IconButton
            centerRipple={false}
            onClick={handleToggleTheme}
            color="inherit"
            aria-label={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
            sx={{
                boxShadow: 1, // You can use numbers (1-24) for predefined MUI shadow sizes
                '&:hover': {
                    boxShadow: 6, // A stronger shadow when hovering
                },
                borderRadius: 2,
            }}
        >
            {themeMode === "dark" ? (
                <LightModeIcon color="primary" />
            ) : (
                <DarkModeIcon color="primary" />
            )}
        </IconButton>
    );
};