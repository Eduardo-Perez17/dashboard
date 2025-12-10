import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ArbitrageOpportunities } from "@/components/arbitrage-pportunities";
import { ExchangeComparison } from "@/components/exchange-comparasion";
import { ArbitrageMetrics } from "@/components/arbitrage-metrics";
import { SpreadAnalysis } from "@/components/spread-analysis";

export default function Arbitrader() {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Header />

      {/* Main Scrollable Area */}
      <div className="h-full overflow-y-auto no-scrollbar">
        <main className="flex gap-6 p-6 pt-24 min-h-full">
          <Sidebar />

          {/* Main Content Container */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            <ArbitrageMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ArbitrageOpportunities />
              <ExchangeComparison />
            </div>
            <SpreadAnalysis />

            {/* Status Indicator */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <div className="w-[13px] h-[13px] rounded-full bg-[#86efac]" />
              <span className="text-sm text-[#919191]">Status</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
