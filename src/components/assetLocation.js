import * as React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

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
const AssetLo = (props) => {
  return (
    <div>
      <div>
        <Stack direction="row" spacing={9}>
          <p style={{ color: "#05b0fa", fontSize: 17, width: 50 }} label="Region">
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
      <div style={{ marginTop: 40 }}>
        <Stack direction="row" spacing={9}>
          <p style={{ color: "#05b0fa", fontSize: 17, width: 50 }}>
            Division<span style={{ color: "red" }}>*</span>
          </p>
          <div style={{ width: 300 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{}}
              renderInput={(params) => (
                <TextField {...params} label="Select Division" size="small" />
              )}
            />
          </div>
        </Stack>
      </div>
      <div style={{ marginTop: 40 }}>
        <Stack direction="row" spacing={9}>
          <p style={{ color: "#05b0fa", fontSize: 17, width: 50 }} label="Region">
            Circle<span style={{ color: "red" }}>*</span>
          </p>
          <div style={{ marginLeft: 73, width: 300 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{}}
              renderInput={(params) => (
                <TextField style={{}} {...params} label="Select Circle" size="small" />
              )}
            />
          </div>
        </Stack>
      </div>
      <div style={{ marginTop: 40 }}>
        <Stack direction="row" spacing={9}>
          <p style={{ color: "#05b0fa", fontSize: 17, width: 50 }} label="Lines">
            Lines<span style={{ color: "red" }}>*</span>
          </p>
          <div style={{ marginLeft: 73, width: 300 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{}}
              renderInput={(params) => (
                <TextField
                  style={{}}
                  {...params}
                  label="Select Lines Manually"
                  size="small"
                />
              )}
            />
          </div>
        </Stack>
      </div>
      <div style={{ marginTop: 40 }}>
        <Stack direction="row" spacing={9}>
          <p style={{ color: "#05b0fa", fontSize: 17, width: 100 }}>
            Sort Lines<span style={{ color: "red" }}>*</span>
          </p>
          <div style={{ marginLeft: 23, width: 300 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{}}
              renderInput={(params) => (
                <TextField style={{}} {...params} label="Sort by" size="small" />
              )}
            />
          </div>
        </Stack>
      </div>
    </div>
  );
};
export default AssetLo;
