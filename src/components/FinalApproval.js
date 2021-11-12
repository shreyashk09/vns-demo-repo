import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Checkbox, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
const FinalApproval = () => {
  const [value2, setValue2] = React.useState();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div style={{ marginBottom: 100 }}>
      <Stack style={{ marginLeft: 300, marginTop: -55 }} direction="row" spacing={9}>
        <p style={{ color: "#219EBC;", fontweight: 400, fontSize: 20, width: 100 }} label="Region">
          Due Date<span style={{ color: "red" }}>*</span>
        </p>
        <div style={{ marginLeft: 20 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              renderInput={(params) => (
                <TextField style={{ width: 300 }} {...params} label="Select Date" size="small" />
              )}
            />
          </LocalizationProvider>
        </div>
      </Stack>
      <div style={{ marginBottom: 20 }}>
        <p style={{ color: "#05b0fa", fontweight: "bold", fontSize: 20, width: 67 }} label="Region">
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
      <div style={{ marginBottom: 10 }}>
        <div style={{ float: "right" }}>
          <Stack direction="row" spacing={1}>
            <p style={{ fontSize: 21, fontweight: 600, color: "#023047", paddingTop: 13 }}>
              Approved{" "}
              <span>
                <VerifiedIcon style={{ fontSize: 30 }} />
              </span>
            </p>
          </Stack>
        </div>
      </div>
      
    </div>
  );
};
export default FinalApproval;
