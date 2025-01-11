import {Box, Typography} from "@mui/material";

const AboutContentContainer = () => {
    return(
        <Box id="about" sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom color="textSecondary">
                About Me
            </Typography>
            <Typography variant="body2" color="textPrimary">
                I'm a passionate software engineer with expertise in building modern applications
                using technologies like React, React Native, Swift, C++, Go, and Kubernetes. My goal
                is to craft scalable and maintainable solutions for web, mobile, and backend systems.
            </Typography>
        </Box>
    );
}

export default AboutContentContainer;