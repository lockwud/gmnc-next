"use client";

import * as React from "react";
import { Search, Bell, HelpCircle, ChevronRight, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { usePathname, useRouter } from "next/navigation";
import { useUI } from "@/lib/context/UIContext";
import { NotificationsPopover } from "@/components/dashboard/NotificationsPopover";
import Link from "next/link";

export function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setSearchOpen, setNotificationsOpen, isNotificationsOpen, setProfileOpen, isProfileOpen } = useUI();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-white border-b border-slate-100 flex items-center px-8 justify-between gap-8 shadow-sm">
      {/* Search & Breadcrumbs Container */}
      <div className="flex-1 flex items-center gap-8">
        <div className="w-full max-w-md">
          <Input 
            placeholder="Search anything... (Ctrl + K)" 
            icon={<Search size={18} />}
            className="h-10 border-slate-200/60 bg-white/50 focus:bg-white cursor-pointer"
            onClick={() => setSearchOpen(true)}
            readOnly
          />
        </div>

        {/* Breadcrumbs */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-400">
          <Link href="/dashboard" className="hover:text-primary cursor-pointer transition-colors">Home</Link>
          {segments.map((segment, index) => (
            <React.Fragment key={segment}>
              <ChevronRight size={14} className="text-slate-300" />
              <Link 
                href={`/${segments.slice(0, index + 1).join("/")}`}
                className={cn(
                  "capitalize cursor-pointer transition-colors hover:text-primary",
                  index === segments.length - 1 && "text-primary cursor-default hover:text-primary"
                )}
              >
                {segment.replace("-", " ")}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-500 gap-2">
          <HelpCircle size={18} />
          <span>Need Help?</span>
        </Button>

        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn("text-slate-500 relative transition-all", isNotificationsOpen && "bg-slate-50 text-primary")}
            onClick={() => setNotificationsOpen(!isNotificationsOpen)}
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
          </Button>
          <NotificationsPopover />
        </div>

        <div className="h-8 w-[1px] bg-slate-200" />

        {/* User Profile */}
        <div className="relative group">
          <div className="flex items-center gap-3 pl-2 opacity-50 cursor-not-allowed group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-sm font-semibold text-primary leading-tight">Admin User</span>
              <span className="text-xs text-slate-400">System Administrator</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary group-hover:bg-slate-200 cursor-pointer transition-colors">
              <User size={20} />
            </div>
          </div>
          
          {/* Simple Mock Profile Menu */}
          <div className="absolute right-0 top-14 w-48 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 hidden group-hover:block animate-in fade-in zoom-in duration-200 z-[60]">
             <Link href="/settings" className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl text-sm font-bold text-slate-600 transition-all">Profile Settings</Link>
             <Link href="/login" className="w-full flex items-center gap-3 px-4 py-2 hover:bg-rose-50 rounded-xl text-sm font-bold text-rose-500 transition-all">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
