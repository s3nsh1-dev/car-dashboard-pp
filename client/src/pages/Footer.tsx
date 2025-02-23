import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        width: "100%",
        py: 2,
        backgroundColor: "#222",
        color: "#fff",
      }}
    >
      <Typography variant='subtitle2' sx={{ fontSize: "0.7rem" }}>
        <span style={{ fontWeight: "bold" }}>
          © {new Date().getFullYear()} knowYourGarage!&nbsp;
        </span>
        is there to help you go in-depth of your vehicle.
      </Typography>
    </Box>
  );
};

export default Footer;
