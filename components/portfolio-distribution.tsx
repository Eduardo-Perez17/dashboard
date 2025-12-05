"use client"

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Technology", value: 35 },
  { name: "Healthcare", value: 25 },
  { name: "Finance", value: 20 },
  { name: "Energy", value: 12 },
  { name: "Consumer", value: 8 },
]

const COLORS = ["#86efac", "#3b82f6", "#f97316", "#a855f7", "#ec4899"]

export function PortfolioDistribution() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Portfolio by Sector */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <h2 className="text-lg font-semibold text-white mb-4">Portfolio by Sector</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Geographic Distribution */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <h2 className="text-lg font-semibold text-white mb-4">Geographic Distribution</h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#919191]">North America</span>
              <span className="text-sm font-semibold text-white">42%</span>
            </div>
            <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
              <div className="h-full bg-[#86efac] rounded-full" style={{ width: "42%" }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#919191]">Europe</span>
              <span className="text-sm font-semibold text-white">28%</span>
            </div>
            <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
              <div className="h-full bg-[#3b82f6] rounded-full" style={{ width: "28%" }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#919191]">Asia Pacific</span>
              <span className="text-sm font-semibold text-white">20%</span>
            </div>
            <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
              <div className="h-full bg-[#f97316] rounded-full" style={{ width: "20%" }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#919191]">Other</span>
              <span className="text-sm font-semibold text-white">10%</span>
            </div>
            <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
              <div className="h-full bg-[#a855f7] rounded-full" style={{ width: "10%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
