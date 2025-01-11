import {Container} from "@mui/material";
import AboutContentContainer from "./AboutContentContainer.tsx";
import IamContentContainer from "./IamContentContainer.tsx";
import SkillsContentContainer from "./SkillsContentContainer.tsx";
import ProjectContentContainer from "./ProjectContentContainer.tsx";
import ContactContentContainer from "./ContactContentContainer.tsx";

const MainContentContainer = () => {
    return (
        <Container sx={{border: 1}}>
            <section id="iam">
                <IamContentContainer />
            </section>
            <section id="about">
                <AboutContentContainer />
            </section>
            <section id="skills">
                <SkillsContentContainer />
            </section>
            <section id="projects">
                <ProjectContentContainer />
            </section>
            <section id="contact">
                <ContactContentContainer />
            </section>
        </Container>
    );

}

export default MainContentContainer;