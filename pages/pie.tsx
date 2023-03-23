import { Box } from "@mui/material";
import PieChart from "components/PieChart";
import Header from "components/Header";
import { NextPage } from "next";
import React from "react";

const PiePage: NextPage = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="simple Pie chart from nivo.rocks" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default PiePage;
