import {Stack} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import {ResponsiveBar} from "@nivo/bar";
import {ResponsiveStream} from "@nivo/stream";
import {PieChart, Pie, Cell} from "recharts";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
const data = [
  {name: "Group A", value: 100},
  {name: "Group B", value: 400},
  {name: "Group C", value: 130},
];
const data1 = [
  {name: "Group C", value: 430},
  {name: "Group D", value: 540},
  {name: "Group A", value: 200},
];
let dataFault = [
  {
    id: "Line 1",
    Severity1: 166,
    Severity1Color: "hsl(220, 70%, 50%)",
    Severity2: 106,
    Severity2Color: "hsl(168, 70%, 50%)",
    Severity3: 43,
    Severity3Color: "hsl(18, 70%, 50%)",
    Severity4: 162,
    Severity4Color: "hsl(102, 70%, 50%)",
    Severity5: 199,
    Severity5Color: "hsl(215, 70%, 50%)",
  },
  {
    id: "Line 2",
    Severity1: 128,
    Severity1Color: "hsl(187, 70%, 50%)",
    Severity2: 38,
    Severity2Color: "hsl(246, 70%, 50%)",
    Severity3: 44,
    Severity3Color: "hsl(352, 70%, 50%)",
    Severity4: 115,
    Severity4Color: "hsl(348, 70%, 50%)",
    Severity5: 116,
    Severity5Color: "hsl(188, 70%, 50%)",
  },
  {
    id: "Line 3",
    Severity1: 89,
    Severity1Color: "hsl(58, 70%, 50%)",
    Severity2: 92,
    Severity2Color: "hsl(16, 70%, 50%)",
    Severity3: 14,
    Severity3Color: "hsl(35, 70%, 50%)",
    Severity4: 146,
    Severity4Color: "hsl(102, 70%, 50%)",
    Severity5: 57,
    Severity5Color: "hsl(216, 70%, 50%)",
  },
  {
    id: "Line 4",
    Severity1: 19,
    Severity1Color: "hsl(223, 70%, 50%)",
    Severity2: 91,
    Severity2Color: "hsl(185, 70%, 50%)",
    Severity3: 7,
    Severity3Color: "hsl(80, 70%, 50%)",
    Severity4: 9,
    Severity4Color: "hsl(289, 70%, 50%)",
    Severity5: 136,
    Severity5Color: "hsl(242, 70%, 50%)",
  },
  {
    id: "Line 5",
    Severity1: 124,
    Severity1Color: "hsl(218, 70%, 50%)",
    Severity2: 172,
    Severity2Color: "hsl(175, 70%, 50%)",
    Severity3: 143,
    Severity3Color: "hsl(52, 70%, 50%)",
    Severity4: 191,
    Severity4Color: "hsl(80, 70%, 50%)",
    Severity5: 151,
    Severity5Color: "hsl(323, 70%, 50%)",
  },
  {
    id: "Line 6",
    Severity1: 76,
    Severity1Color: "hsl(357, 70%, 50%)",
    Severity2: 98,
    Severity2Color: "hsl(69, 70%, 50%)",
    Severity3: 88,
    Severity3Color: "hsl(162, 70%, 50%)",
    Severity4: 129,
    Severity4Color: "hsl(139, 70%, 50%)",
    Severity5: 189,
    Severity5Color: "hsl(178, 70%, 50%)",
  },
  {
    id: "Line 7",
    Severity1: 95,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 160,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 64,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 148,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 176,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Line 8",
    Severity1: 95,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 160,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 64,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 148,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 176,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Line 9",
    Severity1: 95,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 160,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 64,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 148,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 176,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Line 10",
    Severity1: 95,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 160,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 64,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 148,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 176,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
];
let dataFault1 = [
  {
    id: "Line 1",
    Severity1: 146,
    Severity1Color: "hsl(220, 70%, 50%)",
    Severity2: 126,
    Severity2Color: "hsl(168, 70%, 50%)",
    Severity3: 93,
    Severity3Color: "hsl(18, 70%, 50%)",
    Severity4: 362,
    Severity4Color: "hsl(102, 70%, 50%)",
    Severity5: 299,
    Severity5Color: "hsl(215, 70%, 50%)",
  },
  {
    id: "Line 2",
    Severity1: 88,
    Severity1Color: "hsl(187, 70%, 50%)",
    Severity2: 68,
    Severity2Color: "hsl(246, 70%, 50%)",
    Severity3: 74,
    Severity3Color: "hsl(352, 70%, 50%)",
    Severity4: 15,
    Severity4Color: "hsl(348, 70%, 50%)",
    Severity5: 216,
    Severity5Color: "hsl(188, 70%, 50%)",
  },
  {
    id: "Line 3",
    Severity1: 59,
    Severity1Color: "hsl(58, 70%, 50%)",
    Severity2: 82,
    Severity2Color: "hsl(16, 70%, 50%)",
    Severity3: 24,
    Severity3Color: "hsl(35, 70%, 50%)",
    Severity4: 166,
    Severity4Color: "hsl(102, 70%, 50%)",
    Severity5: 87,
    Severity5Color: "hsl(216, 70%, 50%)",
  },
  {
    id: "Line 4",
    Severity1: 29,
    Severity1Color: "hsl(223, 70%, 50%)",
    Severity2: 61,
    Severity2Color: "hsl(185, 70%, 50%)",
    Severity3: 74,
    Severity3Color: "hsl(80, 70%, 50%)",
    Severity4: 92,
    Severity4Color: "hsl(289, 70%, 50%)",
    Severity5: 186,
    Severity5Color: "hsl(242, 70%, 50%)",
  },
  {
    id: "Line 5",
    Severity1: 184,
    Severity1Color: "hsl(218, 70%, 50%)",
    Severity2: 122,
    Severity2Color: "hsl(175, 70%, 50%)",
    Severity3: 103,
    Severity3Color: "hsl(52, 70%, 50%)",
    Severity4: 121,
    Severity4Color: "hsl(80, 70%, 50%)",
    Severity5: 150,
    Severity5Color: "hsl(323, 70%, 50%)",
  },
  {
    id: "Line 6",
    Severity1: 206,
    Severity1Color: "hsl(357, 70%, 50%)",
    Severity2: 78,
    Severity2Color: "hsl(69, 70%, 50%)",
    Severity3: 98,
    Severity3Color: "hsl(162, 70%, 50%)",
    Severity4: 229,
    Severity4Color: "hsl(139, 70%, 50%)",
    Severity5: 289,
    Severity5Color: "hsl(178, 70%, 50%)",
  },
  {
    id: "Line 7",
    Severity1: 195,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 660,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 34,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 248,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 276,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Line 8",
    Severity1: 105,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 460,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 84,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 248,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 576,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Line 9",
    Severity1: 25,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 260,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 164,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 248,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 76,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
  {
    id: "Line 10",
    Severity1: 195,
    Severity1Color: "hsl(268, 70%, 50%)",
    Severity2: 162,
    Severity2Color: "hsl(138, 70%, 50%)",
    Severity3: 642,
    Severity3Color: "hsl(26, 70%, 50%)",
    Severity4: 138,
    Severity4Color: "hsl(226, 70%, 50%)",
    Severity5: 89,
    Severity5Color: "hsl(15, 70%, 50%)",
  },
];
let dataLine = [
  {
    id: "Line 1",
    Available: 166,
    AvailableColor: "hsl(220, 70%, 50%)",
    Selected: 106,
    SelectedColor: "hsl(168, 70%, 50%)",
    Assigned: 43,
    AssignedColor: "hsl(18, 70%, 50%)",
  },
  {
    id: "Line 2",
    Available: 128,
    AvailableColor: "hsl(187, 70%, 50%)",
    Selected: 38,
    SelectedColor: "hsl(246, 70%, 50%)",
    Assigned: 44,
    AssignedColor: "hsl(352, 70%, 50%)",
  },
  {
    id: "Line 3",
    Available: 89,
    AvailableColor: "hsl(58, 70%, 50%)",
    Selected: 92,
    SelectedColor: "hsl(16, 70%, 50%)",
    Assigned: 14,
    AssignedColor: "hsl(35, 70%, 50%)",
  },
  {
    id: "Line 4",
    Available: 19,
    AvailableColor: "hsl(223, 70%, 50%)",
    Selected: 91,
    SelectedColor: "hsl(185, 70%, 50%)",
    Assigned: 7,
    AssignedColor: "hsl(80, 70%, 50%)",
  },
  {
    id: "Line 5",
    Available: 124,
    AvailableColor: "hsl(218, 70%, 50%)",
    Selected: 172,
    SelectedColor: "hsl(175, 70%, 50%)",
    Assigned: 143,
    AssignedColor: "hsl(52, 70%, 50%)",
  },
  {
    id: "Line 6",
    Available: 76,
    AvailableColor: "hsl(357, 70%, 50%)",
    Selected: 98,
    SelectedColor: "hsl(69, 70%, 50%)",
    Assigned: 88,
    AssignedColor: "hsl(162, 70%, 50%)",
  },
  {
    id: "Line 7",
    Available: 95,
    AvailableColor: "hsl(268, 70%, 50%)",
    Selected: 160,
    SelectedColor: "hsl(138, 70%, 50%)",
    Assigned: 64,
    AssignedColor: "hsl(26, 70%, 50%)",
  },
  {
    id: "Line 8",
    Available: 95,
    AvailableColor: "hsl(268, 70%, 50%)",
    Selected: 160,
    SelectedColor: "hsl(138, 70%, 50%)",
    Assigned: 64,
    AssignedColor: "hsl(26, 70%, 50%)",
  },
  {
    id: "Line 9",
    Available: 95,
    AvailableColor: "hsl(268, 70%, 50%)",
    Selected: 160,
    SelectedColor: "hsl(138, 70%, 50%)",
    Assigned: 64,
    AssignedColor: "hsl(26, 70%, 50%)",
  },
  {
    id: "Line 10",
    Available: 95,
    AvailableColor: "hsl(268, 70%, 50%)",
    Selected: 160,
    SelectedColor: "hsl(138, 70%, 50%)",
    Assigned: 64,
    AssignedColor: "hsl(26, 70%, 50%)",
  },
];
let len = dataLine.length * 60;
let tempHold = dataFault;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RightPannel = () => {
  const [open, setOpen] = React.useState(true);
  const [clickId, seclickId] = React.useState("red");
  function LineSpan(props) {
    if (clickId !== "red") {
      return (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.2,
            m: 1,
          }}
          component="ul">
          <Collapse style={{marginTop: 10, marginBottom: 10}} in={open}>
            <div>
              <p style={{color: "#219EBC", fontWeight: 700, fontSize: 24, marginLeft: 20}}>{clickId} Tower</p>
            </div>
            <div>
              <div style={{marginLeft: 300, marginTop: -45}}>
                <Stack style={{width: 64, height: 24}} direction="row" spacing={0}>
                  <Button style={{fontSize: 9, backgroundColor: SeverityColor1}} onClick={ChangeSeverityColor1} variant="contained">
                    Severity
                  </Button>
                  <Button style={{fontSize: 9, backgroundColor: HealthColor1}} onClick={ChangeHealthColor1} variant="contained">
                    Health
                  </Button>
                </Stack>
              </div>
              <IconButton
                style={{float: "right", marginRight: 5, marginTop: -32}}
                aria-label="close"
                color="inherit"
                size="medium"
                onClick={() => {
                  setOpen(false);
                }}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
            <div
              style={{
                overflowX: "scroll",
                overflowY: "hidden",
                width: 480,
                height: 300,
                marginLeft: 0,
              }}>
              <ResponsiveBar
                enableLabel={false}
                width={len}
                height={280}
                data={dataLine}
                keys={["Available", "Selected", "Assigned"]}
                indexBy="id"
                margin={{top: 50, right: 130, bottom: 50, left: 60}}
                padding={0.7}
                groupMode="stacked"
                valueScale={{type: "linear"}}
                indexScale={{type: "band", round: true}}
                colors={{scheme: "nivo"}}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Item Count",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                enableGridY={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "top-middle",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: -40,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 13,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                role="application"
                isFocusable={true}
              />
            </div>
          </Collapse>
        </Paper>
      );
    }
    return null;
  }
  const [SeverityColor1, setSeverityColor1] = React.useState("#023047");
  const [HealthColor1, setHealthColor1] = React.useState("#8ECAE6");
  const ChangeSeverityColor1 = () => {
    setSeverityColor1("#023047");
    setHealthColor1("#8ECAE6");
  };
  const ChangeHealthColor1 = () => {
    setHealthColor1("#023047");
    setSeverityColor1("#8ECAE6");
  };
  const [SeverityColor, setSeverityColor] = React.useState("#023047");
  const [HealthColor, setHealthColor] = React.useState("#8ECAE6");
  const ChangeSeverityColor = () => {
    setSeverityColor("#023047");
    setHealthColor("#8ECAE6");
    dataFault = tempHold;
  };
  const ChangeHealthColor = () => {
    setHealthColor("#023047");
    setSeverityColor("#8ECAE6");
    dataFault = dataFault1;
  };
  const [LabelValue, setLabelValue] = React.useState(0);
  const [value, setvalue] = React.useState(0);
  const [id, setId] = React.useState(0);
  return (
    <div className="addNew" style={{backgroundColor: "#F3F3F3",maxHeight:700,overflow:"auto"}}>
      <Stack  spacing={0.1}>
        <div >
          <div
          
            style={{
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              width: 512,
              background: "#023047",
            }}>
            <p className="text-center" style={{color: "white"}}>
              Team
            </p>
          </div>
          <div style={{marginTop: -15, width: 512, height: 359, backgroundColor: "white", overflow: "auto", overflowX: "hidden"}}>
            <div  style={{marginTop: 14, marginLeft: 24, marginRight: 24, overflowX: "auto", overflowY: "auto", overflow: "auto", maxHeight: 190, marginBottom: 10}}>
              <p style={{color: "#219EBC", fontWeight: 500, fontSize: 12, textTransform: "uppercase"}}>Finance</p>
              <Stack direction="row" style={{marginLeft: 28}} spacing={4}>
                <Stack spacing={1} style={{opacity: 0.5, width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
              </Stack>
              <br/>
             
            </div>
            <Divider variant="middle" />
            {/* next segment*/}
            <div className="scrollTeam" style={{marginTop: 14, marginLeft: 24, marginRight: 24, overflowX: "auto", overflowY: "auto", overflow: "auto", maxHeight: 190, marginBottom: 10}}>
              <p style={{color: "#219EBC", fontWeight: 500, fontSize: 12, textTransform: "uppercase"}}>Inventory</p>
              
              <Stack direction="row" style={{marginLeft: 28}} spacing={4}>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 11 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center",opacity:0.5}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 2(Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 13 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 14 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center",opacity:0.5}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                
              </Stack>
              <br/>
            </div>
            <Divider variant="middle" />
            {/* next segment*/}
            <div style={{marginTop: 14, marginLeft: 24, marginRight: 24, overflowX: "auto", overflowY: "auto", overflow: "auto", maxHeight: 190, marginBottom: 10}}>
              <p style={{color: "#219EBC", fontWeight: 500, fontSize: 12, textTransform: "uppercase"}}>Operations & Management</p>
              <Stack direction="row" style={{marginLeft: 28}} spacing={4}>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center",opacity:0.5}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
                <Stack spacing={1} style={{width: 100, display: "flex", justifyContent: "center"}}>
                  <Avatar style={{margin: "auto", width: 46, height: 46}} alt="Profile" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" />
                  <p className="text-center" style={{overflow: "hidden", fontSize: 12, fontWeight: 400}}>
                    Elon Musk 1 (Finance Head)
                  </p>
                </Stack>
              </Stack>
              <br/>
            </div>
            <Divider variant="middle" />
          </div>
        </div>
        {/*break of new comp*/}
        <div style={{backgroundColor: "white"}}>
          <div style={{width: 512, background: "#023047"}}>
            <p className="text-center" style={{color: "white"}}>
              Statistics
            </p>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <div
                style={{
                  borderRadius: "0px 14px 14px 0px",
                  width: 164,
                  height: 24,
                  background: "#8ECAE6",
                }}>
                <p className="text-center" style={{color: "black", fontSize: 14, fontWeight: 700}}>
                  Fault Categorization
                </p>
              </div>
              <div style={{marginLeft: 220}}>
                <Stack style={{width: 64, height: 24}} direction="row" spacing={0}>
                  <Button style={{fontSize: 9, backgroundColor: SeverityColor}} onClick={ChangeSeverityColor} variant="contained">
                    Severity
                  </Button>
                  <Button style={{fontSize: 9, backgroundColor: HealthColor}} onClick={ChangeHealthColor} variant="contained">
                    Health
                  </Button>
                </Stack>
              </div>
            </Stack>
          </div>
          <div
            style={{
              margin: 10,
              overflowX: "scroll",
              marginTop: 10,
              width: 460,
              height: 300,
            }}>
            <ResponsiveBar
              width={dataLine.length * 60}
              data={dataFault}
              keys={["Severity1", "Severity2", "Severity3", "Severity4", "Severity5"]}
              indexBy="id"
              margin={{top: 50, right: 130, bottom: 50, left: 60}}
              padding={0.5}
              borderRadius={0}
              groupMode="stacked"
              valueScale={{type: "linear"}}
              indexScale={{type: "band", round: true}}
              colors={{scheme: "nivo"}}
              axisTop={null}
              axisRight={null}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Item Count",
                legendPosition: "middle",

                legendOffset: -40,
              }}
              enableGridY={false}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "top-middle",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: -40,
                  itemsSpacing: 0,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 13,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              enableLabel={false}
              onMouseEnter={(data) => {
                setLabelValue(data["indexValue"]);
                setvalue(data["value"]);
                setId(data["id"]);
              }}
              onClick={(data) => {
                setOpen(true);
                seclickId(data["indexValue"]);
              }}
              tooltip={function () {
                return (
                  <div
                    className="text-center"
                    style={{
                      fontSize: 14,
                      color: "white",
                      width: 171,
                      height: 90,
                      backgroundColor: "black",
                      opacity: 0.8,
                    }}>
                    <br />
                    <p style={{marginTop: -7, fontWeight: 500}}>{LabelValue}</p>
                    <p style={{marginTop: -20}}>Total Tower :32</p>
                    <p style={{marginTop: -18}}>
                      {id}: {value}
                    </p>
                  </div>
                );
              }}
              role="application"
              isFocusable={true}
            />
          </div>
          <p className="text-center" style={{fontSize: 15, fontWeight: 600}}>
            Lines
          </p>
          {/* break*/}
          <span>
            <LineSpan />
          </span>
          <div style={{height: 260}}>
            <div
              style={{
                borderRadius: "0px 14px 14px 0px",
                width: 164,
                height: 24,
                background: "#8ECAE6",
              }}>
              <p className="text-center" style={{color: "black", fontSize: 14, fontWeight: 700}}>
                Operations & Mgmt.
              </p>
            </div>
            <Stack style={{marginLeft: 50, marginTop: 20}} direction="row" spacing={8}>
              <Stack direction="row" spacing={1}>
                <div style={{width: 13, height: 13, backgroundColor: "#00C49F"}}></div>
                <p style={{marginTop: -5}}>Severity1</p>
              </Stack>
              <Stack direction="row" spacing={1}>
                <div style={{width: 13, height: 13, backgroundColor: "#FFBB28"}}></div>
                <p style={{marginTop: -5}}>Severity2</p>
              </Stack>
              <Stack direction="row" spacing={1}>
                <div style={{width: 13, height: 13, backgroundColor: "#0088FE"}}></div>
                <p style={{marginTop: -5}}>Severity3</p>
              </Stack>
            </Stack>
            <Stack style={{marginTop: -110}} direction="row" spacing={2}>
              <div>
                <PieChart width={240} height={400}>
                  <Pie data={data} cx={115} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="text-center" style={{marginTop: -215}}>
                  <p style={{fontSize: 18, fontWeight: 900}}>42389</p>
                  <p style={{marginTop: -20, fontSize: 12, fontWeight: 500}}>Human</p>
                </div>
              </div>
              <div>
                <PieChart width={240} height={400}>
                  <Pie data={data1} cx={115} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="text-center" style={{marginTop: -215}}>
                  <p style={{fontSize: 18, fontWeight: 900}}>2496</p>
                  <p style={{marginTop: -20, fontSize: 12, fontWeight: 500}}>Vehicles</p>
                </div>
              </div>
            </Stack>
          </div>
          <span>
            <lineBreak />
          </span>
          {/* kd breakk*/}
          <div>
            <div
              style={{
                borderRadius: "0px 14px 14px 0px",
                width: 164,
                height: 24,
                background: "#8ECAE6",
              }}>
              <p className="text-center" style={{color: "black", fontSize: 14, fontWeight: 700}}>
                Inventory
              </p>
            </div>
            <div
              style={{
                margin: 10,
                overflowX: "scroll",
                overflowY: "hidden",
                marginTop: 10,
                width: 460,
                height: 300,
              }}>
              <ResponsiveBar
                enableLabel={false}
                width={dataLine.length * 60}
                height={280}
                data={dataLine}
                keys={["Available", "Selected", "Assigned"]}
                indexBy="id"
                margin={{top: 50, right: 130, bottom: 50, left: 60}}
                padding={0.7}
                groupMode="stacked"
                valueScale={{type: "linear"}}
                indexScale={{type: "band", round: true}}
                colors={{scheme: "nivo"}}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Item Count",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
                enableGridY={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "top-middle",
                    direction: "row",
                    justify: false,
                    translateX: 70,
                    translateY: -40,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 15,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                onMouseEnter={(data) => {
                  setLabelValue(data["indexValue"]);
                  setvalue(data["value"]);
                  setId(data["id"]);
                }}
                tooltip={function () {
                  return (
                    <div
                      className="text-center"
                      style={{
                        fontSize: 14,
                        color: "white",
                        width: 171,
                        height: 90,
                        backgroundColor: "black",
                        opacity: 0.8,
                      }}>
                      <br />
                      <p style={{marginTop: -7, fontWeight: 500}}>{LabelValue}</p>
                      <p style={{marginTop: -20}}>Total Tower :32</p>
                      <p style={{marginTop: -18}}>
                        {id}: {value}
                      </p>
                    </div>
                  );
                }}
                role="application"
                isFocusable={true}
              />
            </div>
          </div>
          <p className="text-center" style={{fontSize: 15, fontWeight: 600}}>
            Items
          </p>
          <div style={{height: 360}}>
            <div
              style={{
                borderRadius: "0px 14px 14px 0px",
                width: 164,
                height: 24,
                background: "#8ECAE6",
              }}>
              <p className="text-center" style={{color: "black", fontSize: 14, fontWeight: 700}}>
                Division Budget
              </p>
            </div>
            <div style={{height: 220, marginTop: 20, marginLeft: 10, width: 480}}>
              <Stack direction="row" spacing={6} style={{marginLeft: 10}}>
                <p style={{fontSize: 14, fontWeight: 400}}>
                  Total:<span style={{fontWeight: 900}}> $32,500.50</span>
                </p>
                <p style={{fontSize: 14, fontWeight: 400}}>
                  Severity2:
                  <span style={{fontWeight: 900, color: "#FB8500"}}> $ 1,960 </span>
                </p>
                <p style={{fontSize: 14, fontWeight: 400}}>
                  Remaining::
                  <span style={{fontWeight: 900, color: "#219EBC"}}> $ 1,960 </span>
                </p>
              </Stack>
              <ResponsiveStream
                style={{marginTop: -50}}
                data={[
                  {
                    Raoul: 121,
                    Josiane: 33,
                    Marcel: 199,
                    René: 18,
                    Paul: 169,
                    Jacques: 15,
                  },
                  {
                    Raoul: 21,
                    Josiane: 180,
                    Marcel: 108,
                    René: 193,
                    Paul: 131,
                    Jacques: 94,
                  },
                  {
                    Raoul: 136,
                    Josiane: 175,
                    Marcel: 65,
                    René: 88,
                    Paul: 117,
                    Jacques: 37,
                  },
                  {
                    Raoul: 185,
                    Josiane: 134,
                    Marcel: 13,
                    René: 178,
                    Paul: 53,
                    Jacques: 31,
                  },
                  {
                    Raoul: 150,
                    Josiane: 129,
                    Marcel: 23,
                    René: 100,
                    Paul: 161,
                    Jacques: 111,
                  },
                  {
                    Raoul: 175,
                    Josiane: 31,
                    Marcel: 140,
                    René: 72,
                    Paul: 32,
                    Jacques: 72,
                  },
                  {
                    Raoul: 85,
                    Josiane: 31,
                    Marcel: 70,
                    René: 144,
                    Paul: 124,
                    Jacques: 163,
                  },
                  {
                    Raoul: 95,
                    Josiane: 15,
                    Marcel: 40,
                    René: 26,
                    Paul: 120,
                    Jacques: 15,
                  },
                  {
                    Raoul: 143,
                    Josiane: 109,
                    Marcel: 62,
                    René: 144,
                    Paul: 92,
                    Jacques: 72,
                  },
                ]}
                isInteractive={false}
                keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
                margin={{top: 0, right: 10, bottom: 0, left: 30}}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "",
                  legendOffset: 36,
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "",
                  legendOffset: -40,
                }}
                enableGridX={false}
                enableGridY={false}
                offsetType="silhouette"
                colors={{scheme: "nivo"}}
                fillOpacity={0.85}
                borderColor={{theme: "background"}}
              />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};
export default RightPannel;
