"use client";

import * as React from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  MessageSquare, 
  Clock, 
  ArrowUpRight,
  ShieldAlert,
  Ticket,
  UserCheck2,
  AlertTriangle,
  Download,
  X,
  Send,
  MoreHorizontal,
  Paperclip
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tickets = [
  { id: "0033xe7e", issue: "Abuse Report", status: "Unresolved", assigned: "Portia Bewini", priority: "High", date: "Today", issuer: "Caregiver", concern: "My therapist has been verbally abusive and threatening towards me." },
  { id: "0033xe2e", issue: "App Bug", status: "Open", assigned: "Elvis Kuma", priority: "High", date: "Today", issuer: "Caregiver", concern: "The app crashes every time I try to upload a document." },
  { id: "0033xa7e", issue: "Complaint", status: "In Review", assigned: "Elvis Kuma", priority: "Medium", date: "Yesterday", issuer: "Therapist", concern: "Payment hasn't reflected in my account for over a week." },
  { id: "0033xa5a", issue: "Feature request", status: "Resolved", assigned: "Elvis Kuma", priority: "Low", date: "Yesterday", issuer: "Caregiver", concern: "Would love to have a dark mode option." },
];

export default function SupportPage() {
  const [selectedTicket, setSelectedTicket] = React.useState<typeof tickets[0] | null>(tickets[0]);
  const [showNewTicketModal, setShowNewTicketModal] = React.useState(false);
  const [showReplyModal, setShowReplyModal] = React.useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary tracking-tight">Support</h1>
          <p className="text-slate-500 mt-1 font-medium">Manage system-wide complaints and support requests.</p>
        </div>
        <Button 
          variant="amber" 
          className="gap-2 shrink-0 h-11 px-6 font-bold shadow-lg shadow-accent/20 rounded-xl"
          onClick={() => setShowNewTicketModal(true)}
        >
          <MessageSquare size={18} /> New Ticket
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Support Ticket", value: 500, icon: Ticket, color: "text-emerald-500", bg: "bg-emerald-50" },
          { label: "Open Ticket", value: 300, icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
          { label: "Resolved Tickets", value: 195, icon: UserCheck2, color: "text-sky-500", bg: "bg-sky-50" },
          { label: "High Ticket", value: 5, icon: ShieldAlert, color: "text-rose-500", bg: "bg-rose-50" },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-none shadow-sm group hover:shadow-md transition-all">
            <div className="flex items-center gap-5">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                <stat.icon size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
                <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Table Area */}
        <Card className="flex-1 overflow-hidden border border-slate-100 shadow-sm h-fit bg-white rounded-[2rem]">
          <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  placeholder="Search by ID, name or type..." 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500/50 transition-all font-medium"
                />
              </div>
              <Button variant="ghost" className="h-12 px-5 text-slate-500 text-sm font-bold gap-2 hover:bg-slate-50 rounded-2xl border border-slate-50">
                <Filter size={18} className="text-slate-400" /> Filters
              </Button>
            </div>
            <div className="flex items-center gap-2">
               <span className="text-xs font-bold text-slate-400">1-10 of 500</span>
               <div className="flex gap-1">
                 <button className="w-8 h-8 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary transition-colors disabled:opacity-30" disabled>&lt;</button>
                 <button className="w-8 h-8 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">&gt;</button>
               </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/30">
                  <th className="p-5 pl-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">No.</th>
                  <th className="p-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Ticket Number</th>
                  <th className="p-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Issue</th>
                  <th className="p-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Status</th>
                  <th className="p-5 pr-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Assigned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {tickets.map((ticket, idx) => (
                  <tr 
                    key={ticket.id} 
                    onClick={() => setSelectedTicket(ticket)}
                    className={cn(
                      "hover:bg-emerald-50/30 transition-all cursor-pointer group",
                      selectedTicket?.id === ticket.id && "bg-emerald-50/50"
                    )}
                  >
                    <td className="p-5 pl-8 text-sm text-slate-400 font-bold">{idx + 1}.</td>
                    <td className="p-5 text-sm font-bold text-primary transition-colors group-hover:text-emerald-600 uppercase">
                      {ticket.id}
                    </td>
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-700">{ticket.issue}</span>
                        {ticket.priority === "High" && <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-tighter">Emergency</span>}
                      </div>
                    </td>
                    <td className="p-5">
                      <Badge variant={
                         ticket.status === "Unresolved" ? "danger" : 
                         ticket.status === "Open" ? "warning" : 
                         ticket.status === "Resolved" ? "success" : "info"
                      } className="text-[10px] uppercase font-bold border-none px-2 py-0.5">
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="p-5 pr-8">
                       <span className="text-sm font-bold text-slate-500">{ticket.assigned}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Details Sidebar Area */}
        <AnimatePresence mode="wait">
          {selectedTicket && (
            <motion.div
              key={selectedTicket.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-full lg:w-[400px] shrink-0"
            >
              <Card className="border border-slate-100 shadow-xl h-full flex flex-col overflow-hidden bg-white rounded-[2.5rem]">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-primary">Ticket Details</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-300 hover:text-primary rounded-xl overflow-hidden" onClick={() => setSelectedTicket(null)}>
                      <X size={20} />
                    </Button>
                  </div>
                </div>
                
                <div className="p-8 space-y-8 flex-1 overflow-y-auto">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ticket ID</p>
                      <p className="text-xl font-bold text-primary uppercase">{selectedTicket.id}</p>
                    </div>
                    <Badge variant="outline" className="text-primary font-bold border-slate-200">{selectedTicket.issuer}</Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Concern Reported</p>
                    <div className="p-6 rounded-3xl bg-slate-50 text-sm text-slate-600 leading-relaxed font-medium border border-slate-100/50">
                      {selectedTicket.concern}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Evidence Attachments</p>
                    <div className="group relative rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 h-52 shadow-inner">
                       <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                          <AlertTriangle size={48} strokeWidth={1.5} />
                       </div>
                       <div className="absolute inset-x-0 bottom-0 p-4 bg-black/40 backdrop-blur-md opacity-0 translation-all duration-300 group-hover:opacity-100 flex items-center justify-between">
                         <div className="text-white">
                           <p className="text-xs font-bold">incident_log.pdf</p>
                           <p className="text-[10px] opacity-70">1.2 MB</p>
                         </div>
                         <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-9 w-9 rounded-xl">
                           <Download size={20} />
                         </Button>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 border-t border-slate-50 bg-slate-50/30 grid grid-cols-2 gap-3">
                   <Button variant="ghost" className="h-12 font-bold text-slate-500 bg-white border border-slate-100 rounded-2xl">
                     Escalate
                   </Button>
                   <Button 
                    variant="amber" 
                    className="h-12 font-bold rounded-2xl group shadow-lg shadow-accent/10"
                    onClick={() => setShowReplyModal(true)}
                   >
                     Reply to Ticket
                     <Badge className="ml-2 bg-white/20 border-none px-1.5 py-0.5 text-[10px]">3</Badge>
                   </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={showNewTicketModal} 
        onClose={() => setShowNewTicketModal(false)}
        title="Create New Ticket"
      >
        <form className="space-y-6">
           <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1.5">
                   <label className="text-sm font-bold text-primary ml-1">Issuer Name</label>
                   <Input placeholder="Enter name" className="rounded-2xl h-12" />
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-sm font-bold text-primary ml-1">Type</label>
                   <select className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none cursor-pointer">
                      <option>Select Type</option>
                      <option>Caregiver</option>
                      <option>Provider</option>
                      <option>Parent</option>
                   </select>
                 </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-primary ml-1">Issue Category</label>
                <select className="w-full h-12 px-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none cursor-pointer">
                    <option>Select Category</option>
                    <option>Abuse Report</option>
                    <option>Technical Issue</option>
                    <option>Payment Dispute</option>
                    <option>General Support</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-primary ml-1">Detailed Concern</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe the issue in detail..."
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none"
                />
              </div>
           </div>
           <div className="flex gap-2 pt-2">
              <Button variant="ghost" className="flex-1 h-12 rounded-2xl text-slate-500" onClick={() => setShowNewTicketModal(false)}>Cancel</Button>
              <Button variant="amber" className="flex-1 h-12 rounded-2xl font-bold">Create Ticket</Button>
           </div>
        </form>
      </Modal>

      <Modal
        isOpen={showReplyModal}
        onClose={() => setShowReplyModal(false)}
        title="Reply to Ticket"
        maxWidth="max-w-lg"
      >
        <div className="space-y-6 bg-white -mt-2">
           {/* Mock Chat History */}
           <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">C</div>
                 <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-xs font-medium text-slate-600 max-w-[80%]">
                    Hello, I am still waiting for the response regarding my incident report. This is urgent.
                 </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                 <div className="bg-emerald-500 text-white p-4 rounded-2xl rounded-tr-none text-xs font-medium max-w-[80%]">
                    Hi! We are currently investigating the matter and checking the therapist's logs. We will get back to you shortly.
                 </div>
                 <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">A</div>
              </div>
           </div>

           <div className="space-y-4 pt-4 border-t border-slate-50">
              <div className="relative">
                <textarea 
                  placeholder="Type your response here..."
                  className="w-full p-4 pb-14 bg-slate-50 border border-slate-100 rounded-3xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none min-h-[120px]"
                />
                <div className="absolute bottom-3 left-3 flex gap-2">
                   <Button size="icon" variant="ghost" className="h-9 w-9 text-slate-400 bg-white shadow-sm border border-slate-100">
                      <Paperclip size={18} />
                   </Button>
                </div>
                <div className="absolute bottom-3 right-3">
                   <Button variant="amber" className="h-9 px-5 rounded-xl font-bold gap-2">
                      Send <Send size={14} />
                   </Button>
                </div>
              </div>
           </div>
        </div>
      </Modal>
    </div>
  );
}
