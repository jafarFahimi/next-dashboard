import { Dispatch, SetStateAction, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../styles/theme";

type ItemType = {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const Item = ({ title, to, icon, selected, setSelected }: ItemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    // MenuItem has its own hover effect // rootStyles hover took 10 hr!
    <MenuItem
      rootStyles={{
        color: colors.grey[100],
        backgroundColor: colors.primary[400],
        ":hover": {
          color: colors.primary[300],
          backgroundColor: "black",
          opacity: "0.90",
          textDecoration: "underline",
        },
      }}
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      href={to}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

// Type '{ isSidebar: boolean; }' is not assignable to type 'IntrinsicAttributes' ;
// if React.FC=(props:any) => {}
const SidebarComp: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true); // wether sidebar is collapsed or not.
  const [selected, setSelected] = useState("Dashboard"); //specify which page we r at.
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <Sidebar
        style={{
          position: `${!isCollapsed && !isNonMobile ? "absolute" : "relative"}`,
          left: "0",
          top: "0",
        }}
        defaultCollapsed={isCollapsed}
      >
        <Menu
          style={{
            backgroundColor: colors.primary[400],
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{}}
            rootStyles={{
              margin: "10px 0 12px 0",
              color: colors.grey[100],
              backgroundColor: colors.primary[400],
              ":hover": {
                color: colors.primary[300],
                backgroundColor: "black",
              },
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">ADMIN</Typography>
                <span onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </span>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="User Profile"
                  width={100}
                  height={100}
                  src="/images/people(3).png"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Jafar Fahimi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Web Team Leader
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComp;
