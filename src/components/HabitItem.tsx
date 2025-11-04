// src/components/HabitItem.tsx
import { Habit } from '@/hooks/useHabits';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Flame, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HabitItemProps {
  habit: Habit;
  isCompleted: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const HabitItem = ({ habit, isCompleted, onToggle, onDelete }: HabitItemProps) => {
  return (
    <div 
      className={cn(
        "group flex items-center gap-3.5 p-4 rounded-2xl border bg-card active:scale-[0.98] transition-smooth",
        isCompleted && "bg-success-light border-primary"
      )}
    >
      <Checkbox
        checked={isCompleted}
        onCheckedChange={onToggle}
        className="h-7 w-7 data-[state=checked]:bg-primary data-[state=checked]:border-primary shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className={cn(
          "font-medium text-foreground transition-smooth text-base",
          isCompleted && "line-through text-muted-foreground"
        )}>
          {habit.name}
        </h3>
        
        {habit.streak > 0 && (
          <div className="flex items-center gap-1.5 mt-1.5 text-sm font-semibold text-primary">
            <Flame className="h-4 w-4" />
            <span>{habit.streak} {habit.streak === 1 ? 'day' : 'days'}</span>
          </div>
        )}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="shrink-0 text-muted-foreground hover:text-destructive h-10 w-10"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};