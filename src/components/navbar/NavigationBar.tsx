import { useState } from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import IconButton from "@mui/material/IconButton";
import TraverseBox from "./TraverseBox";

const NavigationBar = () => {
  const [iconShow, setIconShow] = useState(false);
  const toggleIcon = () => {
    setIconShow(!iconShow);
  };
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography>Car Showroom</Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <TraverseBox />
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            edge='start'
            onClick={toggleIcon}
            aria-label='open drawer'
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            {iconShow ? (
              <CloseFullscreenIcon sx={{ color: "white" }} />
            ) : (
              <MenuOpenIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
