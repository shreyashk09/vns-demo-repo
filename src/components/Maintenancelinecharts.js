import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Now: 4000,
    Previous: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Now: 3000,
    Previous: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Now: 2000,
    Previous: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Now: 2780,
    Previous: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Now: 1890,
    Previous: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Now: 2390,
    Previous: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Now: 3490,
    Previous: 4300,
    amt: 2100,
  },
];

class Maintenancelinecharts extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />

          <Line type="monotone" dataKey="Previous" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Now" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
export default Maintenancelinecharts;
