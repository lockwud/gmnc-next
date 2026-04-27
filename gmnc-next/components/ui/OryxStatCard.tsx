import React from 'react';
import { Card } from './Card';
import { cn } from '@/lib/utils';

interface SubMetric {
  label: string;
  value: string | number;
  color: 'emerald' | 'rose' | 'slate' | 'amber' | 'blue';
}

interface OryxStatCardProps {
  title: string;
  value: string | number;
  subMetrics?: SubMetric[];
  icon?: React.ReactNode;
  className?: string;
}

export const OryxStatCard: React.FC<OryxStatCardProps> = ({
  title,
  value,
  subMetrics,
  icon,
  className,
}) => {
  const colorMap = {
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    rose: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    slate: 'text-slate-600 bg-slate-50 border-slate-100',
    amber: 'text-amber-600 bg-amber-50 border-amber-100',
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
  };

  const badgeColorMap = {
    emerald: 'bg-emerald-500',
    rose: 'bg-emerald-500',
    slate: 'bg-slate-500',
    amber: 'bg-amber-500',
    blue: 'bg-blue-500',
  };

  return (
    <Card className={cn('p-6 bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md relative group overflow-hidden', className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-bold text-slate-800">{title}</h3>
        {icon && <div className="text-slate-400 group-hover:text-[#10B981] transition-colors">{icon}</div>}
      </div>
      
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</span>
      </div>

      {subMetrics && subMetrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-slate-50">
          {subMetrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider",
                colorMap[metric.color]
              )}
            >
              <span>{metric.label}</span>
              <span className="opacity-60">{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Decorative top border active on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#10B981] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Card>
  );
};
