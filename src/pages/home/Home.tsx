import React from "react";
import NavigationBar from "../../components/navbar/NavigationBar";
import RandomShit from "../../components/others/RandomShit";

const Home: React.FC = () => {
  return (
    <div
      style={
        {
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <p>hey i am here</p>
      <NavigationBar />
      <RandomShit />
    </div>
  );
};

export default Home;
