"use client";

import { TrendingUp, ArrowRight } from "lucide-react";

export function ArbitrageOpportunities() {
  const opportunities = [
    {
      id: 1,
      pair: "BTC/USD",
      exchange1: "Binance",
      exchange2: "Kraken",
      price1: "$42,850",
      price2: "$42,920",
      spread: "0.16%",
      volume: "$2.4M",
      action: "Buy Kraken",
    },
    {
      id: 2,
      pair: "ETH/USD",
      exchange1: "Coinbase",
      exchange2: "Bitstamp",
      price1: "$2,340",
      price2: "$2,325",
      spread: "0.64%",
      volume: "$1.8M",
      action: "Sell Bitstamp",
    },
    {
      id: 3,
      pair: "AAPL",
      exchange1: "NYSE",
      exchange2: "NASDAQ",
      price1: "$189.45",
      price2: "$189.52",
      spread: "0.04%",
      volume: "$450K",
      action: "Neutral",
    },
    {
      id: 4,
      pair: "SPY",
      exchange1: "ARCA",
      exchange2: "NASDAQ",
      price1: "$456.23",
      price2: "$456.19",
      spread: "0.01%",
      volume: "$789K",
      action: "Monitor",
    },
  ];

  return (
    <div className="bg-[#0D0D0D] rounded-xl border border-[#1F1F1F] p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-[#86efac]" />
        <h2 className="text-lg font-bold text-white">Top Opportunities</h2>
      </div>

      <div className="space-y-4">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="bg-[#1A1A1A] rounded-lg p-4 border border-[#252525] hover:border-[#353535] transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-white">{opp.pair}</p>
                <p className="text-xs text-[#919191]">
                  {opp.exchange1} → {opp.exchange2}
                </p>
              </div>
              <span className="text-sm font-bold text-[#86efac]">
                {opp.spread}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="text-xs">
                <p className="text-[#919191]">{opp.exchange1}</p>
                <p className="text-white font-semibold">{opp.price1}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-[#919191]" />
              <div className="text-xs">
                <p className="text-[#919191]">{opp.exchange2}</p>
                <p className="text-white font-semibold">{opp.price2}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#252525]">
              <span className="text-xs text-[#919191]">Vol: {opp.volume}</span>
              <button className="text-xs font-semibold px-3 py-1 rounded bg-[#86efac]/10 text-[#86efac] hover:bg-[#86efac]/20 transition-colors">
                {opp.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
