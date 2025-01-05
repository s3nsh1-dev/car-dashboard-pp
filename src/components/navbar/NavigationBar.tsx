import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TraverseBox from "./TraverseBox";
import NavbarMobile from "./mobile/NavbarMobile";

const toolbarStyles = {
  justifyContent: "space-between",
};

const mobileNavStyles = {
  display: { xs: "flex", sm: "none" },
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "grey",
};

const NavbarDesktop = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isMobileView) {
      setMobileOpen(false);
    }
  }, [isMobileView]);

  const toggleMobileView = () => setMobileOpen((prev) => !prev);

  return (
    <AppBar position='sticky'>
      <Toolbar sx={toolbarStyles}>
        <Typography>Car Showroom</Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <TraverseBox />
        </Box>
        <NavbarMobile showDropdown={toggleMobileView} />
      </Toolbar>
      <Box gap={2} sx={mobileNavStyles} padding={mobileOpen ? 2 : 0}>
        {mobileOpen && <TraverseBox />}
      </Box>
    </AppBar>
  );
};

export default NavbarDesktop;
