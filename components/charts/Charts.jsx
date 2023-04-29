import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useStartSimulator from "./useStartSimulator";
import { getRandomColor } from "../../utils/colors";

export const Charts = (props) => {
  const { realtimeData, initialPopulation } = useStartSimulator();
  const dataKey = Object.keys(realtimeData[0] || []);
  console.log(realtimeData);
  return (
    <ResponsiveContainer width="99%" aspect={3} className={"w-full"}>
      <LineChart data={initialPopulation} className="mx-auto mt-4">
        {dataKey.map((d, i) => (
          <Line
            key={i}
            type="basis"
            dataKey={d}
            stroke={getRandomColor(i)}
            dot={false}
          />
        ))}
        {/* <CartesianGrid /> */}
        <XAxis />
        <YAxis domain={[0, 500]} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
export const GCharts = (props) => {
  const dataKey = props.environment || [];
  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <LineChart data={dataKey} className="mx-auto">
        <Line type="monotone" dataKey="glucose" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="adenine" stroke="#3384d8" dot={false} />
        <Line type="monotone" dataKey="lysine" stroke="#37b7b9" dot={false} />
        {/* <CartesianGrid /> */}
        <XAxis />
        <YAxis />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
