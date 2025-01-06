import React, { ReactNode } from "react";
import { Link } from "react-router";
import { Box } from "@mui/material";

interface propTypes {
  goTo: string;
  children: ReactNode;
}

const LinkBox: React.FC<propTypes> = ({ goTo, children }) => {
  return (
    <Box
      component={Link}
      to={goTo}
      sx={{ textDecoration: "none", margin: "0px 5px" }}
    >
      {children}
    </Box>
  );
};

export default LinkBox;
