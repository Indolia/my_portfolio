import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                textAlign: "center",
                py: 2,
                backgroundColor: "grey.900",
                color: "white",
                marginTop: 4,
            }}
        >
            <Typography variant="body2">© 2025 Rishi Indolia. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;