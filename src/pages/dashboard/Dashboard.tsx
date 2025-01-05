import React from "react";
import { Typography } from "@mui/material";
const Dashboard: React.FC = () => {
  return (
    <div>
      <div className='min-h-screen flex justify-center items-center bg-blue-500'>
        <h1 className='text-4xl text-white font-bold'>
          Tailwind CSS is Working!
        </h1>
        <Typography variant='h1'> hello i am MUI</Typography>
      </div>
    </div>
  );
};

export default Dashboard;
