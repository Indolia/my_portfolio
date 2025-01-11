import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Grid,
    Button,
    Link,
    Paper,
} from "@mui/material";

const Portfolio = () => {
    return (
        <>
            {/* Header */}
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Portfolio | Software Development Engineer
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="lg">
                {/* Hero Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        py: 5,
                        bgcolor: "primary.main",
                        color: "white",
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        Hi, I'm <span style={{ fontWeight: "bold" }}>John Doe</span>
                    </Typography>
                    <Typography variant="h5">
                        Software Development Engineer | Building Scalable & Interactive Applications
                    </Typography>
                </Box>

                {/* Navigation */}
                <Box
                    component="nav"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 2,
                        bgcolor: "secondary.light",
                    }}
                >
                    <Button color="primary" href="#about">
                        About
                    </Button>
                    <Button color="primary" href="#skills">
                        Skills
                    </Button>
                    <Button color="primary" href="#projects">
                        Projects
                    </Button>
                    <Button color="primary" href="#contact">
                        Contact
                    </Button>
                </Box>

                {/* About Section */}
                <Box id="about" sx={{ py: 5 }}>
                    <Typography variant="h4" gutterBottom>
                        About Me
                    </Typography>
                    <Typography>
                        I'm a passionate software engineer with expertise in building modern applications
                        using technologies like React, React Native, Swift, C++, Go, and Kubernetes. My goal
                        is to craft scalable and maintainable solutions for web, mobile, and backend systems.
                    </Typography>
                </Box>

                {/* Skills Section */}
                <Box id="skills" sx={{ py: 5 }}>
                    <Typography variant="h4" gutterBottom>
                        Skills
                    </Typography>
                    <Grid container spacing={2}>
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
                            <Grid item xs={6} sm={4} md={3} key={skill}>
                                <Paper sx={{ padding: 2, textAlign: "center" }}>{skill}</Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Projects Section */}
                <Box id="projects" sx={{ py: 5 }}>
                    <Typography variant="h4" gutterBottom>
                        Projects
                    </Typography>
                    <Grid container spacing={4}>
                        {[
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
                            <Grid item xs={12} md={4} key={project.title}>
                                <Paper sx={{ padding: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography>{project.description}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Contact Section */}
                <Box id="contact" sx={{ py: 5 }}>
                    <Typography variant="h4" gutterBottom>
                        Contact
                    </Typography>
                    <Typography>Email: john.doe@example.com</Typography>
                    <Typography>
                        LinkedIn:{" "}
                        <Link href="https://www.linkedin.com/in/johndoe/" target="_blank">
                            linkedin.com/in/johndoe
                        </Link>
                    </Typography>
                    <Typography>
                        GitHub:{" "}
                        <Link href="https://github.com/johndoe" target="_blank">
                            github.com/johndoe
                        </Link>
                    </Typography>
                </Box>
            </Container>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    textAlign: "center",
                    py: 2,
                    bgcolor: "grey.900",
                    color: "white",
                    marginTop: 4,
                }}
            >
                <Typography variant="body2">© 2025 John Doe. All rights reserved.</Typography>
            </Box>
        </>
    );
};

export default Portfolio;