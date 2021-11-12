import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const MyResponsivePie = ({arcs}) => {
  return (
    
    <ResponsivePie
    
      data={
        [
          {
            id: 1,
            label: "Severity 1",
            severity: "female",
            value: 2377.93
          },
          {
            id: 2,
            label: "Severity 2",
            severity: "male",
            value: 1322.92
          },
          {
            id: 3,
            label: "Severity 3",
            severity: "male",
            value: 2464.47
          },
          {
            id: 4,
            label: "Severity 4",
            severity: "male",
            value: 3626.21
          },
          {
            id: 5,
            label: "Severity 5",
            severity: "male",
            value: 3327.02
          }
        ]
      }
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.65}
      cornerRadius={1}
      activeOuterRadiusOffset={8}
      colors={["#023047","#219EBC","#8ECAE6","#FFB703","#FB8500",]}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={"white"}
      enableArcLabels={false}
      arcLinkLabel="label"
      legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: true,
            translateX: -10,
            translateY: 30,
            itemsSpacing: 8,
            itemWidth: 65,
            itemHeight: 18,
            itemTextColor: 'black',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: 'square',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
    />
  );
};
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function ChipsArray() {
  const [chipData, setChipData] = React.useState(
    [
      {
        key: 0,
        label: "Line 12",
        severity: 3
      },
      {
        key: 1,
        label: "Line 13",
        severity: 4
      },
      {
        key: 2,
        label: "Line 15",
        severity: 2
      },
      {
        key: 3,
        label: "Line 14",
        severity: 4
      },
      {
        key: 4,
        label: "Line 13",
        severity: 5
      },
      {
        key: 5,
        label: "Line 7",
        severity: 3
      },
      {
        key: 6,
        label: "Line 15",
        severity: 3
      },
      {
        key: 7,
        label: "Line 10",
        severity: 5
      },
      {
        key: 8,
        label: "Line 1",
        severity: 3
      },
      {
        key: 9,
        label: "Line 7",
        severity: 5
      },
      {
        key: 10,
        label: "Line 7",
        severity: 4
      },
      {
        key: 11,
        label: "Line 3",
        severity: 1
      },
      {
        key: 12,
        label: "Line 3",
        severity: 3
      },
      {
        key: 13,
        label: "Line 6",
        severity: 4
      },
      {
        key: 14,
        label: "Line 7",
        severity: 5
      },
      {
        key: 15,
        label: "Line 11",
        severity: 4
      },
      {
        key: 16,
        label: "Line 2",
        severity: 5
      },
      {
        key: 17,
        label: "Line 7",
        severity: 3
      }
    ]
  );

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    console.log(chipData);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        
        flexWrap: "wrap",
        listStyle: "none",
        
      }}
      
    >
      {chipData.map((data) => {
        let fontCol="white";
        let data1;
        if (data.severity === 1) {
          data1 = "#023047";
        } else if (data.severity === 2) {
          data1 = "#219EBC";
          fontCol="black"
        } else if (data.severity === 3) {
          data1 = "#8ECAE6";
          fontCol="black"
        } else if (data.severity === 4) {
          data1 = "#FFB703 ";
          
        } else if (data.severity === 5) {
          data1 = "#FB8500";
        }
        return (
          <ListItem key={data.key}>
            <Chip
              size="small"
              style={{ background: data1 , width:80,height:20,color:fontCol,WebkitBorderRadius:2,opacity:0.9}}
              sx={{
                "& .MuiChip-label.MuiChip-labelSmall.css-wjsjww-MuiChip-label":{
                  fontWeight:500,

                  
                },
                "& .MuiChip-deleteIcon":{
                  color:"white"
                }
              }}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
export default MyResponsivePie;
export { ChipsArray };
