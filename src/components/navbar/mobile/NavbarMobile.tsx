import React, { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import IconButton from "@mui/material/IconButton";

interface NavbarMobileProps {
  showDropdown: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ showDropdown }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isMobileView) {
      setMobileOpen(false);
    }
  }, [isMobileView]);

  const toggleMobileView = () => {
    showDropdown();
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton
        edge='start'
        onClick={toggleMobileView}
        aria-label={mobileOpen ? "close menu" : "open menu"}
        aria-expanded={mobileOpen}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {mobileOpen ? (
          <CloseFullscreenIcon sx={{ color: "white" }} />
        ) : (
          <MenuOpenIcon sx={{ color: "white" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default NavbarMobile;
