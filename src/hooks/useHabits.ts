import { useState, useEffect } from 'react';
import { Habit } from '@/types/habit';

const STORAGE_KEY = 'hably_habits';
const LAST_RESET_KEY = 'hably_last_reset';

const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

const shouldResetDaily = () => {
  const lastReset = localStorage.getItem(LAST_RESET_KEY);
  const today = getTodayDate();
  return lastReset !== today;
};

export const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [todayCompleted, setTodayCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const loadedHabits: Habit[] = JSON.parse(stored);
      setHabits(loadedHabits);

      // Check if we need to reset daily completion
      if (shouldResetDaily()) {
        resetDailyCompletion(loadedHabits);
      } else {
        // Load today's completed habits
        const today = getTodayDate();
        const completed = new Set(
          loadedHabits
            .filter(h => h.completedDates.includes(today))
            .map(h => h.id)
        );
        setTodayCompleted(completed);
      }
    }
  };

  const resetDailyCompletion = (currentHabits: Habit[]) => {
    const today = getTodayDate();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    const updatedHabits = currentHabits.map(habit => {
      // If habit was completed yesterday, keep streak, otherwise reset it
      if (!habit.completedDates.includes(yesterday)) {
        return { ...habit, streak: 0 };
      }
      return habit;
    });

    setHabits(updatedHabits);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHabits));
    localStorage.setItem(LAST_RESET_KEY, today);
    setTodayCompleted(new Set());
  };

  const saveHabits = (updatedHabits: Habit[]) => {
    setHabits(updatedHabits);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHabits));
  };

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      streak: 0,
      lastCompleted: null,
      createdAt: new Date().toISOString(),
      completedDates: [],
    };
    saveHabits([...habits, newHabit]);
  };

  const toggleHabit = (id: string) => {
    const today = getTodayDate();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    const updatedHabits = habits.map(habit => {
      if (habit.id === id) {
        const isCompleted = habit.completedDates.includes(today);
        
        if (isCompleted) {
          // Unchecking - remove today from completed dates and decrease streak
          return {
            ...habit,
            completedDates: habit.completedDates.filter(d => d !== today),
            streak: Math.max(0, habit.streak - 1),
            lastCompleted: habit.completedDates.length > 1 
              ? habit.completedDates[habit.completedDates.length - 2] 
              : null,
          };
        } else {
          // Checking - add today and calculate streak
          const newCompletedDates = [...habit.completedDates, today];
          const wasCompletedYesterday = habit.completedDates.includes(yesterday);
          const newStreak = wasCompletedYesterday ? habit.streak + 1 : 1;

          return {
            ...habit,
            completedDates: newCompletedDates,
            streak: newStreak,
            lastCompleted: today,
          };
        }
      }
      return habit;
    });

    saveHabits(updatedHabits);

    // Update today's completed set
    const newCompleted = new Set(todayCompleted);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setTodayCompleted(newCompleted);
  };

  const deleteHabit = (id: string) => {
    saveHabits(habits.filter(h => h.id !== id));
    const newCompleted = new Set(todayCompleted);
    newCompleted.delete(id);
    setTodayCompleted(newCompleted);
  };

  const isCompletedToday = (id: string) => {
    const today = getTodayDate();
    const habit = habits.find(h => h.id === id);
    return habit?.completedDates.includes(today) || false;
  };

  const getMaxStreak = () => {
    return habits.length > 0 ? Math.max(...habits.map(h => h.streak)) : 0;
  };

  const getTodayCompletedCount = () => {
    const today = getTodayDate();
    return habits.filter(h => h.completedDates.includes(today)).length;
  };

  return {
    habits,
    addHabit,
    toggleHabit,
    deleteHabit,
    isCompletedToday,
    getMaxStreak,
    getTodayCompletedCount,
  };
};

