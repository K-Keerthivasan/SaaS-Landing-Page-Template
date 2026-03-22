"use client";

import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PIE_COLORS = ["#6C47FF", "#A38BFF", "#D9D6FF"];

export function SignupsChart({
  data,
}: {
  data: { day: string; signups: number }[];
}) {
  return (
    <div className="h-[260px] min-w-0 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <LineChart data={data} margin={{ left: 0, right: 12, top: 8, bottom: 0 }}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            width={32}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "var(--card)",
              backdropFilter: "blur(14px)",
              color: "var(--foreground)",
            }}
          />
          <Line
            type="monotone"
            dataKey="signups"
            stroke="#6C47FF"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PlanDistributionChart({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  return (
    <div className="h-[260px] min-w-0 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={62}
            outerRadius={94}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 16,
              border: "1px solid var(--border)",
              background: "var(--card)",
              backdropFilter: "blur(14px)",
              color: "var(--foreground)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
