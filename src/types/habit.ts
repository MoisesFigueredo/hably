export interface Habit {
  id: string;
  name: string;
  streak: number;
  lastCompleted: string | null;
  createdAt: string;
  completedDates: string[];
}

export interface DailyProgress {
  date: string;
  completedHabits: string[];
}
