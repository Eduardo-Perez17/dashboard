"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ResearchMetrics } from "@/components/research-metrics";
import { ResearchFindings } from "@/components/research-findings";
import { SentimentAnalysis } from "@/components/sentiment-analysis";
import { MarketTrends } from "@/components/market-trends";

export default function ResearcherPage() {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <Header />

      <div className="h-full overflow-y-auto no-scrollbar">
        <main className="flex gap-6 p-6 pt-24 min-h-full">
          <Sidebar />

          <div className="flex-1 flex flex-col gap-6 min-w-0">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-[#E7E7E7]">
                Research Dashboard
              </h1>
              <div className="flex items-center gap-2">
                <div className="w-[13px] h-[13px] rounded-full bg-[#86efac]" />
                <span className="text-sm text-[#919191]">Live</span>
              </div>
            </div>

            <ResearchMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SentimentAnalysis />
              <MarketTrends />
            </div>
            <ResearchFindings />
          </div>
        </main>
      </div>
    </div>
  );
}
