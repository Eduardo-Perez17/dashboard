"use client"

import { TrendingUp, TrendingDown, Activity, PieChart, BarChart3 } from "lucide-react"

export function AnalyticsMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Volatility */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-[#86efac]" />
            <h3 className="text-sm text-[#919191]">Portfolio Volatility</h3>
          </div>
          <TrendingDown className="h-4 w-4 text-[#86efac]" />
        </div>
        <div className="text-3xl font-bold text-white mb-2">12.4%</div>
        <p className="text-xs text-[#919191]">↓ 2.3% from last month</p>
      </div>

      {/* Sharpe Ratio */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            <h3 className="text-sm text-[#919191]">Sharpe Ratio</h3>
          </div>
          <TrendingUp className="h-4 w-4 text-blue-400" />
        </div>
        <div className="text-3xl font-bold text-white mb-2">1.85</div>
        <p className="text-xs text-[#919191]">↑ 0.12 from last month</p>
      </div>

      {/* Max Drawdown */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-orange-400" />
            <h3 className="text-sm text-[#919191]">Max Drawdown</h3>
          </div>
          <TrendingUp className="h-4 w-4 text-orange-400" />
        </div>
        <div className="text-3xl font-bold text-white mb-2">-8.2%</div>
        <p className="text-xs text-[#919191]">↑ 3.1% recovery potential</p>
      </div>

      {/* Win Rate */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            <h3 className="text-sm text-[#919191]">Win Rate</h3>
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-2">68.5%</div>
        <p className="text-xs text-[#919191]">32 winning trades out of 47</p>
      </div>

      {/* Profit Factor */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-purple-400" />
            <h3 className="text-sm text-[#919191]">Profit Factor</h3>
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-2">2.34</div>
        <p className="text-xs text-[#919191]">Gross gains vs losses ratio</p>
      </div>

      {/* Recovery Factor */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-pink-400" />
            <h3 className="text-sm text-[#919191]">Recovery Factor</h3>
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-2">4.2x</div>
        <p className="text-xs text-[#919191]">Net profit vs max drawdown</p>
      </div>
    </div>
  )
}
