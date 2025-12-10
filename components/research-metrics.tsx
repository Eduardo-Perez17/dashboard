"use client"

export function ResearchMetrics() {
  const metrics = [
    {
      label: "Active Research",
      value: "24",
      change: "+3",
      color: "#86efac",
      unit: "projects",
    },
    {
      label: "Avg Confidence",
      value: "87.5%",
      change: "+2.1%",
      color: "#86efac",
      unit: "score",
    },
    {
      label: "Recommendations",
      value: "156",
      change: "+12",
      color: "#86efac",
      unit: "active",
    },
    {
      label: "Research Score",
      value: "9.2/10",
      change: "+0.3",
      color: "#86efac",
      unit: "rating",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-6 hover:border-[#86efac] transition-colors"
        >
          <p className="text-[#919191] text-sm mb-2">{metric.label}</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-[#E7E7E7]">{metric.value}</p>
              <p className="text-xs text-[#919191] mt-1">{metric.unit}</p>
            </div>
            <p className="text-[#86efac] text-sm font-medium">{metric.change}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
