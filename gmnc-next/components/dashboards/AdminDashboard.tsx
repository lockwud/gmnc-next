import React, { useState } from 'react';
import { 
  ADMIN_STATS, 
  REVENUE_DATA, 
  ALERTS, 
  AUDIT_LOGS 
} from '@/lib/data/mockData';
import { OryxStatCard } from '@/components/ui/OryxStatCard';
import { ChartContainer } from '@/components/ui/ChartContainer';
import { Modal } from '@/components/ui/Modal';
import { 
  UsersIcon, 
  CreditCardIcon, 
  DollarSignIcon, 
  AlertTriangleIcon,
  VideoIcon,
  ShieldAlertIcon,
  SearchIcon,
  PlusIcon,
  FilterIcon,
  DownloadIcon,
  CalendarIcon
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart, 
  Pie, 
  Cell as PieCell,
  Legend
} from 'recharts';
import { cn } from '@/lib/utils';

const PIE_DATA = [
  { name: 'Active', value: 756, color: '#3b82f6' },
  { name: 'Inactive', value: 12, color: '#f59e0b' },
  { name: 'New', value: 648, color: '#059669' },
];

export function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNewPatientModalOpen, setIsNewPatientModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('This Week');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">System Overview</h1>
          <p className="text-slate-400 text-xs mt-1 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Analytics & Operations
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <form onSubmit={handleSearch} className="relative group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#059669] transition-colors" />
            <input 
              type="text"
              placeholder="Search data..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-[#F3F4F6] border-transparent focus:border-[#059669]/20 focus:bg-white focus:ring-4 focus:ring-[#059669]/5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-900 w-48 lg:w-64 transition-all outline-none"
            />
          </form>

          <button 
            onClick={() => setIsNewPatientModalOpen(true)}
            className="px-4 py-2 bg-[#059669] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <PlusIcon size={14} />
            New Patient
          </button>
          
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-[#059669] hover:bg-emerald-50 transition-all shadow-sm">
            <DownloadIcon size={18} />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['Today', 'This Week', 'This Month', 'All Time'].map((filter) => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg border transition-all whitespace-nowrap",
              activeFilter === filter 
                ? "bg-white border-[#059669] text-[#059669] shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-white hover:border-slate-300"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OryxStatCard 
          title="Total Users"
          value="2,450"
          icon={<UsersIcon size={20} />}
          subMetrics={[
            { label: 'Active', value: '98%', color: 'emerald' },
            { label: 'New', value: '+124', color: 'blue' }
          ]}
        />
        <OryxStatCard 
          title="Revenue (MTD)"
          value="GH₵ 85,210"
          icon={<DollarSignIcon size={20} />}
          subMetrics={[
            { label: 'Growth', value: '+15%', color: 'emerald' },
            { label: 'Target', value: '92%', color: 'amber' }
          ]}
        />
        <OryxStatCard 
          title="Active Subscriptions"
          value="1,240"
          icon={<CreditCardIcon size={20} />}
          subMetrics={[
            { label: 'Pro', value: 890, color: 'blue' },
            { label: 'Basic', value: 350, color: 'slate' }
          ]}
        />
        <OryxStatCard 
          title="Open Tickets"
          value="12"
          icon={<AlertTriangleIcon size={20} />}
          subMetrics={[
            { label: 'Critical', value: 3, color: 'rose' },
            { label: 'Queue', value: 'Stable', color: 'emerald' }
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OryxStatCard 
          title="Audit Volume"
          value="14.2k"
          icon={<ShieldAlertIcon size={20} className="text-[#059669]" />}
          subMetrics={[{ label: 'Security', value: 'Nominal', color: 'emerald' }]}
        />
        <OryxStatCard 
          title="Referral Stats"
          value="176"
          icon={<PlusIcon size={20} className="text-blue-500" />}
          subMetrics={[{ label: 'Conversion', value: '8.4%', color: 'blue' }]}
        />
        <OryxStatCard 
          title="Integrations"
          value="4 / 5"
          icon={<PlusIcon size={20} className="text-emerald-500" />}
          subMetrics={[{ label: 'Korle-Bu', value: 'Offline', color: 'rose' }]}
        />
        <OryxStatCard 
          title="System Health"
          value="99.9%"
          icon={<PlusIcon size={20} className="text-[#059669]" />}
          subMetrics={[{ label: 'v2.5.1', value: 'Stable', color: 'emerald' }]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Status Breakdown (Circular Chart) */}
        <ChartContainer title="Patient Overview" subtitle="Status distribution breakdown">
          <div className="h-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {PIE_DATA.map((entry, index) => (
                    <PieCell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>

        {/* Daily Attendance (Bar Chart) */}
        <ChartContainer title="Daily Session Activity" subtitle="Attendance status by weekday" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={REVENUE_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="subscriptions" name="Sessions" radius={[4, 4, 0, 0]}>
                {REVENUE_DATA.map((entry, index) => (
                  <PieCell key={`cell-${index}`} fill={index % 2 === 0 ? '#059669' : '#fda4af'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* User Growth */}
         <ChartContainer title="Platform Growth" subtitle="Monthly new registrations">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorGrowth)" />
              </AreaChart>
            </ResponsiveContainer>
         </ChartContainer>

         <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm overflow-hidden relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Recent Activity</h3>
              <button className="text-[10px] font-bold text-[#059669] uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {AUDIT_LOGS.slice(0, 5).map((log) => (
                <div key={log.id} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100 group hover:border-[#059669]/20 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-[#059669]">
                    <ShieldAlertIcon size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-bold text-slate-900">{log.action}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{log.user} • {log.timestamp}</p>
                  </div>
                  <div className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
                    log.status === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-50 text-emerald-600'
                  )}>
                    {log.status}
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>

      <Modal 
        isOpen={isNewPatientModalOpen} 
        onClose={() => setIsNewPatientModalOpen(false)} 
        title="Add New Patient"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">First Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all" placeholder="john.doe@example.com" />
          </div>
          <div className="pt-4 flex gap-3">
            <button 
              onClick={() => setIsNewPatientModalOpen(false)}
              className="flex-1 py-3 bg-[#059669] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-opacity"
            >
              Register Patient
            </button>
            <button 
              onClick={() => setIsNewPatientModalOpen(false)}
              className="px-6 py-3 bg-slate-100 text-slate-500 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
