"use client";
import { PieChart, Pie, Cell } from "recharts";

type Props = {
  data: any;
  COLORS: any;
};

export default function MyPieChart({ data, COLORS }: Props) {
  return (
    <PieChart width={128} height={128}>
      <Pie
        data={data}
        cx={128 / 2 - 5}
        cy={128 / 2 - 5}
        innerRadius={128 / 2.8 - 5}
        outerRadius={128 / 2 - 5}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry: any, index: number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
