import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Charts = (props) => {
  const dataKey = Object.keys(props.realtimeData[0] || []);
  return (
    <LineChart
      width={1000}
      height={200}
      data={props.realtimeData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      className="mx-auto mt-4"
    >
      {dataKey.map((d) => (
        <Line type="basis" dataKey={d} stroke="#8884d8" dot={false} />
      ))}
      <CartesianGrid stroke="#3c3c3c" strokeDasharray="5 5" />
      <XAxis dataKey="time" />
      <YAxis domain={[0, 700]} />
      <Tooltip />
    </LineChart>
  );
};
export const GCharts = (props) => {
  const dataKey = props.environment || [];
  // console.log(props.realtimeData);
  return (
    <LineChart
      width={1000}
      height={200}
      data={dataKey}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      className="mx-auto"
    >
      <Line type="monotone" dataKey="glucose" stroke="#8884d8" dot={false} />
      <Line type="monotone" dataKey="adenine" stroke="#3384d8" dot={false} />
      <Line type="monotone" dataKey="lysine" stroke="#5524d8" dot={false} />
      <CartesianGrid stroke="#3c3c3c" strokeDasharray="5 5" />
      <XAxis />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
