import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "styles/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode1 = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery("(min-width:400px)");

  return (
    <Box
      display="flex"
      flexDirection={`${isNonMobile ? "row" : "column"}`}
      alignItems={`${isNonMobile ? "start" : "end"}`}
      justifyContent="space-between"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        marginY={`${isNonMobile ? "0" : "5px"}`}
        width={`${isNonMobile ? "auto" : "100%"}`}
        bgcolor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode1?.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
