// src/pages/App.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useHabits } from '@/hooks/useHabits';
import { HabitItem } from '@/components/HabitItem';
import { AddHabitDialog } from '@/components/AddHabitDialog';
import { StatsCard } from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { Sparkles, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const AppPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const {
    habits,
    addHabit,
    toggleHabit,
    deleteHabit,
    isCompletedToday,
    getMaxStreak,
    getTodayCompletedCount,
    loading: habitsLoading,
  } = useHabits();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully!');
      navigate('/');
    }
  };

  const motivationalQuotes = [
    "Small habits build great results",
    "One day at a time, you are progressing",
    "Consistency is the key to success",
    "Every habit completed is a victory",
    "You are creating the best version of yourself",
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  if (authLoading || habitsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col max-w-md md:max-w-2xl lg:max-w-4xl mx-auto bg-background">
      {/* Fixed Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-5 py-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              Hably
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSignOut}
            className="h-9 w-9"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          {randomQuote}
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 py-5 space-y-5 animate-fade-in pb-24">
        {/* Stats */}
        <StatsCard
          todayCompleted={getTodayCompletedCount()}
          totalHabits={habits.length}
          maxStreak={getMaxStreak()}
        />

        {/* Habits List */}
        <div className="space-y-2.5">
          {habits.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-2xl border">
              <p className="text-muted-foreground text-sm px-4">
                No habits yet. Tap the button below to get started!
              </p>
            </div>
          ) : (
            habits.map((habit) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                isCompleted={isCompletedToday(habit.id)}
                onToggle={() => toggleHabit(habit.id)}
                onDelete={() => deleteHabit(habit.id)}
              />
            ))
          )}
        </div>
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto p-5 bg-gradient-to-t from-background via-background to-transparent">
        <AddHabitDialog onAdd={addHabit} />
      </div>
    </div>
  );
};

export default AppPage;