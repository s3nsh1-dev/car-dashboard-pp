import React from "react";
// import RandomShit from "../../components/others/RandomShit";
import SiteDescription from "../components/home/SiteDescription";
import UserSearchContainer from "../components/home/UserSearchContainer";
const Home: React.FC = () => {
  return (
    <>
      <SiteDescription />
      <UserSearchContainer />
    </>
  );
};

export default Home;
