import {Box, Grid2, Paper, Typography} from "@mui/material";

const ProjectContentContainer = () => {
    return (
        <Box id="projects" sx={{py: 5}}>
            <Typography variant="h4" gutterBottom color="text.secondary">
                Projects
            </Typography>
            <Grid2 container={true} spacing={4}>
                {
                    [
                        {
                            title: "Portfolio Website",
                            description: "Developed a modern web portfolio using React and TypeScript.",
                        },
                        {
                            title: "Mobile App",
                            description: "Built a cross-platform mobile app using React Native for iOS and Android.",
                        },
                        {
                            title: "Backend API",
                            description: "Created a scalable REST API using Go and deployed with Kubernetes.",
                        },
                    ].map((project) => (
                        <Grid2 size={4} key={project.title}>
                            <Paper sx={{padding: 2}}>
                                <Typography variant={"h6"} gutterBottom={true}>
                                    {project.title}
                                </Typography>
                                <Typography>{project.description}</Typography>
                            </Paper>
                        </Grid2>
                    ))
                }
            </Grid2>
        </Box>
    );
}

export default ProjectContentContainer;