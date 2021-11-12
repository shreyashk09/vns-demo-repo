import { Tabs } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import ExistingMaintenancecard from "./ExistingMaintenancecard";

const ExistingMaintenance = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div style={{ maxWidth: 1240, background: "#F3F3F3" }}>
        <div style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, background: "#023047" }}>
          <p className="text-center" style={{ color: "white" }}>
            Existing Maintenance Plans
          </p>
        </div>
        <div style={{ marginTop: -5, height: 430 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="white"
            aria-label="scrollable auto tabs example"
          >
            {/* {courses.map(item=>(<Tab label={item.title}/>))} */}

            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
            <Tab
              style={{ marginRight: 30, backgroundColor: "white" }}
              label={<ExistingMaintenancecard />}
            />
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default ExistingMaintenance;
