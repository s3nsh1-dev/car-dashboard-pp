import React from "react";
import SiteDescription from "../components/home/SiteDescription";
import UserSearchContainer from "../components/home/UserSearchContainer";
import { Box } from "@mui/material";
// import { Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <SiteDescription />
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "2rem 1rem" }}
      >
        <UserSearchContainer />
      </Box>
    </>
  );
};

export default Home;
