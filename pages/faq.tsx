import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "styles/theme";
import { NextPage } from "next";

const FAQ: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What is question 1 ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ipsum nulla quos architecto ab mollitia corporis accusantium vitae
              cupiditate consequatur asperiores iste atque, sed dignissimos
              possimus amet illo est praesentium.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What is question 2 ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ipsum nulla quos architecto ab mollitia corporis accusantium vitae
              cupiditate consequatur asperiores iste atque, sed dignissimos
              possimus amet illo est praesentium.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What is question 3 ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ipsum nulla quos architecto ab mollitia corporis accusantium vitae
              cupiditate consequatur asperiores iste atque, sed dignissimos
              possimus amet illo est praesentium.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What is question 4 ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ipsum nulla quos architecto ab mollitia corporis accusantium vitae
              cupiditate consequatur asperiores iste atque, sed dignissimos
              possimus amet illo est praesentium.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              What is final question ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              ipsum nulla quos architecto ab mollitia corporis accusantium vitae
              cupiditate consequatur asperiores iste atque, sed dignissimos
              possimus amet illo est praesentium.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
