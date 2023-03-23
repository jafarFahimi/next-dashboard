import { Box } from "@mui/material";
import BarChart from "components/BarChart";
import Header from "components/Header";
import { NextPage } from "next";
import React from "react";

const BarPage: NextPage = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="simple Bar chart from nivo.rocks" />
      <Box height="75vh">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default BarPage;
