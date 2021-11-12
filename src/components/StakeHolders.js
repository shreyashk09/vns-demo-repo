import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(1.2),
}));

const Stakeholders = () => {
  const [chipData, setChipData] = React.useState([
    {
      key: 0,
      label: "Angular ",
      src: "https://c8.alamy.com/comp/J0NY77/businesswoman-avatar-character-icon-J0NY77.jpg",
    },
    {
      key: 1,
      label: "jQuery",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vh3TObjwERKVEHrBIPYKmGfHAaSv39qYyT1XsMB9BRE5y4Kn_qSLRO079U1L1SOOwbs&usqp=CAU",
    },
    {
      key: 2,
      label: "Polymer",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjGtv1f5OCiJdRG9sqoH-ty64_hP1fw5xCw&usqp=CAU",
    },
    {
      key: 3,
      label: "React",
      src: "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg",
    },
    { key: 4, label: "Vue.js", src: "https://i.redd.it/d3sv005vnui71.jpg" },
    {
      key: 10,
      label: "Angular ",
      src: "https://c8.alamy.com/comp/J0NY77/businesswoman-avatar-character-icon-J0NY77.jpg",
    },
    {
      key: 11,
      label: "jQuery",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vh3TObjwERKVEHrBIPYKmGfHAaSv39qYyT1XsMB9BRE5y4Kn_qSLRO079U1L1SOOwbs&usqp=CAU",
    },
    {
      key: 12,
      label: "Polymer",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjGtv1f5OCiJdRG9sqoH-ty64_hP1fw5xCw&usqp=CAU",
    },
    {
      key: 13,
      label: "React",
      src: "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg",
    },
    { key: 41, label: "Vue.js", src: "https://i.redd.it/d3sv005vnui71.jpg" },
    {
      key: 20,
      label: "Angular ",
      src: "https://c8.alamy.com/comp/J0NY77/businesswoman-avatar-character-icon-J0NY77.jpg",
    },
    {
      key: 21,
      label: "jQuery",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vh3TObjwERKVEHrBIPYKmGfHAaSv39qYyT1XsMB9BRE5y4Kn_qSLRO079U1L1SOOwbs&usqp=CAU",
    },
    {
      key: 22,
      label: "Polymer",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjGtv1f5OCiJdRG9sqoH-ty64_hP1fw5xCw&usqp=CAU",
    },
    {
      key: 23,
      label: "React",
      src: "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg",
    },
    { key: 24, label: "Vue.js", src: "https://i.redd.it/d3sv005vnui71.jpg" },
    {
      key: 30,
      label: "Angular ",
      src: "https://c8.alamy.com/comp/J0NY77/businesswoman-avatar-character-icon-J0NY77.jpg",
    },
    {
      key: 31,
      label: "jQuery",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vh3TObjwERKVEHrBIPYKmGfHAaSv39qYyT1XsMB9BRE5y4Kn_qSLRO079U1L1SOOwbs&usqp=CAU",
    },
    {
      key: 32,
      label: "Polymer",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjGtv1f5OCiJdRG9sqoH-ty64_hP1fw5xCw&usqp=CAU",
    },
    {
      key: 33,
      label: "React",
      src: "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg",
    },
    { key: 34, label: "Vue.js", src: "https://i.redd.it/d3sv005vnui71.jpg" },
    {
      key: 40,
      label: "Angular ",
      src: "https://c8.alamy.com/comp/J0NY77/businesswoman-avatar-character-icon-J0NY77.jpg",
    },
    {
      key: 41,
      label: "jQuery",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vh3TObjwERKVEHrBIPYKmGfHAaSv39qYyT1XsMB9BRE5y4Kn_qSLRO079U1L1SOOwbs&usqp=CAU",
    },
    {
      key: 42,
      label: "Polymer",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjGtv1f5OCiJdRG9sqoH-ty64_hP1fw5xCw&usqp=CAU",
    },
    {
      key: 43,
      label: "React",
      src: "https://image.freepik.com/free-vector/young-man-avatar-character-vector-illustration-design_24877-18516.jpg",
    },
    { key: 44, label: "Vue.js", src: "https://i.redd.it/d3sv005vnui71.jpg" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div style={{ marginBottom: 90 }}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <div style={{ marginLeft: 25 }}>
                <Chip style={{ backgroundColor: "white" }} onDelete={handleDelete(data)} />
                <Avatar
                  style={{ marginLeft: -10, marginTop: -25 }}
                  alt="Remy Sharp"
                  src={data.src}
                />
              </div>
              <div style={{ maxWidth: 100 }}>
                <p
                  className="text-center"
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    whiteSpace: "normal",
                    overflow: "hidden",
                  }}
                >
                  {data.label}
                </p>
                <p
                  className="text-center"
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    maxWidth: 80,
                    marginTop: -20,
                    overflow: "hidden",
                  }}
                >
                  Designation 2
                </p>
              </div>
            </ListItem>
          );
        })}
      </Paper>
      <div>
        <div style={{ float: "right", marginTop: 15 }}>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <p className="text-center" style={{ fontSize: 12, fontWeight: 400 }}>
            Add
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stakeholders;
