"use client";

import * as React from "react";
import { 
  Users, 
  UserPlus, 
  AlertTriangle, 
  UserMinus, 
  ShieldCheck,
  Activity
} from "lucide-react";
import { motion } from "framer-motion";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { UserDistributionChart } from "@/components/dashboard/UserDistributionChart";
import { GrowthChart } from "@/components/dashboard/GrowthChart";
import { PendingApprovals } from "@/components/dashboard/PendingApprovals";

export default function DashboardPage() {
  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary tracking-tight">Overview Dashboard</h1>
        <p className="text-slate-500 mt-1 font-medium">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Individual with CP"
          value="400"
          percent="30%"
          change="+0.5% than last month"
          icon={Users}
          iconColor="text-emerald-500"
          iconBg="bg-emerald-50"
        />
        <MetricCard
          title="Service Providers"
          value="100"
          percent="30%"
          change="+0.5% than last month"
          icon={ShieldCheck}
          iconColor="text-sky-500"
          iconBg="bg-sky-50"
        />
        <MetricCard
          title="Inactive Caregivers"
          value="15"
          percent="30%"
          change="+0.5% than last month"
          icon={UserMinus}
          iconColor="text-purple-500"
          iconBg="bg-purple-50"
        />
        <MetricCard
          title="Inactive Providers"
          value="5"
          percent="30%"
          change="+0.5% than last month"
          icon={AlertTriangle}
          iconColor="text-rose-500"
          iconBg="bg-rose-50"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <UserDistributionChart />
        </div>
        <div className="lg:col-span-2">
          <GrowthChart />
        </div>
      </div>

      {/* Full Width Table Row */}
      <div className="pt-2">
        <PendingApprovals />
      </div>
    </div>
  );
}
