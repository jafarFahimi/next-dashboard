import { Box } from "@mui/material";
import Header from "components/Header";
import LineChart from "components/LineChart";
import { NextPage } from "next";

const Line: NextPage = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart isCustomLineColors={false} isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Line;
