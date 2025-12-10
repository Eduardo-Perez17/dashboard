"use client";

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

export function SpreadAnalysis() {
  const data = [
    { time: "00:00", btcSpread: 0.18, ethSpread: 0.42, avgSpread: 0.3 },
    { time: "04:00", btcSpread: 0.22, ethSpread: 0.38, avgSpread: 0.3 },
    { time: "08:00", btcSpread: 0.15, ethSpread: 0.35, avgSpread: 0.25 },
    { time: "12:00", btcSpread: 0.16, ethSpread: 0.4, avgSpread: 0.28 },
    { time: "16:00", btcSpread: 0.19, ethSpread: 0.45, avgSpread: 0.32 },
    { time: "20:00", btcSpread: 0.21, ethSpread: 0.48, avgSpread: 0.35 },
    { time: "24:00", btcSpread: 0.16, ethSpread: 0.42, avgSpread: 0.29 },
  ];

  return (
    <div className="bg-[#0D0D0D] rounded-xl border border-[#1F1F1F] p-6">
      <h2 className="text-lg font-bold text-white mb-6">24h Spread Analysis</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#252525" />
          <XAxis dataKey="time" stroke="#919191" style={{ fontSize: "12px" }} />
          <YAxis stroke="#919191" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #252525",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#E7E7E7" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="btcSpread"
            stroke="#86efac"
            strokeWidth={2}
            dot={false}
            name="BTC Spread (%)"
          />
          <Line
            type="monotone"
            dataKey="ethSpread"
            stroke="#60a5fa"
            strokeWidth={2}
            dot={false}
            name="ETH Spread (%)"
          />
          <Line
            type="monotone"
            dataKey="avgSpread"
            stroke="#fbbf24"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Avg Spread (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
