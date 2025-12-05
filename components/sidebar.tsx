"use client"

import { Blocks, BarChart3, Rabbit, Container, Banknote, SquareArrowOutUpRight, Settings2, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <aside className="sticky top-24 h-[calc(100vh-8rem)] md:w-48 lg:w-64 bg-[#0D0D0D] rounded-2xl hidden md:flex flex-col p-8 overflow-y-auto">
      <nav className="flex flex-col gap-8">
        <Link
          href="/"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <Blocks className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">DASHBOARD</span>
        </Link>
        <Link
          href="/analytics"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/analytics") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <BarChart3 className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">ANALYTICS</span>
        </Link>
        <Link
          href="/arbitrader"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/arbitrader") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <Rabbit className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">ARBITRADER</span>
        </Link>
        <Link
          href="/researcher"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/researcher") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <Container className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">RESEARCHER</span>
        </Link>
        <Link
          href="/funds"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/funds") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <Banknote className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">FUNDS</span>
        </Link>
      </nav>

      <div className="mt-auto pt-8 border-t border-[#1F1F1F] flex flex-col gap-8">
        <Link
          href="/support"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/support") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <SquareArrowOutUpRight className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">FINBRO SUPPORT</span>
        </Link>
        <Link
          href="/settings"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/settings") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <Settings2 className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">SETTINGS</span>
        </Link>
        <Link
          href="/logout"
          className={`flex items-center gap-4 transition-colors cursor-pointer ${isActive("/logout") ? "text-[#E7E7E7]" : "text-[#919191] hover:text-[#E7E7E7]"}`}
        >
          <LogOut className="h-6 w-6" />
          <span className="text-sm font-medium tracking-wide">LOGOUT</span>
        </Link>
      </div>
    </aside>
  )
}
