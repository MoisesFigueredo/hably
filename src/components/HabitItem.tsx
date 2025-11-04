import { Habit } from '@/types/habit';
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
        "group flex items-center gap-4 p-4 rounded-xl border bg-card shadow-card transition-smooth hover:shadow-card-hover",
        isCompleted && "bg-success-light border-primary"
      )}
    >
      <Checkbox
        checked={isCompleted}
        onCheckedChange={onToggle}
        className="h-6 w-6 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className={cn(
          "font-medium text-foreground transition-smooth",
          isCompleted && "line-through text-muted-foreground"
        )}>
          {habit.name}
        </h3>
        
        {habit.streak > 0 && (
          <div className="flex items-center gap-1.5 mt-1 text-sm font-medium text-primary">
            <Flame className="h-4 w-4" />
            <span>{habit.streak} {habit.streak === 1 ? 'dia' : 'dias'} seguidos</span>
          </div>
        )}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
