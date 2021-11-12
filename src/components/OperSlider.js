import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Slider from "@mui/material/Slider";
import {useTheme } from "@mui/material/styles";
import "./my.css";
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={<h6>{value}</h6>}>
      {children}
    </Tooltip>
  );
}

const OperSlider = ({ data }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [valCol, setValCol] = React.useState("green");
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleSliderChange = (event, newValue, newCol) => {
    setValue(newValue);
    console.log(newValue);
    if (newValue > data.min && newValue < data.max) {
      setValCol("#0DC541");
    } else if (newValue > data.max) {
      setValCol("#219EBC");
    } else {
      setValCol("#E40000");
    }
    console.log(valCol);
  };
  const marks = [
    {
      value: data.min,
      label: data.min,
    },
    {
      value: data.max,
      label: data.max,
    },
  ];
  function WarningSpan(props) {
    const val = props.val;
    console.log("asAJB");
    if (val < data.min || val > data.max) {
      return (
        <span
          style={{
            marginLeft: -100,
            borderWidth: 1,
            borderStyle: "dashed",
            padding: 8,
          }}
        >
          <p style={{ fontSize: 12, fontweight: 400, fontFamily: "Lato" }}>
            <span style={{ color: "orange" }}>WARNING: </span>Your work will Slowdown to 10 days. To
            increase efficiency select in range 140 to 172.
          </p>
        </span>
      );
    }
    return null;
  }
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <p style={{ color: "#05b0fa", fontweight: 400, fontSize: 20, width: 80 }} label="Region">
          {data.title}
          <span style={{ color: "red" }}>*</span>
        </p>
        <Stack spacing={4} sx={{ width: 300 }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Select Value"
            size="small"
            value={value}
            onChange={handleInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 200,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
          <Slider
            value={typeof value === "number" ? value : 0}
            aria-label="Custom marks"
            defaultValue={0}
            onChange={handleSliderChange}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            style={{ color: valCol, width: 422, marginLeft: -100, height: 8 }}
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-rail": {
                border: "none",
                backgroundColor: "#CCCCCC",
              },
              "& .MuiSlider-markLabel": {
                color: "orange",
                fontWeight: 400,
                fontSize: 12,
              },
              "& .MuiSlider-mark": {
                color: "orange",
                height: 15,
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
            components={{
              ValueLabel: ValueLabelComponent,
            }}
          />
          <WarningSpan val={value} />
        </Stack>
      </Stack>
    </div>
  );
};
export default OperSlider;
