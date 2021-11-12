import React, { useState } from "react";
import { Collapse} from "reactstrap";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardAsset from "./cardasset";
import Inventory from "./Inventory";
import TextField from "@mui/material/TextField";
import DetailsCard from "./DetailsCard";
import OperationManagement from "./Operation_management";
import StakeHolders from "./StakeHolders";
import FinalApproval from "./FinalApproval";
import FinancialPlanning from "./FinancialPlanning";
import { PDFExport } from "@progress/kendo-react-pdf";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {  Stack } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import logo from "./bses.jpg";
import MyResponsivePie from "./Piechart";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
/* import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; */
const CustomizedExpansionPanels = (props) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  const [Pronamecollapse, setPronameCollapse] = useState(false);
  const Pronametoggle = () => {setPronameCollapse(!Pronamecollapse);setexportFlag(false);}
  const [Detailscollapse, setDetailsCollapse] = useState(false);
  const Detailstoggle = () => {setDetailsCollapse(!Detailscollapse);setexportFlag(false)};
  const [ResourcePlanningcollapse, setResourcePlanningCollapse] =
    useState(false);
  const ResourcePlanningtoggle = () =>
    {setResourcePlanningCollapse(!ResourcePlanningcollapse);setexportFlag(false)}
  const [InventoryPlanningcollapse, setInventoryPlanningCollapse] =
    useState(false);
  const InventoryPlanningtoggle = () =>
    {setInventoryPlanningCollapse(!InventoryPlanningcollapse);setexportFlag(false)}
  const [FinancialPlanningCollapse, setFinancialPlanningCollapse] =
    useState(false);
  const FinancialPlanningtoggle = () =>
    {setFinancialPlanningCollapse(!FinancialPlanningCollapse);setexportFlag(false)}
  const [StakeholdersCollapse, setStakeholdersCollapse] = useState(false);
  const Stakeholderstoggle = () =>
    {setStakeholdersCollapse(!StakeholdersCollapse);setexportFlag(false)}
  const [FinalApprovalcollapse, setFinalApprovalCollapse] = useState(false);
  const FinalApprovaltoggle = () =>
    {setFinalApprovalCollapse(!FinalApprovalcollapse);setexportFlag(false)}
  const [headPos, setheadPos] = useState("absolute");
  const [headVis, setheadVis] = useState("hidden");

  const [exportFlag, setexportFlag] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openBackDrop, setopenBackDrop] = React.useState(false);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    setheadPos("relative");
    setheadVis("visible");
    setexportFlag(true);
    console.log(headPos);
    setopenBackDrop(true);
    
    if (pdfExportComponent.current) {
      setTimeout(() => {  pdfExportComponent.current.save(); }, 9000);      
    }
    setTimeout(() => {  setopenBackDrop(false); }, 8000);
    
  };
  const pstyledata = {
    color: "#FB8500",
    letterSpacing: 1,
    fontWeight: "600",
    fontSize: 24,
    marginLeft: 28,
    marginTop: 10,
    marginBottom: 18,
    height: 28,
    width: 800,
  };
  const buttstyledata = { float: "right", marginTop: -45, marginRight: 25.6 };
  const icstyledata = { color: "#219EBC", height: 12.37 };
  const divstyledata = {
    marginTop: 10,
    maxheight: 76,
    width: 1000,
    border: "solid",
    borderRadius: 4,
    borderColor: "white",
    backgroundColor: "white",
  };
  const [Namevalue, setNamevalue] = React.useState("Project-XXX-YYY-ZZZ");
  const handleChange = (event) => {
    setNamevalue(event.target.value);
  };

  return (
    <div className="addNew" style={{height:700,overflow:"auto",overflowX:"hidden"}}>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={40}
        fileName={`Report for ${new Date().getFullYear()}`}
        author="GMK"
      >
        <div style={{ visibility: headVis, position: headPos }}>
          <div style={{ marginTop: 20 }}>
            <img alt="company logo" style={{ width: 200 }} src={logo} />
          </div>
          <div style={{ marginLeft: 870, marginTop: -80 }}>
            <p>Date: 28-05-2021</p>
            <p style={{ marginTop: -10 }}>Time: 2:35 p.m.</p>
          </div>
          <br />
          <div className="text-center">
            <p style={{ fontSize: 24, fontWeight: 700, color: "#666666" }}>
              Work Order Preview
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#666666",
                marginTop: -10,
              }}
            >
              Order ID Number 210913_M_DIV_BSESDelhi
            </p>
          </div>
        </div>
        <div>
        <div style={divstyledata}>
          <p style={pstyledata}>Project name</p>
          <Button
            
            onClick={Pronametoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || Pronamecollapse}>
            <div style={{ marginLeft: 25, marginTop: 35, marginBottom: 20 }}>
              <TextField
                value={Namevalue}
                label="Enter Project Name"
                onChange={handleChange}
                style={{ width: 900 }}
                placeholder=""
                size="small"
                variant="outlined"
              />
            </div>
          </Collapse>
        </div>

       <div style={{divstyledata}}>
       {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  fontSize="large"  style={{ color: "#219EBC",}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p style={pstyledata}>Project name</p>
          

          </AccordionSummary>
          <AccordionDetails>
          <div style={{ marginLeft: 25 }}>
              <TextField
                value={Namevalue}
                label="Enter Project Name"
                onChange={handleChange}
                style={{ width: 900 }}
                placeholder=""
                size="small"
                variant="outlined"
              />
            </div>
        </AccordionDetails>
        </Accordion> */}
       </div>
        <div style={divstyledata}>
          <p style={pstyledata}>Location</p>
          <Button
            
            onClick={toggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || collapse}>
            <div>
              <CardAsset />
            </div>
          </Collapse>
        </div>


        <div style={divstyledata}>
          <p style={pstyledata}>Details</p>
          <Button
            
            onClick={Detailstoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || Detailscollapse}>
            <div style={{ margin: 40 }}>
              <DetailsCard />
            </div>
          </Collapse>
        </div>
        <div style={divstyledata}>
          <p style={pstyledata}>Operations & Management Planning</p>
          <Button
            
            onClick={ResourcePlanningtoggle}
            style={buttstyledata}
          >
            <p style={icstyledata}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || ResourcePlanningcollapse}>
            <div style={{ margin: 40 }}>
              <OperationManagement/>
            </div>
          </Collapse>
        </div>
        <div style={divstyledata}>
          <p style={pstyledata}>Inventory Planning</p>
          <Button
            
            onClick={InventoryPlanningtoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || InventoryPlanningcollapse}>
            <div style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
              <Inventory />
            </div>
          </Collapse>
        </div>
        <div style={divstyledata}>
          <p style={pstyledata}>Financial Planning</p>
          <Button
            
            onClick={FinancialPlanningtoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || FinancialPlanningCollapse}>
            <div style={{ margin: 40 }}>
              <FinancialPlanning />
            </div>
          </Collapse>
        </div>
        <div style={divstyledata}>
          <p style={pstyledata}>Stakeholders</p>
          <Button
            
            onClick={Stakeholderstoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || StakeholdersCollapse}>
            <div style={{ margin: 40 }}>
              <StakeHolders />
            </div>
          </Collapse>
        </div>
        <div style={divstyledata}>
          <p style={pstyledata}>Final Approval</p>
          <Button
            
            onClick={FinalApprovaltoggle}
            style={{ float: "right", marginTop: -45, marginRight: 25.6 }}
          >
            <p style={{ color: "#219EBC", height: 12.37 }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </p>
          </Button>
          <Collapse isOpen={exportFlag || FinalApprovalcollapse}>
            <div style={{ margin: 40 }}>
              <FinalApproval />
            </div>
          </Collapse>
        </div>
        </div>
        <div
          style={{
            background: "white",
            height: 320,
            visibility: "visible",
            position: "relative",
            marginTop:10,
          }}
        >
          <p
            style={{
              color: "#666666",
              fontSize: 24,
              fontWeight: 600,
              marginLeft: 28,
            }}
          >
            Planning Details
          </p>
          <div
            style={{ width:350, height: 300, marginLeft: 350 }}
          >
            <MyResponsivePie arcs={{"arcLab":true}} />
          </div>
        </div>
      </PDFExport>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <Box sx={{ width: '80%' }}>
      <LinearProgress color="inherit"  />
      </Box>
      </Backdrop>
      <div style={{}}>
        <Stack
          spacing={2}
          style={{backgroundColor:"white",marginTop: 10, }}
        >
          <Button
          onClick={exportPDFWithComponent}
            style={{
              backgroundColor: "white",
              height: 40,
              color: "#219EBC",
              fontSize: 20,
              fontWeight: 500,
              textTransform: "capitalize",
              margin:10,
            }}
          >
            review Work order PDF
          </Button>
          <Button
            onClick={handleClickOpen}
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
              backgroundColor: "#219EBC",
              height: 40,
              margin:10
            }}
          >
            SEND
          </Button>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              {
                <div
                  style={{
                    backgroundColor: "#FFB703",
                    marginLeft: -30,
                    width: 606,
                    marginTop: -20,
                  }}
                >
                  <p style={{ color: "#FFB703" }}>d</p>
                </div>
              }
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Stack direction="row" spacing={3}>
                  <WarningIcon
                    style={{ color: "#FFB703", fontSize: 110, marginTop: 25 }}
                  />
                  <Stack style={{ color: "black" }} spacing={0.1}>
                    <p></p>
                    <p style={{ fontWeight: 600, fontSize: 20 }}>
                      Send Work Order?
                    </p>
                    <p style={{ fontWeight: 400, fontSize: 16 }}>
                      Are you sure you want to send Work Order “Alpha Project”?
                    </p>
                    <p style={{ fontWeight: 400, fontSize: 16 }}>
                      You can’t undo this action.
                    </p>
                  </Stack>
                </Stack>
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ marginTop: -30 }}>
              <Button
                style={{ width: 140, backgroundColor: "white", color: "#FFB703" }}
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                style={{ width: 140, backgroundColor: "#FFB703" }}
                variant="contained"
                onClick={handleClose}
              >
                Send
              </Button>
            </DialogActions>
            <br />
          </Dialog>
        </Stack>
      </div>
    </div>
  );
};

export default CustomizedExpansionPanels;
