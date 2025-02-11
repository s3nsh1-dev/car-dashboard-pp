import { styled } from "@mui/system"; // Correct import
import { Box } from "@mui/material";

export const NavbarLinks = styled(Box)(() => ({
  color: "white",
  textTransform: "none",
  "&:hover": {
    color: "grey", // bluish fade out
  },
}));
