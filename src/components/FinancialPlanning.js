import { Stack, TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import { Collapse } from "reactstrap";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ResponsiveBar } from "@nivo/bar";
import VerifiedIcon from "@mui/icons-material/Verified";
import DangerousIcon from "@mui/icons-material/Dangerous";
import React  from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularSlider from "@fseehawer/react-circular-slider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Avatar from "@mui/material/Avatar";
import { Checkbox } from "@mui/material";
const pstyledata = {
  color: "#219EBC",
  letterSpacing: 1,
  fontWeight: "600",
  fontSize: 24,
  marginLeft: 28,
  marginTop: 10,
  marginBottom: 18,
  height: 28,
  width: 800,
};
const divstyledata = {
  marginTop: 10,
  maxheight: 76,
  width: 950,
  border: "solid",
  borderRadius: 4,
  borderColor: "white",
  backgroundColor: "white",
  marginLeft: -20,
  boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.25)"
  
};
const FinancialProj = [
  {
    title: "Human",
    min: 21,
    max: 44,
  },
];
const marks = [
  {
    value: 12000,
    label: 12000,
  },
  {
    value: 52000,
    label: 52000,
  },
];
const FinancialPlanning = () => {
  
  
  const [Pronamecollapse, setPronameCollapse] = React.useState(false);
  const Pronametoggle = () => setPronameCollapse(!Pronamecollapse);
  const [UserBreakDowncollapse, setUserBreakDowncollapse] = React.useState(false);
  const UserBreakDowntoggle = () => setUserBreakDowncollapse(!UserBreakDowncollapse);
  const [id, setId] = React.useState(0);
  const[IconCol,setIconCol]=React.useState("red");
  function IconSpan(props){
    if(id==="Selected"){
      setIconCol("red");
      return (<DangerousIcon />)
    } else if( id==="AIPredicted"){
      setIconCol("green");
      return(<VerifiedIcon />)
    }
    return null;

  }
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleInputChange2 = (event) => {
    setValue2(event.target.value === "" ? "" : Number(event.target.value));
  };
  const [value, setValue] = React.useState(0);

  const [value2, setValue2] = React.useState(0);

  const theme = useTheme();
  const [BarValue, setBarValue] = React.useState(40);
  const [valCol, setValCol] = React.useState("#219EBC");
  const handleSliderChange = (event, newValue, newCol) => {
    setBarValue(newValue);
    setUserBreakDowncollapse(true);
    setPronameCollapse(true);
    console.log(newValue);
    if (newValue > 12000 && newValue < 52000) {
      setValCol("#0DC541");
    } else if (newValue > 52000) {
      setValCol("#219EBC");
    } else {
      setValCol("#E40000");
    }
  };
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const [LabelValue, setLabelValue] = React.useState(0);

  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={9}>
          <div style={{ width: 712 }}>
            <Slider
              BarValue={typeof BarValue === "number" ? BarValue : 0}
              aria-label="Custom marks"
              defaultValue={FinancialProj.min}
              onChange={handleSliderChange}
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              style={{ color: valCol, width: 712, height: 8 }}
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
              max={105200}
            />
          </div>
          <div style={{ maxWidth: 127, marginTop: -30 }}>
            <p style={{ width: 127, fontSize: 34, fontWeight: 900, color: "#121212" }}>
              ${BarValue}
            </p>
            <p style={{ fontSize: 24, fontWeight: 500, color: "#121212", marginTop: -20 }}>
              -{((BarValue - 52000) / 52000).toFixed(2)}%
              <span style={{ color: "Red", marginLeft: -5 }}>
                <ArrowDropDownIcon fontSize="large" />
              </span>
            </p>
            <p style={{ fontSize: 12, marginTop: -20 }}>than Projected</p>
          </div>
        </Stack>

        <div style={divstyledata}>
          <p style={pstyledata}>
            AI Projection Breakdown
            <span style={{ color: "#FB8500", letterSpacing: 1, fontWeight: "600", fontSize: 18 }}>
              ( $12,000 - $52,000 )
            </span>
          </p>
          <Button
            
            onClick={Pronametoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={Pronamecollapse}>
            <div style={{ height: 120, width: 980 }}>
              <ResponsiveBar
                data={[
                  {
                    "hot dog": 37,
                    "hot dogColor": "hsl(5, 70%, 50%)",
                    burger: 140,
                    burgerColor: "hsl(184, 70%, 50%)",
                    sandwich: 171,
                    sandwichColor: "hsl(23, 70%, 50%)",
                    kebab: 34,
                    kebabColor: "hsl(97, 70%, 50%)",
                    fries: 11,
                    friesColor: "hsl(27, 70%, 50%)",
                    donut: 92,
                    donutColor: "hsl(0, 70%, 50%)",
                  },
                ]}
                keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0}
                innerPadding={2}
                layout="horizontal"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "nivo" }}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "#eed312",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "fries",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "sandwich",
                    },
                    id: "lines",
                  },
                ]}
                borderRadius={3}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendPosition: "middle",
                  legendOffset: 32,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                enableGridY={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                legends={[]}
                tooltip={function () {
                  return (
                    <div
                      className="text-center"
                      style={{
                        fontSize: 12,
                        color: "white",
                        width: 171,
                        height: 76,
                        backgroundColor: "black",
                        opacity: 0.7,
                      }}
                    >
                      <p style={{ marginTop: -10 }}>
                        Estimated
                        <span style={{ color: "green" }}>
                          <VerifiedIcon />
                        </span>
                      </p>
                      <p style={{ marginTop: -20 }}>Percentage: 76%</p>
                      <p style={{ marginTop: -15 }}>Amount: $11840 </p>
                      <p style={{ marginTop: -15 }}>Range: $11,200 - $12,480</p>
                    </div>
                  );
                }}
                role="application"
              />
            </div>
          </Collapse>
        </div>
        <div style={divstyledata}>
          <p style={pstyledata}>
            Your Selected Breakdown
            <span style={{ color: "#FB8500", letterSpacing: 1, fontWeight: "600", fontSize: 18 }}>
              ( $10,000)
            </span>
          </p>
          <Button
            
            onClick={UserBreakDowntoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 ,fontWeight:700}}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={UserBreakDowncollapse}>
            <div style={{ height: 190, width: 980 }}>
              <ResponsiveBar
                data={[
                  {
                    id: "Human",
                    AIPredicted: 289,
                    Selected:189,

                  },
                  {
                    id: "Vehicle",
                    AIPredicted: 206,
                    Selected:120,
                  },
                  {
                    id: "Inventory",
                    AIPredicted: 126,
                    Selected:189,
                  },
                  {
                    id: "Label-x",
                    AIPredicted: 200,
                    Selected:138,
                  },
                  {
                    id: "Label-a",
                    AIPredicted: 233,
                    Selected:145,
                  },
                  {
                    id: "Label-b",
                    AIPredicted: 146,
                    Selected:279,
                  },
                  {
                    id: "Label-c",
                    AIPredicted: 190,
                    Selected:256,
                  },
                  {
                    id: "Label-d",
                    AIPredicted: 299,
                    Selected:199,
                  },
                  {
                    id: "Label-e",
                    AIPredicted: 279,
                    Selected:122,
                  },
                ]}
                barColor="red"
                keys={["AIPredicted","Selected"]}
                indexBy="id"
                groupMode="grouped"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.5}
                axisLeft={null}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={['#FFB703','#219EBC']}
                id="id"
                
                value="content"
                onMouseEnter={(data) => {
                  setLabelValue(data["value"]);
                  setId(data["id"]);
                }}
                borderRadius={2}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                enableGridY={false}
                enableLabel={false}
                labelTextColor={{ from: "color", modifiers: [["darker", "1"]] }}
                tooltip={function () {
                  return (
                    <div
                      className="text-center"
                      style={{
                        fontSize: 12,
                        color: "white",
                        width: 171,
                        height: 85,
                        backgroundColor: "black",
                        opacity: 0.9,
                      }}
                    >
                      <br />
                      <p style={{ margin: -10 }}>
                        {id} {" "}
                        <span style={{ color:IconCol }}>
                          <IconSpan  />
                        </span>
                      </p>
                      <p style={{ marginTop: 7 }}>Value: {LabelValue}%</p>
                      <p style={{ marginTop: -20 }}> Amount : $11840 </p>
                      <p style={{ marginTop: -20 }}>Range: $11,200 - $12,480</p>
                    </div>
                  );
                }}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) {
                  return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
                }}
              />
            </div>
          </Collapse>
        </div>
      </Stack>
      <br />
      <p style={{ color: "#219EBC", fontSize: 24, fontWeight: 400 }}>Distribution</p>

      <Stack spacing={2} direction="row">
        <Stack spacing={3}>
          <Stack direction="row" spacing={4}>
            <p style={{ color: "black", fontweight: 600, fontSize: 20, width: 80 }}>
              Division<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              label="Select Division"
              style={{ width: 300 }}
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
          </Stack>
          <Stack direction="row" spacing={4}>
            <p style={{ color: "#666666", fontweight: 600, fontSize: 20, width: 80 }}>
              Role 2<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              style={{ width: 300 }}
              value={value2}
              label="Select Role"
              onChange={handleInputChange2}
              inputProps={{
                step: 1,
                min: 0,
                max: 200,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Stack>
        </Stack>
        <div style={{ marginLeft: 100, marginTop: -30 }}>
          <CircularSlider
            width={220}
            label="% in Distribution"
            min={0}
            max={100}
            dataIndex={value}
            prependToValue=""
            appendToValue="%"
            labelColor="#005a58"
            labelBottom={true}
            knobColor="#005a58"
            knobSize={52}
            progressColorFrom="#023047"
            progressColorTo="#023047"
            progressSize={15}
            trackColor="#eeeeee"
            trackSize={20}
            onChange={(value) => {
              setValue(value);
              setValue2(value + 20);
            }}
            height={30}
          ></CircularSlider>
        </div>
      </Stack>
      <Stack style={{ marginTop: -20 }} direction="row" spacing={9}>
        <p style={{ color: "#219EBC", fontweight: 400, fontSize: 20, width: 100 }} label="Region">
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
                <TextField style={{ width: 300 }} {...params} label="Select Date"size="small" />
              )}
            />
          </LocalizationProvider>
        </div>
      </Stack>
      <div style={{ marginBottom: 20 }}>
        <p style={{ color: "#219EBC", fontweight: "bold", fontSize: 20, width: 67 }} label="Region">
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
      <div style={{ marginBottom: 90 }}>
        <div style={{ float: "right" }}>
          <Stack direction="row" spacing={1}>
            <Button
              style={{
                width: 140,
                height: 40,
                backgroundColor: "#219EBC",
                color: "White",
                fontSize: 16,
                textTransform:"capitalize"
              }}
            >
              Request &nbsp;
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};
export default FinancialPlanning;
