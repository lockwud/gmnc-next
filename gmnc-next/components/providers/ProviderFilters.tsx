"use client";

import * as React from "react";
import { ChevronDown, Filter, Maximize2, Minimize, Minimize2, Scan } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProviderFiltersProps {
  isZoomed: boolean;
  onToggleZoom: () => void;
}

export function ProviderFilters({ isZoomed, onToggleZoom }: ProviderFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 pb-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* Status Dropdown */}
        <div className="relative">
          <button className="h-11 px-4 pr-10 bg-slate-50 border border-slate-100 rounded-2xl text-[13px] font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2">
            Status
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </button>
        </div>

        {/* Region Dropdown */}
        <div className="relative">
          <button className="h-11 px-4 pr-10 bg-slate-50 border border-slate-100 rounded-2xl text-[13px] font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2">
            Region
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </button>
        </div>

        {/* Date Dropdown */}
        <div className="relative">
          <button className="h-11 px-4 pr-10 bg-slate-50 border border-slate-100 rounded-2xl text-[13px] font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2">
            Date
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
          </button>
        </div>

        {/* Filters Button */}
        <button className="h-11 px-6 bg-slate-50 border border-slate-100 rounded-2xl text-[13px] font-bold text-slate-500 hover:bg-slate-100 transition-all flex items-center gap-2">
          Filters
          <Filter size={16} className="ml-2 text-slate-400" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleZoom}
          className="h-11 w-11 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-primary transition-all"
        >
          {isZoomed ? <Minimize size={20} /> : <Scan size={20} />}
        </Button>
      </div>
    </div>
  );
}
