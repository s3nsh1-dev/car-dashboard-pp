import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";
import TraverseBox from "./TraverseBox";
import NavbarIconToggle from "./mobile/NavbarIconToggle";
import DropdownMobileMenu from "./mobile/DropdownMobileMenu";
import image from "../../../public/car-navbar.png";

const toolbarStyles = {
  justifyContent: "space-between",
};

const appBarStyles = {
  top: 20, // Push down to create a "hovering" effect
  left: "50%", // Center horizontally
  transform: "translateX(-50%)", // Center alignment fix
  width: "80%", // Shorter width
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add shadow for hover effect
  borderRadius: "10px", // Rounded corners for better design
  backgroundColor: "rgba(0,0,0,0.75)", // White background
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
    <AppBar sx={appBarStyles} color='transparent'>
      <Toolbar variant='dense' sx={toolbarStyles}>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <img width='50' height='50' src={image} alt='garage' />
        </Box>
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
