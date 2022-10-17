import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data1 = [
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
];

const Charts = (props: any) => {
  const dataKey = Object.keys(props.realtimeData[0] || []);
  console.log(props.realtimeData);

  return (
    <LineChart
      width={1000}
      height={300}
      data={props.realtimeData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      {dataKey.map((d) => (
        <Line type="monotone" dataKey={d} stroke="#8884d8" />
      ))}
      {/* <Line type="monotone" dataKey="n_adeop" stroke="#8884d8" />
      <Line type="monotone" dataKey="n_lysop" stroke="#3384d8" />
      <Line type="monotone" dataKey="n_adewt" stroke="#5524d8" /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Charts;
