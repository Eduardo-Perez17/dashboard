"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

export function SentimentAnalysis() {
  const sentimentData = [
    { name: "Bullish", value: 45, color: "#86efac" },
    { name: "Neutral", value: 35, color: "#fbbf24" },
    { name: "Bearish", value: 20, color: "#f87171" },
  ];

  return (
    <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-6">
      <h2 className="text-xl font-bold text-[#E7E7E7] mb-6">
        Market Sentiment
      </h2>

      <div className="flex flex-col items-center gap-4">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={sentimentData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {sentimentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="w-full space-y-2 text-sm">
          {sentimentData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[#919191]">{item.name}</span>
              </div>
              <span className="text-[#E7E7E7] font-semibold">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
