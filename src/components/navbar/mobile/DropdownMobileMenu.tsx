import React from "react";
import TraverseBox from "../TraverseBox";
import { Box } from "@mui/material";

interface DropdownMobileMenuProps {
  mobileOpen: boolean;
}

const mobileNavStyles = {
  display: { xs: "flex", sm: "none" },
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "grey",
  borderRadius: "10px",
};

const DropdownMobileMenu: React.FC<DropdownMobileMenuProps> = ({
  mobileOpen,
}) => {
  return (
    <Box gap={2} sx={mobileNavStyles} padding={mobileOpen ? 2 : 0}>
      {mobileOpen && <TraverseBox />}
    </Box>
  );
};

export default DropdownMobileMenu;
