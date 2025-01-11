import './App.css'
import TopNavBar from "./components/TopNavBar.tsx";
import Footer from "./components/Footer.tsx";
import MainContentContainer from "./components/MainContentContainer.tsx";
import {useContext} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {ThemeModeContext} from "./context/ThemeModeProvider.tsx";


function App() {
    const themeContext = useContext(ThemeModeContext);
    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }
    const {themeMode} = themeContext;

    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <TopNavBar/>
                <MainContentContainer/>
                <Footer/>
            </ThemeProvider>
            {/*<Portfolio></Portfolio>*/}
        </>
    )
}

export default App
