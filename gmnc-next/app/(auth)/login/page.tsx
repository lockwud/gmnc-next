"use client";

import * as React from "react";
import { Mail, Lock, ArrowRight, Eye, EyeOff, MoveRight, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthBackground } from "@/components/auth/AuthBackground";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      // Redirect to OTP instead of dashboard
      router.push("/otp");
    }, 1200);
  };

  return (
    <AuthBackground>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full max-w-5xl  grid grid-cols-1 lg:grid-cols-2 backdrop-blur-md rounded-[3rem] border border-blue shadow-premium overflow-hidden relative"
      >
        {/* Brand Side - Glass Texture */}
        <div className="hidden lg:flex flex-col justify-around p-8 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 relative z-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-white/60 shadow-sm">
               <img src="/logo.png" alt="GmNC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary tracking-tight">GmNC</h1>
              <p className="text-emerald-600 font-bold text-[10px] tracking-widest uppercase">getmyneurocare</p>
            </div>
          </motion.div>

          <div className="space-y-8 relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
             >
               <h2 className="text-4xl font-extrabold leading-[1.1] text-primary tracking-tight">
                 Empowering <span className="text-emerald-600">Clinical Focus</span> through digital innovation.
               </h2>
               <div className="h-1.5 w-20 bg-emerald-500 rounded-full mt-6" />
             </motion.div>
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="text-slate-600 text-sm leading-relaxed max-w-sm font-medium"
             >
                The multidisciplinary platform for high-fidelity rehabilitation of children with Cerebral Palsy.
             </motion.p>
          </div>
        </div>

        {/* Login Side */}
        <div className="p-6 lg:p-10 flex flex-col justify-center bg-white/80 relative">
          <div className="mb-4">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-primary mb-1 tracking-tight"
            >
              Sign In
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-500 text-sm font-medium"
            >
              Welcome back! Access your workspace.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <Input 
                label="Email address" 
                placeholder="Enter your email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail size={20} className="text-slate-400" />}
                className="rounded-xl h-11 bg-white/50 focus:bg-white border-slate-200/60 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium"
                required
              />
              <div className="relative">
              <Input 
                  label="Password" 
                  placeholder="Enter your password" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Lock size={20} className="text-slate-400" />}
                  className="rounded-xl h-11 bg-white/50 focus:bg-white border-slate-200/60 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[38px] text-slate-400 hover:text-emerald-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <Select 
                label="Login Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                  { label: "System Administrator", value: "admin" },
                  { label: "Healthcare Provider / Therapist", value: "therapist" },
                  { label: "Parent / Caregiver", value: "parent" }
                ]}
                icon={<UserCheck size={20} className="text-slate-400" />}
                className="rounded-xl h-11 bg-white/50 focus:bg-white border-slate-200/60 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all font-medium appearance-none"
                required
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-between py-2"
            >
              <label className="flex items-center gap-3 cursor-pointer group">
                 <div className="w-5 h-5 rounded-md border-2 border-slate-200 flex items-center justify-center group-hover:border-emerald-500 transition-colors bg-white">
                   <input type="checkbox" className="sr-only peer" />
                   <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 hidden peer-checked:block" />
                 </div>
                 <span className="text-sm font-bold text-slate-500 group-hover:text-slate-700 transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Forgot password?
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                type="submit"
                variant="amber" 
                className="w-full h-11 rounded-xl text-base font-bold shadow-xl shadow-accent/20 group hover:scale-[1.02] active:scale-[0.98] transition-all bg-emerald-600 hover:bg-emerald-700 text-white border-none"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In to Portal
                    <MoveRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-[9px] uppercase tracking-widest font-bold text-slate-400">
                <span className="bg-white/80 rounded-full px-4 py-0.5 backdrop-blur-sm">Secure Access</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="ghost" 
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    alert("Google Login is not configured for this demo.");
                  }, 1000);
                }}
                className="h-9 border-white/60 bg-white/40 rounded-xl hover:bg-white/60 transition-all font-bold gap-2 text-slate-600 shadow-sm text-xs"
              >
                <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="w-4 h-4" alt="Google" />
                Google
              </Button>
              <Button 
                variant="ghost" 
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    alert("Microsoft Login is not configured for this demo.");
                  }, 1000);
                }}
                className="h-9 border-white/60 bg-white/40 rounded-xl hover:bg-white/60 transition-all font-bold gap-2 text-slate-600 shadow-sm text-xs"
              >
                <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" className="w-4 h-4" alt="Microsoft" />
                Microsoft
              </Button>
            </div>

            <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed font-bold uppercase tracking-tight">
              New here? <Link href="/register" className="text-emerald-600 hover:text-emerald-700 transition-all">Create account</Link>
            </p>
          </form>
        </div>
      </motion.div>
    </AuthBackground>
  );
}
