import React, {useContext} from "react";
import {ThemeModeContext} from "../context/ThemeModeProvider";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {TopNavThemeModeButton} from "./TopNavThemeModeButton.tsx";
import {TopNavLeftIcon} from "./TopNavLeftIcon.tsx";
import TopNavAboutButton from "./TopNavAboutButton.tsx";
import TopNavSkillsButton from "./TopNavSkillsButton.tsx";
import TopNavProjectButton from "./TopNavProjectButton.tsx";
import TopNavContactButton from "./TopNavContactButton.tsx";

const TopNavBar: React.FC = () => {
    const themeContext = useContext(ThemeModeContext);

    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }
    const {themeMode} = themeContext;
    return (
        <AppBar position="sticky"
                sx={{
                    backgroundColor: themeMode === 'dark' ? 'rgba(20, 23, 26, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)' // For Safari support
                }}
        >
            <Toolbar>
                <TopNavLeftIcon/>
                <Typography variant="h6" sx={{flexGrow: 1}}></Typography>
                <TopNavAboutButton/>
                <TopNavSkillsButton/>
                <TopNavProjectButton/>
                <TopNavContactButton/>
                <TopNavThemeModeButton/>
            </Toolbar>
        </AppBar>
    );
};

export default TopNavBar;