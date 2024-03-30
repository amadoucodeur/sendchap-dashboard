"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";

const data = [
  {
    name: "Orange",
    uv: 400000000,
    pv: 900000000,
    amt: 2400,
  },
  {
    name: "Wave",
    uv: 700000000,
    pv: 300000000,
    amt: 2210,
  },
  {
    name: "MTN",
    uv: 400000000,
    pv: 900000000,
    amt: 2290,
  },
  {
    name: "Moov",
    uv: 600000000,
    pv: 900000000,
    amt: 2000,
  },
];

export default function MyBarChart() {
  return (
    // <div className="relative w-[740px] h-[600px] bg-slate-300">
    //   {/* <p className="absolute -rotate-90 stop-0 left-0 bg-slate-600">Montant en F CFA</p> */}

      <BarChart
        width={640}
        height={364}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} />
        <YAxis
          axisLine={false}
          tickFormatter={(value, name, key) =>
            value == 0 ? `${value}` : `${value / 100000000}M`
          }
        />
        <Tooltip />
        <Bar
          dataKey="pv"
          fill="#54D47F"
          width={8}
          radius={[20, 20, 0, 0]}
          barSize={8}
        />
        <Bar dataKey="uv" fill="#FF8066" radius={[20, 20, 0, 0]} barSize={8} />
      </BarChart>
    //   {/* <p className="col-span-2">Réseau</p> */}
    // {/* </div> */}
  );
}
