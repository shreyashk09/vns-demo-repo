import React from "react";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { Button, Col, Container, Row } from "reactstrap";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import { deepOrange, deepPurple } from "@mui/material/colors";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Maintenancelinecharts from "./Maintenancelinecharts";
import { Divider } from "@mui/material";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#8ECAE6" : "#308fe8",
  },
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "orange",
    color: "orange",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ExistingMaintenancecard = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div style={{ height: 400, width: 360 }}>
        <Button
          href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp"
          color=""
          style={{
            border: "solid balck",
            height: 40,
            width: 60,
            marginRight: -280,
            marginTop: -10,
          }}
        >
          <PushPinOutlinedIcon fontSize="medium" />
        </Button>
        <p style={{ fontFamily: "Lato", fontWeight: "bold", fontSize: 20, color: "#121212" }}>
          PROJECT ALPHA
        </p>
        <p style={{ fontFamily: "Lato", fontWeight: "400", fontSize: 16, color: "#219EBC" }}>
          210913_M_DIV_BSESDelhi
        </p>
        <p style={{ fontFamily: "Lato", fontWeight: "400", fontSize: 12, color: "#A3A3A3" }}>
          ( 08 September 2021 - Present )
        </p>
        <Container>
          <Row>
            <Col md={9}>
              <div style={{ height: 100, marginTop: -10 }}>
                <Maintenancelinecharts />

                <Stack
                  style={{ display: "flex", justifyContent: "center" }}
                  spacing={1}
                  direction="row"
                >
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginTop: -9,
                      width: 180,
                      height: 12,
                      fontFamily: "lato",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    Assest Risk Level
                  </p>
                  <p
                    style={{
                      marginLeft: 0,
                      textTransform: "capitalize",
                      marginTop: -9,
                      width: 80,
                      height: 12,
                      fontFamily: "lato",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        backgroundColor: "#8884d8",
                        borderRadius: "150%",
                        display: "inline-block",
                      }}
                    ></span>{" "}
                    Previous
                  </p>
                  <p
                    style={{
                      marginLeft: -10,
                      textTransform: "capitalize",
                      marginTop: -9,
                      width: 80,
                      fontFamily: "lato",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "",
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        backgroundColor: "#82ca9d",
                        borderRadius: "150%",
                        display: "inline-block",
                      }}
                    ></span>{" "}
                    Now
                  </p>
                </Stack>
              </div>
            </Col>
            <Col md={3}>
              <div
                style={{
                  boxSizing: "border-box",
                  marginLeft: -35,
                  borderRadius: 10,
                  height: 64,
                  width: 85.94,
                  borderWidth: "1px",
                  borderColor: "#219EBC",
                  borderStyle: "solid",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginTop: 14,
                      width: 42.47,
                      height: 12,
                      fontWeight: 500,
                      fontFamily: "lato",
                      fontSize: 14,
                      color: "#219EBC",
                    }}
                  >
                    Saved
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p
                    style={{
                      textTransform: "capitalize",
                      marginTop: -8,
                      width: 42.47,
                      height: 12,
                      fontWeight: 700,
                      fontFamily: "lato",
                      fontSize: 16,
                      color: "black",
                    }}
                  >
                    $70000
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col md={3}>
              <p style={{ fontFamily: "Lato", fontWeight: "700", fontSize: 12, color: "black" }}>
                PROGRESS{" "}
              </p>
            </Col>
            <Col md={2}>
              <span style={{ fontFamily: "Lato", fontWeight: "700", color: "#219EBC" }}>
                {100}%
              </span>
            </Col>
            <Col md={7}>
              <Box>
                <BorderLinearProgress variant="determinate" value={100} />
              </Box>
            </Col>
          </Row>
        </Container>
        <Container>
          <Stack style={{ display: "flex", justifyContent: "center" }} spacing={6} direction="row">
            <p
              className="text-center"
              style={{
                textTransform: "capitalize",
                fontFamily: "lato",
                fontWeight: "700",
                fontSize: 12,
                color: "#023047",
              }}
            >
              Inventory
            </p>
            <p
              className="text-center"
              style={{
                textTransform: "capitalize",
                fontFamily: "Lato",
                fontWeight: "700",
                fontSize: 12,
                color: "#023047",
              }}
            >
              Q & M
            </p>
            <p
              className="text-center"
              style={{
                textTransform: "capitalize",
                fontFamily: "Lato",
                fontWeight: "700",
                fontSize: 12,
                color: "#023047",
              }}
            >
              Finance
            </p>
            <p
              className="text-center"
              style={{
                textTransform: "capitalize",
                fontFamily: "Lato",
                fontWeight: "700",
                fontSize: 12,
                color: "#023047",
              }}
            >
              Role 2
            </p>
          </Stack>
          <Stack style={{ display: "flex", justifyContent: "center" }} spacing={2} direction="row">
            <AvatarGroup max={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500] }}
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500] }}
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </StyledBadge>
            </AvatarGroup>
            <AvatarGroup max={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  alt="bemy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500] }}
                  alt="e   yavis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </StyledBadge>
            </AvatarGroup>
            <AvatarGroup max={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  alt="yemy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500] }}
                  alt="aravis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500] }}
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </StyledBadge>
            </AvatarGroup>

            <AvatarGroup max={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </StyledBadge>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ bgcolor: deepPurple[500] }}
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </StyledBadge>
            </AvatarGroup>
          </Stack>
          <Stack
            style={{ display: "flex", justifyContent: "center", marginTop: 7 }}
            spacing={2}
            direction="row"
          >
            <Button
              style={{
                marginTop: 10,
                borderRadius: 4,
                width: 100,
                height: 28,
                background: "#219EBC",
              }}
              variant="contained"
              href="#contained-buttons"
            >
              <p
                style={{
                  marginTop: -5,
                  textTransform: "capitalize",
                  marginLeft: 20,
                  fontFamily: "lato",
                  width: 32,
                  height: 17,
                }}
              >
                View
              </p>
            </Button>
            <Button
              style={{
                marginTop: 10,
                borderRadius: 4,
                width: 100,
                height: 28,
                background: "#219EBC",
              }}
              variant="contained"
              href="#contained-buttons"
            >
              <p
                style={{
                  marginTop: -5,
                  textTransform: "capitalize",
                  marginLeft: 16,
                  fontFamily: "lato",
                  width: 32,
                  height: 17,
                }}
              >
                Replan
              </p>
            </Button>
            <Button
              style={{
                marginTop: 10,
                borderRadius: 4,
                width: 100,
                height: 28,
                background: "#219EBC",
              }}
              variant="contained"
              href="#contained-buttons"
            >
              <p
                style={{
                  marginTop: -5,
                  textTransform: "capitalize",
                  marginLeft: 16,
                  fontFamily: "lato",
                  width: 32,
                  height: 17,
                }}
              >
                delete
              </p>
            </Button>
          </Stack>
        </Container>
      </div>
    </div>
  );
};
export default ExistingMaintenancecard;
