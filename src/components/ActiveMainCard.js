import React from "react";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { Button, Col, Container, Row } from "reactstrap";
import {Button as bt} from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Badge from "@mui/material/Badge";
import { deepOrange, deepPurple } from "@mui/material/colors";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
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

function CircularProgressWithLabel(props) {
  return (
    <div>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          style={{ color: "#8ECAE6", height: 60, width: 60 }}
          variant="determinate"
          {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            style={{
              color: "#151522",
              fontSize: 14,
              fontFamily: "lato",
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
      <Stack spacing={-1.5}>
        <p
          style={{
            textTransform: "capitalize",
            color: "#151522",
            fontSize: 12,
            marginTop: 2,
            fontFamily: "lato",
            fontWeight: "400",
            maxWidth: 90,
          }}
        >
          selectedfaults
        </p>
        <p
          style={{
            textTransform: "capitalize",
            color: "#666666",
            fontSize: 12,
            marginBottom: 9,
            fontFamily: "lato",
            fontWeight: "400",
          }}
        >
          $200
        </p>
      </Stack>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};
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

const ActiveMainCard = () => {
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
      <div style={{ height: 390, width: 360 }}>
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
        <Stack style={{ display: "flex", justifyContent: "center" }} spacing={2} direction="row">
          <CircularProgressWithLabel value={50} />
          <CircularProgressWithLabel value={73} />
          <CircularProgressWithLabel value={130} />
          <CircularProgressWithLabel value={84} />
        </Stack>
        <Container>
          <Row>
            <Col md={3}>
              <p style={{ fontFamily: "Lato", fontWeight: "700", fontSize: 12, color: "black" }}>
                PROGRESS{" "}
              </p>
            </Col>
            <Col md={2}>
              <span style={{ fontFamily: "Lato", fontWeight: "700", color: "#219EBC" }}>{80}%</span>
            </Col>
            <Col md={7}>
              <Box style={{ marginLeft: 4 }}>
                <BorderLinearProgress variant="determinate" value={80} />
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
              href="https://www.w3schools.com/howto/howto_css_circles.asp"
              style={{ borderRadius: 4, width: 100, height: 28, background: "#219EBC" }}
              variant="contained"
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
          </Stack>
        </Container>
      </div>
    </div>
  );
};
export default ActiveMainCard;
