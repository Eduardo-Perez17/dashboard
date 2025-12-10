"use client"

import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

export function ResearchFindings() {
  const findings = [
    {
      id: 1,
      title: "Tech Sector Consolidation",
      category: "Sector Analysis",
      confidence: 92,
      sentiment: "bullish",
      date: "2 hours ago",
      description: "Major consolidation pattern detected in tech stocks. M&A activity expected to increase.",
      icon: TrendingUp,
      tags: ["Technology", "M&A", "Bull Signal"],
    },
    {
      id: 2,
      title: "Fed Rate Expectations Shift",
      category: "Macro",
      confidence: 88,
      sentiment: "neutral",
      date: "4 hours ago",
      description: "Market pricing in fewer rate cuts for 2025. Bond yields showing support at current levels.",
      icon: AlertCircle,
      tags: ["Macro", "Rates", "Fixed Income"],
    },
    {
      id: 3,
      title: "Crypto Regulatory Update",
      category: "Digital Assets",
      confidence: 85,
      sentiment: "bearish",
      date: "6 hours ago",
      description: "New regulatory framework may impact crypto derivatives trading. Monitoring for compliance updates.",
      icon: TrendingDown,
      tags: ["Crypto", "Regulation", "Risk"],
    },
    {
      id: 4,
      title: "Earnings Season Strength",
      category: "Fundamentals",
      confidence: 90,
      sentiment: "bullish",
      date: "8 hours ago",
      description: "Q4 earnings beating expectations across sectors. Forward guidance remains optimistic.",
      icon: TrendingUp,
      tags: ["Earnings", "Fundamentals", "Bull Signal"],
    },
  ]

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "bullish":
        return "#86efac"
      case "bearish":
        return "#f87171"
      default:
        return "#fbbf24"
    }
  }

  return (
    <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-6">
      <h2 className="text-xl font-bold text-[#E7E7E7] mb-6">Latest Research Findings</h2>

      <div className="space-y-4">
        {findings.map((finding) => {
          const Icon = finding.icon
          const sentimentColor = getSentimentColor(finding.sentiment)

          return (
            <div
              key={finding.id}
              className="border border-[#1F1F1F] rounded-lg p-4 hover:border-[#86efac] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: sentimentColor + "20" }}>
                  <Icon className="w-5 h-5" style={{ color: sentimentColor }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[#E7E7E7] font-semibold">{finding.title}</h3>
                      <p className="text-[#919191] text-sm mt-1">{finding.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-[#919191]">{finding.date}</p>
                      <p className="text-xs text-[#919191] mt-1">{finding.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#919191]">Confidence:</span>
                      <div className="w-20 h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${finding.confidence}%`, backgroundColor: sentimentColor }}
                        />
                      </div>
                      <span className="text-xs text-[#E7E7E7] font-medium">{finding.confidence}%</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {finding.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs rounded bg-[#1F1F1F] text-[#919191]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
