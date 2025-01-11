import {Box, Link, Typography} from "@mui/material";

const ContactContentContainer = () => {
    return (

        <Box id="contact" sx={{py: 5}}>
            <Typography variant="h4" gutterBottom color="textSecondary">
                Contact
            </Typography>
            <Typography color={"textSecondary"} >Email: rishipalindolia@gmail.com</Typography>
            <Typography color={"textSecondary"} >
                LinkedIn:{" "}
                <Link href="https://www.linkedin.com/in/rishiindolia/" target="_blank">
                    linkedin.com/in/indolia
                </Link>
            </Typography>
            <Typography color={"textSecondary"} >
                GitHub:{" "}
                <Link href="https://github.com/indolia" target="_blank">
                    github.com/indolia
                </Link>
            </Typography>
        </Box>
    );
}

export default ContactContentContainer;