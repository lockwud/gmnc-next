"use client";

import React from 'react';
import { Table } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';
import { ShieldCheckIcon, ShieldPlusIcon, HistoryIcon, LockIcon } from 'lucide-react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Badge } from '@/components/ui/Badge';

const MOCK_ROLES = [
  { name: 'Admin', usersCount: 2, permissions: ['system.manage', 'appointment.read', 'support.read'] },
  { name: 'Provider', usersCount: 45, permissions: ['appointment.read', 'appointment.write', 'telehealth.start'] },
  { name: 'Caregiver', usersCount: 1002, permissions: ['appointment.read', 'telehealth.join'] },
  { name: 'Support', usersCount: 12, permissions: ['support.read'] },
];

export default function RoleManagementPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="space-y-8 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Roles & Permissions</h1>
            <p className="text-slate-400 text-xs mt-1 font-bold">Configure role-based access levels and security policies.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="gap-2 px-6 font-bold rounded-xl border-slate-200">
               <HistoryIcon size={18} /> Logs
             </Button>
             <Button variant="amber" className="gap-2 px-6 font-bold shadow-lg shadow-accent/20 rounded-xl">
               <ShieldPlusIcon size={18} /> New Role
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {MOCK_ROLES.map((role) => (
             <div key={role.name} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-accent/20 transition-all group">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-accent/5 text-accent flex items-center justify-center">
                         <ShieldCheckIcon size={24} />
                      </div>
                      <div>
                         <h3 className="text-lg font-extrabold text-slate-900">{role.name}</h3>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{role.usersCount} Active Users</p>
                      </div>
                   </div>
                   <button className="text-[11px] font-bold text-accent uppercase tracking-widest hover:underline">Edit Role</button>
                </div>

                <div className="space-y-2">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <LockIcon size={12} /> Key Permissions
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {role.permissions.map(p => (
                        <Badge key={p} variant="secondary" className="bg-slate-50 text-slate-500 border-none font-bold text-[10px]">
                           {p}
                        </Badge>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>

        <Table 
          title="Role Change Logs"
          data={[
            { id: 1, date: '2025-05-01 10:20', admin: 'Admin.User', action: 'Modified Caregiver Permissions', target: 'Caregiver Role' },
            { id: 2, date: '2025-04-28 14:15', admin: 'Admin.User', action: 'Created Support Role', target: 'Support Role' },
          ]}
          columns={[
            { header: 'Timestamp', accessor: 'date', className: 'text-[11px] font-bold text-slate-400' },
            { header: 'Administrator', accessor: 'admin', className: 'font-bold text-primary text-xs' },
            { header: 'Action', accessor: 'action', className: 'text-xs text-slate-600 font-medium' },
            { header: 'Target', accessor: 'target', className: 'text-[10px] font-bold text-accent uppercase' },
          ]}
        />
      </div>
    </ProtectedRoute>
  );
}
