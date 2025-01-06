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
import NavbarIconToggle from "./mobile/NavbarIconToggle";
import DropdownMobileMenu from "./mobile/DropdownMobileMenu";

const toolbarStyles = {
  justifyContent: "space-between",
};

const NavigationBar = () => {
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
        <NavbarIconToggle
          mobileOpen={mobileOpen}
          showDropdown={toggleMobileView}
        />
      </Toolbar>
      <DropdownMobileMenu mobileOpen={mobileOpen} />
    </AppBar>
  );
};

export default NavigationBar;
