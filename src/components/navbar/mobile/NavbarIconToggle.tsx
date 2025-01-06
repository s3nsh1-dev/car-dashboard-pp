import { Box } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import IconButton from "@mui/material/IconButton";

interface NavbarMobileProps {
  mobileOpen: boolean;
  showDropdown: () => void;
}

const NavbarIconToggle: React.FC<NavbarMobileProps> = ({
  mobileOpen,
  showDropdown,
}) => {
  const handleChangeIcon = () => {
    showDropdown();
  };
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton
        edge='start'
        onClick={handleChangeIcon}
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

export default NavbarIconToggle;
