import {Box, Typography} from "@mui/material";

const IamContentContainer = () => {
    return(
        <Box
            sx={{
                textAlign: "center",
                py: 5,
                backgroundColor: "primary.main",
                color: "white",
            }}
        >
            <Typography variant="h3" gutterBottom>
                Hi, I'm <span style={{ fontWeight: "bold" }}>Rishi Indolia</span>
            </Typography>
            <Typography variant="h5">
                Software Development Engineer | Building Scalable & Interactive Applications
            </Typography>
        </Box>
    );
}

export default IamContentContainer;
