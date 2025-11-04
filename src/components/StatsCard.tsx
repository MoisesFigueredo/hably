import { TrendingUp, CheckCircle2 } from 'lucide-react';

interface StatsCardProps {
  todayCompleted: number;
  totalHabits: number;
  maxStreak: number;
}

export const StatsCard = ({ todayCompleted, totalHabits, maxStreak }: StatsCardProps) => {
  const completionRate = totalHabits > 0 ? Math.round((todayCompleted / totalHabits) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-card rounded-xl p-6 shadow-card border">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <CheckCircle2 className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Hoje</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-foreground">
            {todayCompleted}/{totalHabits}
          </p>
          <p className="text-sm text-muted-foreground">
            {completionRate}% concluído
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-card border">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-accent/30">
            <TrendingUp className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="font-semibold text-foreground">Maior Streak</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-foreground">
            {maxStreak}
          </p>
          <p className="text-sm text-muted-foreground">
            {maxStreak === 1 ? 'dia consecutivo' : 'dias consecutivos'}
          </p>
        </div>
      </div>
    </div>
  );
};
