import { Tabs } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import ActiveMainCard from "./ActiveMainCard";

const ActiveMaintenance = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ maxWidth: 1240, background: "#F3F3F3" }}>
      <div style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, background: "#023047" }}>
        <p className="text-center" style={{ color: "white" }}>
          Active Maintenance Plans
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
            label={
              <div style={{ height: 360, width: 360 }}>
                <img
                  style={{ marginTop: 100, marginBottom: 143, width: 108, Height: 108 }}
                  src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-blue-512.png"
                  alt="Logo"
                />
              </div>
            }
          />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
          <Tab style={{ marginRight: 30, backgroundColor: "white" }} label={<ActiveMainCard />} />
        </Tabs>
      </div>
    </div>
  );
};
export default ActiveMaintenance;
