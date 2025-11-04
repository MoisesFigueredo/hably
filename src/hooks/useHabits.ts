import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface Habit {
  id: string;
  name: string;
  streak: number;
  last_completed: string | null;
  created_at: string;
  completed_dates: string[];
  user_id: string;
}

const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

export const useHabits = () => {
  const { user } = useAuth();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadHabits();
    } else {
      setHabits([]);
      setLoading(false);
    }
  }, [user]);

  const loadHabits = async () => {
    try {
      const { data, error } = await supabase
        .from('habits')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      setHabits(data || []);
    } catch (error) {
      console.error('Error loading habits:', error);
      toast.error('Erro ao carregar hábitos');
    } finally {
      setLoading(false);
    }
  };

  const addHabit = async (name: string) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('habits')
        .insert([
          {
            user_id: user.id,
            name,
            streak: 0,
            last_completed: null,
            completed_dates: [],
          },
        ])
        .select()
        .single();

      if (error) throw error;

      setHabits([...habits, data]);
      toast.success('Hábito adicionado!');
    } catch (error) {
      console.error('Error adding habit:', error);
      toast.error('Erro ao adicionar hábito');
    }
  };

  const toggleHabit = async (id: string) => {
    const today = getTodayDate();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const habit = habits.find((h) => h.id === id);

    if (!habit) return;

    try {
      const isCompleted = habit.completed_dates.includes(today);
      let newCompletedDates: string[];
      let newStreak: number;

      if (isCompleted) {
        // Unchecking
        newCompletedDates = habit.completed_dates.filter((d) => d !== today);
        newStreak = Math.max(0, habit.streak - 1);
      } else {
        // Checking
        newCompletedDates = [...habit.completed_dates, today];
        const wasCompletedYesterday = habit.completed_dates.includes(yesterday);
        newStreak = wasCompletedYesterday ? habit.streak + 1 : 1;
      }

      const { error } = await supabase
        .from('habits')
        .update({
          completed_dates: newCompletedDates,
          streak: newStreak,
          last_completed: isCompleted ? null : today,
        })
        .eq('id', id);

      if (error) throw error;

      setHabits(
        habits.map((h) =>
          h.id === id
            ? {
                ...h,
                completed_dates: newCompletedDates,
                streak: newStreak,
                last_completed: isCompleted ? null : today,
              }
            : h
        )
      );
    } catch (error) {
      console.error('Error toggling habit:', error);
      toast.error('Erro ao atualizar hábito');
    }
  };

  const deleteHabit = async (id: string) => {
    try {
      const { error } = await supabase.from('habits').delete().eq('id', id);

      if (error) throw error;

      setHabits(habits.filter((h) => h.id !== id));
      toast.success('Hábito removido');
    } catch (error) {
      console.error('Error deleting habit:', error);
      toast.error('Erro ao remover hábito');
    }
  };

  const isCompletedToday = (id: string) => {
    const today = getTodayDate();
    const habit = habits.find((h) => h.id === id);
    return habit?.completed_dates.includes(today) || false;
  };

  const getMaxStreak = () => {
    return habits.length > 0 ? Math.max(...habits.map((h) => h.streak)) : 0;
  };

  const getTodayCompletedCount = () => {
    const today = getTodayDate();
    return habits.filter((h) => h.completed_dates.includes(today)).length;
  };

  return {
    habits,
    loading,
    addHabit,
    toggleHabit,
    deleteHabit,
    isCompletedToday,
    getMaxStreak,
    getTodayCompletedCount,
  };
};
