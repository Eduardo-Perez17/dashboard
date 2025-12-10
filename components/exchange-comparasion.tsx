"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function ExchangeComparison() {
  const data = [
    { exchange: "Binance", spread: 0.12, volume: 2400, liquidity: 95 },
    { exchange: "Kraken", spread: 0.18, volume: 1800, liquidity: 88 },
    { exchange: "Coinbase", spread: 0.24, volume: 1600, liquidity: 92 },
    { exchange: "Bitstamp", spread: 0.22, volume: 1200, liquidity: 85 },
    { exchange: "Gemini", spread: 0.35, volume: 800, liquidity: 72 },
  ]

  return (
    <div className="bg-[#0D0D0D] rounded-xl border border-[#1F1F1F] p-6">
      <h2 className="text-lg font-bold text-white mb-6">Exchange Spread Comparison</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#252525" />
          <XAxis dataKey="exchange" stroke="#919191" style={{ fontSize: "12px" }} />
          <YAxis stroke="#919191" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #252525",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#E7E7E7" }}
          />
          <Bar dataKey="spread" fill="#86efac" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-[#1A1A1A] rounded-lg p-3 border border-[#252525]">
          <p className="text-xs text-[#919191] mb-1">Best Liquidity</p>
          <p className="text-sm font-bold text-white">Binance (95%)</p>
        </div>
        <div className="bg-[#1A1A1A] rounded-lg p-3 border border-[#252525]">
          <p className="text-xs text-[#919191] mb-1">Tightest Spread</p>
          <p className="text-sm font-bold text-[#86efac]">Binance (0.12%)</p>
        </div>
      </div>
    </div>
  )
}
