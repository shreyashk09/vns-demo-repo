import { Stack } from "@mui/material";
import RightPannel from './RightPannel';
import CustomizedExpansionPanels from './expandbar';
import React from "react";
const NewPlan=()=>{
    return(
    <Stack  className="addNew"  direction="row" style={{backgroundColor:"#F3F3F3",height:700,overflow:"auto"}} spacing={1}  >      
    <div className="addNew" style={{ width:1000, backgroundColor:"#F3F3F3",}}><CustomizedExpansionPanels /></div>
    <div ><RightPannel/></div>      
  </Stack>
  );
}
export default NewPlan;
