// src/components/StatsCard.tsx
import { TrendingUp, CheckCircle2 } from 'lucide-react';

interface StatsCardProps {
  todayCompleted: number;
  totalHabits: number;
  maxStreak: number;
}

export const StatsCard = ({ todayCompleted, totalHabits, maxStreak }: StatsCardProps) => {
  const completionRate = totalHabits > 0 ? Math.round((todayCompleted / totalHabits) * 100) : 0;

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-card rounded-2xl p-5 border">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-xl bg-primary/10">
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-sm">Today</h3>
        </div>
        <div className="space-y-0.5">
          <p className="text-3xl font-bold text-foreground">
            {todayCompleted}/{totalHabits}
          </p>
          <p className="text-xs text-muted-foreground">
            {completionRate}% complete
          </p>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-5 border">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-xl bg-accent/30">
            <TrendingUp className="h-4 w-4 text-accent-foreground" />
          </div>
          <h3 className="font-semibold text-foreground text-sm">Streak</h3>
        </div>
        <div className="space-y-0.5">
          <p className="text-3xl font-bold text-foreground">
            {maxStreak}
          </p>
          <p className="text-xs text-muted-foreground">
            {maxStreak === 1 ? 'day' : 'days'}
          </p>
        </div>
      </div>
    </div>
  );
};