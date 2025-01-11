import {Box, Grid2, Paper, Typography} from "@mui/material";

const SkillsContentContainer = () => {
    return(
        <Box id="skills" sx={{ py: 5 }}>
            <Typography variant="h4" gutterBottom color="text.secondary">
                Skills
            </Typography>
            <Grid2 container spacing={2}>
                {[
                    "Swift",
                    "C++",
                    "Objective-C",
                    "React",
                    "Vite",
                    "TypeScript",
                    "React Native",
                    "Golang",
                    "Kubernetes",
                    "GitHub",
                    "Jenkins",
                ].map((skill) => (
                    <Grid2 size={3}  key={skill}>
                        <Paper sx={{ padding: 2, textAlign: "center" }}>{skill}</Paper>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}

export default SkillsContentContainer;