import {Box, Typography} from "@mui/material";

const AboutContentContainer = () => {
    return (
        <Box id="about" sx={{py: 5}}>
            <Typography variant="h4" gutterBottom color="textSecondary">
                About Me
            </Typography>
            <Typography variant="body2" color="textPrimary">
                I am a passionate software engineer with over 9 years of experience in designing, developing, and
                deploying modern applications for web, mobile, and backend systems. My expertise spans a wide range of
                technologies, including React, React Native, Swift, C++, Go, and Kubernetes. I specialize in creating
                scalable, maintainable, and high-quality solutions that meet the needs of diverse user bases.
            </Typography>
            <br></br>
            <Typography variant="body2" color="textPrimary">
                With a strong background in macOS and iOS development, I excel in designing robust systems, performing
                unit and UI testing, and implementing secure networking solutions. My extensive experience in networking
                security, IPSec, VPN technologies, and Zero Trust Network Access (ZTNA) enables me to deliver secure and
                reliable applications.
            </Typography>
            <br></br>
            <Typography variant="body2" color="textPrimary">
                I am a dedicated team player who values collaboration and leadership, consistently applying these
                principles to enhance product quality and drive successful outcomes. My goal is to craft innovative
                solutions that make a meaningful impact.
            </Typography>
        </Box>
    );
}

export default AboutContentContainer;