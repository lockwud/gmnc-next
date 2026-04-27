"use client";

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SearchIcon, UserPlusIcon, MoreVerticalIcon, ShieldCheckIcon, ShieldAlertIcon, GhostIcon } from 'lucide-react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const MOCK_USERS = [
  { id: 'USR-001', name: 'Dr. Louisa Parker', email: 'louisa@example.com', roles: ['provider'], status: 'Active' },
  { id: 'USR-002', name: 'Admin User', email: 'admin@gmnc.com', roles: ['admin'], status: 'Active' },
  { id: 'USR-003', name: 'Tijani Dromo', email: 'tijani@care.com', roles: ['caregiver'], status: 'Active' },
  { id: 'USR-004', name: 'Inactive Tester', email: 'tester@test.com', roles: ['tester'], status: 'Deactivated' },
];

export default function UserManagementPage() {
  const [search, setSearch] = useState('');

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="space-y-8 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">User Management</h1>
            <p className="text-slate-400 text-xs mt-1 font-bold">Manage system users, roles, and access states.</p>
          </div>
          <Button variant="amber" className="gap-2 px-6 font-bold shadow-lg shadow-accent/20 rounded-xl">
            <UserPlusIcon size={18} /> Add User
          </Button>
        </div>

        <div className="flex items-center gap-4">
           <div className="relative flex-1 max-w-md">
              <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input 
                placeholder="Search by name, email or ID..." 
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-accent/5 focus:border-accent transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
           </div>
        </div>

        <Table 
          title="System Users"
          data={MOCK_USERS.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))}
          columns={[
            { header: 'User', accessor: (item) => (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShieldCheckIcon size={18} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{item.email}</p>
                </div>
              </div>
            )},
            { header: 'Roles', accessor: (item) => (
              <div className="flex gap-1">
                {item.roles.map(r => (
                  <Badge key={r} variant="outline" className="text-[9px] uppercase font-bold border-slate-100">{r}</Badge>
                ))}
              </div>
            )},
            { header: 'Status', accessor: (item) => (
              <span className={cn(
                "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
              )}>
                {item.status}
              </span>
            )},
          ]}
          actions={(item) => (
            <div className="flex items-center gap-2">
               <button className="p-2 text-slate-300 hover:text-accent hover:bg-accent/5 rounded-lg transition-all" title="Impersonate">
                  <GhostIcon size={18} />
               </button>
               <button className="p-2 text-slate-300 hover:text-primary hover:bg-slate-50 rounded-lg transition-all">
                  <MoreVerticalIcon size={18} />
               </button>
            </div>
          )}
        />
      </div>
    </ProtectedRoute>
  );
}
