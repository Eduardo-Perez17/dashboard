"use client"

import { AlertCircle, Shield, Zap } from "lucide-react"

export function RiskMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Value at Risk */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="h-5 w-5 text-orange-400" />
          <h3 className="text-sm font-medium text-[#919191]">Value at Risk (95%)</h3>
        </div>
        <div className="text-3xl font-bold text-white mb-4">-$456</div>
        <div className="space-y-2">
          <p className="text-xs text-[#919191]">Potential daily loss at 95% confidence</p>
          <div className="flex items-center gap-2 p-2 bg-[#1A1A1A] rounded-lg">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <span className="text-xs text-[#919191]">Medium Risk Level</span>
          </div>
        </div>
      </div>

      {/* Beta Coefficient */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-blue-400" />
          <h3 className="text-sm font-medium text-[#919191]">Portfolio Beta</h3>
        </div>
        <div className="text-3xl font-bold text-white mb-4">0.92</div>
        <div className="space-y-2">
          <p className="text-xs text-[#919191]">Volatility relative to market</p>
          <div className="flex items-center gap-2 p-2 bg-[#1A1A1A] rounded-lg">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-xs text-[#919191]">Lower volatility than market</span>
          </div>
        </div>
      </div>

      {/* Correlation Index */}
      <div className="p-6 bg-[#0D0D0D] rounded-2xl border border-[#1F1F1F]">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-purple-400" />
          <h3 className="text-sm font-medium text-[#919191]">Diversification Index</h3>
        </div>
        <div className="text-3xl font-bold text-white mb-4">0.68</div>
        <div className="space-y-2">
          <p className="text-xs text-[#919191]">Average asset correlation</p>
          <div className="flex items-center gap-2 p-2 bg-[#1A1A1A] rounded-lg">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <span className="text-xs text-[#919191]">Well diversified</span>
          </div>
        </div>
      </div>
    </div>
  )
}
