"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { asset: "AAPL", current: 185, target: 180, allocation: 12 },
  { asset: "MSFT", current: 375, target: 360, allocation: 10 },
  { asset: "GOOGL", current: 140, target: 135, allocation: 8 },
  { asset: "TSLA", current: 280, target: 250, allocation: 5 },
  { asset: "META", current: 520, target: 500, allocation: 4 },
]

export function AssetPerformance() {
  return (
    <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">Top Holdings Performance</h2>
        <p className="text-sm text-[#919191]">Current price vs target allocation</p>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
            <XAxis dataKey="asset" tick={{ fill: "#666" }} />
            <YAxis tick={{ fill: "#666" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1A1A1A",
                border: "1px solid #333",
                borderRadius: "8px",
              }}
              formatter={(value) => `$${value}`}
            />
            <Legend />
            <Bar dataKey="current" fill="#86efac" radius={[8, 8, 0, 0]} />
            <Bar dataKey="target" fill="#666" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
