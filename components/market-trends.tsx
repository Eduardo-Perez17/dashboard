"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function MarketTrends() {
  const trendData = [
    { time: "00:00", volatility: 18, momentum: 65 },
    { time: "04:00", volatility: 20, momentum: 58 },
    { time: "08:00", volatility: 22, momentum: 62 },
    { time: "12:00", volatility: 19, momentum: 71 },
    { time: "16:00", volatility: 21, momentum: 68 },
    { time: "20:00", volatility: 23, momentum: 75 },
    { time: "24:00", volatility: 20, momentum: 73 },
  ]

  return (
    <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-6">
      <h2 className="text-xl font-bold text-[#E7E7E7] mb-6">Market Trends (24h)</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" />
          <XAxis dataKey="time" stroke="#919191" style={{ fontSize: "12px" }} />
          <YAxis stroke="#919191" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0D0D0D",
              border: "1px solid #1F1F1F",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#E7E7E7" }}
            formatter={(value) => `${value}%`}
          />
          <Line type="monotone" dataKey="volatility" stroke="#fbbf24" strokeWidth={2} dot={false} name="Volatility" />
          <Line type="monotone" dataKey="momentum" stroke="#86efac" strokeWidth={2} dot={false} name="Momentum" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
