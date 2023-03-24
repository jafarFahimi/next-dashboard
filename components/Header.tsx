import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "styles/theme";

const Header: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:400px)");

  return (
    <Box mb="30px">
      <Typography
        variant={`${isNonMobile ? "h2" : "h3"}`}
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
