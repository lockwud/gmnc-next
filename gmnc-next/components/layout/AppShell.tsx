"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutProvider, useLayout } from "@/lib/context/LayoutContext";
import { cn } from "@/lib/utils";

function ShellContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useLayout();

  return (
    <div className="flex min-h-screen bg-content-bg">
      <Sidebar />
      {/* Main Wrapper with dynamic margin based on Sidebar width */}
      <div 
        className={cn(
          "flex-1 flex flex-col min-w-0 transition-[padding] duration-200 ease-in-out",
          isCollapsed ? "md:pl-[80px]" : "md:pl-[280px]"
        )}
      >
        <TopBar />
        <main className="flex-1 overflow-x-hidden p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ShellContent>{children}</ShellContent>
    </LayoutProvider>
  );
}
