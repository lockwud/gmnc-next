"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  ClipboardList, 
  MessageSquare, 
  LifeBuoy, 
  BarChart2, 
  Settings, 
  LogOut,
  ChevronLeft,
  Menu,
  Bell,
  DoorOpen,
  User,
  ListChecks,
  Mail,
  PersonStanding,
  Flag,
  Grid2X2,
  Grid2X2Plus,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useLayout } from "@/lib/context/LayoutContext";

const menuItems = [
  { name: "Dashboard", icon: Grid2X2Plus, href: "/dashboard" },
  { name: "Service Providers", icon: Users, href: "/providers" },
  { name: "Individual with CP", icon: User, href: "/clients" },
  { name: "Task ", icon: ListChecks, href: "/tasks" },
  { name: "Message", icon: Mail, href: "/inbox", badge: 4 },
  { name: "Support", icon: PersonStanding, href: "/support" },
  { name: "Analytics", icon: Flag, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Logout", icon: LogOut, href: "/login" },
];

/** Shared nav items used by both desktop and mobile sidebar */
function NavItems({
  isCollapsed,
  onNavClick,
}: {
  isCollapsed: boolean;
  onNavClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 py-6 px-5 space-y-1 overflow-y-auto custom-scrollbar">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.name} href={item.href} onClick={onNavClick}>
            <div
              className={cn(
                "group flex items-center gap-3 px-3 py-3 rounded-xl transition-all relative text-md",
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-slate-50 hover:text-primary"
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 shrink-0 transition-colors",
                  isActive ? "text-white" : "text-slate-400 group-hover:text-primary"
                )}
              />
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="whitespace-nowrap"
                >
                  {item.name}
                </motion.span>
              )}
              {item.badge && !isCollapsed && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

/** Brand logo header shared by both desktop/mobile */
function SidebarHeader({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div className="h-20 flex items-center px-4 border-b border-slate-50 shrink-0">
      <Link href="/dashboard" className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 overflow-hidden flex items-center justify-center shrink-0 shadow-sm transition-all duration-200">
          <img
            src="/logo.png"
            alt="GmNC Logo"
            className={cn(
              "object-contain transition-all duration-200",
              isCollapsed ? "w-10 h-10" : "w-14 h-14"
            )}
          />
        </div>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-bold text-lg text-primary tracking-tight whitespace-nowrap"
          >
            GmNC{" "}
            <span className="text-emerald-500 font-bold text-[10px] block -mt-1 uppercase tracking-wide">
              getmyneurocare
            </span>
          </motion.span>
        )}
      </Link>
    </div>
  );
}

export function Sidebar() {
  const { isCollapsed, toggleSidebar, isMobileOpen, closeMobileSidebar } = useLayout();

  return (
    <>
      {/* ─── Desktop Sidebar (md+) ─── */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        className={cn(
          "relative h-screen bg-white border-r border-slate-100 text-slate-500 flex flex-col z-50 transition-all duration-200 ease-in-out",
          "hidden md:flex fixed shadow-sm"
        )}
      >
        <SidebarHeader isCollapsed={isCollapsed} />
        <NavItems isCollapsed={isCollapsed} />

        {/* Collapse toggle */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-24 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-md z-[60]"
        >
          <ChevronLeft
            className={cn("w-4 h-4 transition-transform duration-200", isCollapsed && "rotate-180")}
          />
        </button>
      </motion.aside>

      {/* ─── Mobile Sidebar Drawer (< md) ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={closeMobileSidebar}
            />

            {/* Drawer panel */}
            <motion.aside
              key="mobile-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 z-[80] w-72 bg-white border-r border-slate-100 flex flex-col shadow-2xl md:hidden"
            >
              {/* Header row with close button */}
              <div className="flex items-center justify-between pr-4 border-b border-slate-50">
                <SidebarHeader isCollapsed={false} />
                <button
                  onClick={closeMobileSidebar}
                  className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-100 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <NavItems isCollapsed={false} onNavClick={closeMobileSidebar} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
