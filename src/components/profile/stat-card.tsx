import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

export function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="rounded-md border border-border bg-white/5 p-6">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-sm font-medium text-muted-foreground">{label}</h3>
      </div>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
}

