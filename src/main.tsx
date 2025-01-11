import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ElementsIds from "./utilites/ElementsIds.ts";
import { ThemeModeProvider } from "./context/ThemeModeProvider.tsx";

const rootElement = document.getElementById(ElementsIds.PORTFOLIO_ROOT_DIV_ID);

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <ThemeModeProvider>
                <App />
            </ThemeModeProvider>
        </StrictMode>
    )
} else {
    console.log("Root element not found");
}
