import * as React from "react";
import Stack from "@mui/material/Stack";
import VerifiedIcon from "@mui/icons-material/Verified";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";
import OperSlider from "./OperSlider";
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={<h6>{value}</h6>}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
const Operation_management = () => {
  const [value, setValue] = React.useState();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const HumanRanges = [
    {
      title: "Human",
      min: 21,
      max: 44,
    },
  ];
  const VehicleRanges = [
    {
      title: "Vehicle",
      min: 34,
      max: 57,
    },
  ];
  const ManHours = [
    {
      title: "ManHours",
      min: 34,
      max: 77,
    },
  ];
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Stack spacing={6}>
          <div>
            <Stack direction="row" spacing={9}>
              {HumanRanges.length > 0
                ? HumanRanges.map((item) => <OperSlider data={item} />)
                : "NA"}

              {/* skdjfnkrsfnrremgoevme */}
              {VehicleRanges.length > 0
                ? VehicleRanges.map((item) => <OperSlider data={item} />)
                : "NA"}
            </Stack>
          </div>
          <div>
            <Stack direction="row" spacing={9}>
              <Stack spacing={4} sx={{ width: 250 }}>
                {ManHours.length > 0 ? ManHours.map((item) => <OperSlider data={item} />) : "NA"}
              </Stack>
              {/* skdjfnkrsfnrremgoevme */}
            </Stack>
          </div>
          <div>
            <Stack direction="row" spacing={9}>
              <p
                style={{ color: "#219EBC", fontweight: 500, fontSize: 20, width: 100 }}
                label="Region"
              >
                Due Date<span style={{ color: "red" }}>*</span>
              </p>
              <div style={{ width: 300, marginLeft: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField style={{ width: 300 }} {...params} label="Select Date" size="small" />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </Stack>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p
              style={{ color: "#219EBC", fontweight: "bold", fontSize: 20, width: 67 }}
              label="Region"
            >
              Remarks
            </p>
            <Stack spacing={3}>
          <Stack direction="row" spacing={1}>
            <div style={{ backgroundColor: "#CCCCCC", borderRadius: 10, width: 6 }}></div>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png"
                />
                <p style={{ fontSize: 13, fontWeight: 400, paddingTop: 15 }}>
                  Rob Melvin (Designation) - <span style={{ color: "#FFB703" }}>PLANNER</span>
                </p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled
                />
              </Stack>
              <div style={{width:880,marginTop:-30}}>
              <div style={{float:"right"}}>
                <p style={{ fontSize: 12, fontWeight: 400 }}>05-07-2021, 08:36 am</p>
              </div>
              </div>
              <p style={{ fontSize: 20, fontWeight: "normal", marginTop: -1 }}>
                Tadaa. Due date is 13-07-2021.
              </p>
            </Stack>
          </Stack>
          {/* sdfbkes jkrenkg */}
          <Stack direction="row" spacing={1}>
            <div style={{ backgroundColor: "#CCCCCC", borderRadius: 10, width: 6 }}></div>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg"
                />
                <p style={{ fontSize: 13, fontWeight: 400, paddingTop: 15 }}>
                  Neha Jha (Designation 2) - <span style={{ color: "#FFB703" }}>PLANNER</span>
                </p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled
                />
              </Stack>
              <div style={{width:880,marginTop:-30}}>
              <div style={{float:"right"}}>
                <p style={{ fontSize: 12, fontWeight: 400 }}>05-07-2021, 08:36 am</p>
              </div>
              </div>
              <p style={{ fontSize: 20, fontWeight: "normal", marginTop: -1 }}>
                Kindly approve the resource requirement plan. Due date is 13-07-2021.
              </p>
            </Stack>
          </Stack>
          {/* sdfbkes jkrenkg */}
          <Stack direction="row" spacing={1}>
            <div style={{ backgroundColor: "#CCCCCC", borderRadius: 10, width: 8 }}></div>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170510316/77742783-businessman-avatar-character-icon-vector-illustration-design.jpg"
                />
                <p style={{ fontSize: 13, fontWeight: 400, paddingTop: 15 }}>
                  Ankit Sharma (Designation 1)- <span style={{ color: "#FFB703" }}>PLANNER</span>
                </p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled
                />
              </Stack>
              <div style={{width:880,marginTop:-30}}>
              <div style={{float:"right"}}>
                <p style={{ fontSize: 12, fontWeight: 400 }}>05-07-2021, 08:36 am</p>
              </div>
              </div>
              <p style={{ fontSize: 20, fontWeight: "normal", marginTop: -1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
            </Stack>
          </Stack>
        </Stack>
          </div>
          <div>
            <div style={{ float: "right" }}>
              <Stack direction="row" spacing={1}>
                <p style={{ fontSize: 20, fontweight: 600, color: "#023047" }}>
                  Approved{" "}
                  <span>
                    <VerifiedIcon />
                  </span>
                </p>
                <Button
                  style={{
                    width: 140,
                    height: 40,
                    backgroundColor: "#219EBC",
                    color: "White",
                    fontSize: 18,
                  }}
                >
                  Edit <EditIcon />
                </Button>
              </Stack>
            </div>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
export default Operation_management;
