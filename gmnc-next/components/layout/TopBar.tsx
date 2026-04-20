"use client";

import * as React from "react";
import { Search, Bell, HelpCircle, ChevronRight, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { usePathname } from "next/navigation";

export function TopBar() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-40 w-full h-20 bg-white border-b border-slate-100 flex items-center px-8 justify-between gap-8">
      {/* Search & Breadcrumbs Container */}
      <div className="flex-1 flex items-center gap-8">
        <div className="w-full max-w-md">
          <Input 
            placeholder="Search providers, ID, email..." 
            icon={<Search size={18} />}
            className="h-10 border-slate-200/60 bg-white/50 focus:bg-white"
          />
        </div>

        {/* Breadcrumbs */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-400">
          <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
          {segments.map((segment, index) => (
            <React.Fragment key={segment}>
              <ChevronRight size={14} className="text-slate-300" />
              <span className={cn(
                "capitalize cursor-pointer transition-colors hover:text-primary",
                index === segments.length - 1 && "text-primary cursor-default hover:text-primary"
              )}>
                {segment.replace("-", " ")}
              </span>
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
          <Button variant="ghost" size="icon" className="text-slate-500 relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
          </Button>
        </div>

        <div className="h-8 w-[1px] bg-slate-200" />

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-sm font-semibold text-primary leading-tight">Admin User</span>
            <span className="text-xs text-slate-400">System Administrator</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary hover:bg-slate-200 cursor-pointer transition-colors">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
