import React from "react";
import SiteDescription from "../components/home/SiteDescription";
import UserSearchContainer from "../components/home/UserSearchContainer";
// import { Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <>
      <SiteDescription />
      <UserSearchContainer />
    </>
  );
};

export default Home;
