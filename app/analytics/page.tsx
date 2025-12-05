import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AnalyticsMetrics } from "@/components/analytics-metrics"
import { PortfolioDistribution } from "@/components/portfolio-distribution"
import { AssetPerformance } from "@/components/asset-performance"
import { RiskMetrics } from "@/components/risk-metrics"

export default function Analytics() {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Header />

      {/* Main Scrollable Area */}
      <div className="h-full overflow-y-auto no-scrollbar">
        <main className="flex gap-6 p-6 pt-24 min-h-full">
          <Sidebar />

          {/* Main Content Container */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-white">Analytics</h1>
              <p className="text-[#919191]">Deep insights into your portfolio performance</p>
            </div>

            <AnalyticsMetrics />
            <PortfolioDistribution />
            <AssetPerformance />
            <RiskMetrics />

            {/* Status Indicator */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <div className="w-[13px] h-[13px] rounded-full bg-[#86efac]" />
              <span className="text-sm text-[#919191]">Status</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
