import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, Button, useTheme } from "@mui/material";
import Header from "components/Header";
import { NextPage } from "next";
import React from "react";
import { tokens } from "styles/theme";

const Dashboard: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
