import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MuiInput from "@mui/material/Input";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Input = styled(MuiInput)`
  width: 42px;
`;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];

const DetailsCard = () => {
  const [value, setValue] = React.useState(30);
  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  const [value3, setValue3] = React.useState("Enter the Cause Data");
  const handleChange = (event) => {
    setValue3(event.target.value);
  };
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <div>
            <Stack direction="row" spacing={9}>
              <p
                style={{ color: "#05b0fa", fontweight: 500, fontSize: 20, width: 50 }}
                label="Region"
              >
                Region<span style={{ color: "red" }}>*</span>
              </p>
              <div style={{ width: 300 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{}}
                  renderInput={(params) => (
                    <TextField style={{}} {...params} label="Select Region" size="small" />
                  )}
                />
              </div>
            </Stack>
          </div>
          <div style={{ marginLeft: 80 }}>
            <Stack direction="row" spacing={9}>
              <p
                style={{ color: "#05b0fa", fontweight: 400, fontSize: 20, width: 50 }}
                label="Region"
              >
                Frequency<span style={{ color: "red" }}>*</span>
              </p>
              <Box sx={{ width: 300 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof value === "number" ? value : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      style={{ color: "#219EBC" }}
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      value={value}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 10,
                        min: 0,
                        max: 100,
                        type: "number",
                        "aria-labelledby": "input-slider",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </div>
        </Stack>
        {/*      kasdjc            aosdkc  */}
        <Stack direction="row" spacing={2}>
          <div>
            <Stack direction="row" spacing={9}>
              <p
                style={{ color: "#05b0fa", fontweight: 500, fontSize: 20, width: 100 }}
                label="Region"
              >
                Start Date<span style={{ color: "red" }}>*</span>
              </p>
              <div style={{ width: 300, marginLeft: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value1}
                    onChange={(newValue) => {
                      setValue1(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField style={{ width: 300 }} {...params} label="Select Date" size="small" />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </Stack>
          </div>
          <div style={{ marginLeft: 20 }}>
            <Stack direction="row" spacing={9}>
              <p
                style={{
                  marginLeft: 60,
                  color: "#05b0fa",
                  fontweight: 400,
                  fontSize: 20,
                  width: 100,
                }}
                label="Region"
              >
                End Date<span style={{ color: "red" }}>*</span>
              </p>
              <div style={{ marginLeft: 20 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value2}
                    onChange={(newValue) => {
                      setValue2(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField  style={{ width: 300 }}  {...params} label="Select Date" size="small" />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </Stack>
          </div>
        </Stack>
        {/*      kasdjc            aosdkc  */}
        <Stack direction="row" spacing={2}>
          <div>
            <Stack direction="row" spacing={9}>
              <p
                style={{ color: "#05b0fa", fontweight: 500, fontSize: 20, width: 50 }}
                label="Region"
              >
                Cause<span style={{ color: "red" }}>*</span>
              </p>
              <div style={{ width: 300 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{}}
                  renderInput={(params) => (
                    <TextField style={{}} {...params} label="Select Cause" size="small" />
                  )}
                />
              </div>
            </Stack>
          </div>
          <div style={{ marginLeft: 80 }}>
            <Stack direction="row" spacing={9}>
              <p
                style={{ color: "#05b0fa", fontweight: 400, fontSize: 20, width: 50 }}
                label="Region"
              >
                Priority<span style={{ color: "red" }}>*</span>
              </p>
              <div style={{ width: 300 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{}}
                  renderInput={(params) => (
                    <TextField style={{}} {...params} label="Select Priority" size="small" />
                  )}
                />
              </div>
            </Stack>
          </div>
        </Stack>
        {/*      kasdjc            aosdkc  */}
        <Stack direction="row" spacing={9}>
          <p style={{ color: "#05b0fa", fontweight: 400, fontSize: 20, width: 50 }} label="Region">
            Cause Details<span style={{ color: "red" }}>*</span>
          </p>
          <div>
            <TextField
              inputProps={{
                style: {
                  height: "104px",
                  width: "780px",
                },
              }}
              id="outlined-multiline-flexible"
              label="Enter reason"
              multiline
              maxRows={5}
              value={value3}
              onChange={handleChange}
            />
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
export default DetailsCard;
