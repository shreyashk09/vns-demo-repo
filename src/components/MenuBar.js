import * as React from "react";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import SettingsInputSvideoIcon from "@mui/icons-material/SettingsInputSvideo";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ForumIcon from "@mui/icons-material/Forum";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [main_open, setmain_open] = React.useState(false);

  const handlesetmain_open = () => {
    setmain_open((prevOpen) => !prevOpen);
  };

  const list = (anchor) => (
    <Box className="scroll" sx={{ width: 270, overflowX: "hidden" }}>
      <List
        className="text-center"
        style={{ backgroundColor: "#023047", height: 1090, maxWidth: 400 }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img alt="imagestag"
            className="text-center"
            style={{ width: 89 }}
            src="https://ik.imagekit.io/qxlm3dukn/VIDRONA_ulgL1xS2YNa.jpg?updatedAt=1636630773056"
          />
        </div>
        <p style={{ fontWeight: 600, fontSize: 32, color: "white" }}>
          vNautilus
        </p>
        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          <Stack spacing={5}>
            <Stack direction="row" spacing={4}>
              <HomeIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 100,
                  position: "absolute",
                  left: 24,
                }}
              >
                HOME
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <AccountTreeIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                PROJECTS
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <img alt="imagestag" style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                ASSETS
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <img alt="imagestag" style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                VEGETATIVE HEALTH
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <img alt="imagestag" style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                GNSS
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <HomeRepairServiceIcon
                style={{ position: "absolute", left: 19 }}
              />
              <div style={{ color: "white" }}>
                <Button
                  style={{ color: "white", marginTop: -4 }}
                  onClick={handlesetmain_open}
                >
                  ASSET MAINTANANCE{" "}
                  <span>
                    <KeyboardArrowDown />
                  </span>
                </Button>
                <Collapse
                  component="li"
                  in={main_open}
                  timeout="auto"
                  unmountOnExit
                >
                  <Button
                    href="#"
                    style={{ color: "#CCCCCC", textTransform: "capitalize" }}
                  >
                    Maintenance Planning
                  </Button>
                  <Button
                    href="#"
                    style={{ color: "#CCCCCC", textTransform: "capitalize" }}
                  >
                    Maintenance Scheduling
                  </Button>
                  <Button
                    href="#"
                    style={{ color: "#CCCCCC", textTransform: "capitalize" }}
                  >
                    Maintenance Performance
                  </Button>
                  <Button
                    href="#"
                    style={{ color: "#CCCCCC", textTransform: "capitalize" }}
                  >
                    Maintenance Performance
                  </Button>
                </Collapse>
              </div>
            </Stack>
            <Stack direction="row" style={{ marginTop: 10 }} spacing={4}>
              <AddRoadIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                CONDUCTOR
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <SettingsInputSvideoIcon
                style={{ position: "absolute", left: 19 }}
              />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                RELIABILITY
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <AnalyticsIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                ANALYTICS
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <WorkOutlineIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                LIVE LINE WORK
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <AssignmentTurnedInIcon
                style={{ position: "absolute", left: 19 }}
              />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                TASKS
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <WaterfallChartIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                OUTAGE
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <ConnectWithoutContactIcon
                style={{ position: "absolute", left: 19 }}
              />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                SATELLITE VIEW
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <ConnectWithoutContactIcon
                style={{ position: "absolute", left: 19 }}
              />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                RESILIENCE
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <ConnectWithoutContactIcon
                style={{ position: "absolute", left: 19 }}
              />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                WEATHER
              </Button>
            </Stack>
            <Stack direction="row" spacing={4}>
              <ForumIcon style={{ position: "absolute", left: 19 }} />
              <Button
                href="#"
                style={{
                  color: "white",
                  marginTop: -4,
                  fontSize: 16,
                  fontWeight: 400,
                  position: "absolute",
                  left: 24,
                }}
              >
                CONVERSATIONS
              </Button>
            </Stack>
          </Stack>
          <div style={{ position: "absolute", top: 850 }}>
            <Router>
              <Link style={{ color: "white" }} to="/#">
                Log Out
              </Link>
              <p>Version 2001.01</p>
            </Router>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#ffff" }} position="static">
        <Toolbar>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "#121212" }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "#FB8500",
                fontsize: 28,
                fontWeight: 600,
              },
            }}
          >
            Welcome
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "#121212",
                marginLeft: 20,
                fontsize: 28,
                fontWeight: 600,
              },
            }}
          >
            Ms.Rob Melvin!
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "#999999",
                fontStyle: "italic",
                fontsize: 14,
                marginLeft: 20,
              },
            }}
          >
            Last update 10:22am
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", color: "#121212" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
