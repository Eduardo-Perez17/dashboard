"use client"

export function ArbitrageMetrics() {
  const metrics = [
    {
      label: "Active Opportunities",
      value: "47",
      change: "+12%",
      isPositive: true,
    },
    {
      label: "Avg Spread",
      value: "2.34%",
      change: "+0.45%",
      isPositive: true,
    },
    {
      label: "Daily P&L",
      value: "$12,450",
      change: "+18.2%",
      isPositive: true,
    },
    {
      label: "Execution Rate",
      value: "94.2%",
      change: "-1.2%",
      isPositive: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[#0D0D0D] rounded-xl p-6 border border-[#1F1F1F] hover:border-[#2F2F2F] transition-colors"
        >
          <p className="text-[#919191] text-sm font-medium mb-2">{metric.label}</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
            <span className={`text-xs font-semibold ${metric.isPositive ? "text-[#86efac]" : "text-[#ff6b6b]"}`}>
              {metric.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
